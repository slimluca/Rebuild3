import type { LiveModel, ModelFeedResult } from "@/types/model";

const DEFAULT_LIVEJASMIN_FEED_URL = "https://atwmcd.com/api/model/feed";
const DEFAULT_LIVEJASMIN_ACCESS_KEY = "0861d4a47cf6a25b6e7c5406352b2f92";
const LIVEJASMIN_FEED_TIMEOUT_MS = 8_000;
const LIVEJASMIN_FEED_REVALIDATE_SECONDS = 120;

type LiveJasminProfilePictureUrl = {
  size320x240?: string;
  size800x600?: string;
  [key: string]: string | undefined;
};

type LiveJasminModel = {
  uniqueModelId: string;
  performerId: string;
  displayName: string;
  status: string;
  chatRoomUrl: string;
  profilePictureUrl?: LiveJasminProfilePictureUrl | null;
};

type LiveJasminFeedResponse = {
  data?: {
    models?: unknown[];
  };
};

function getFeedParams() {
  return {
    psId: process.env.LIVEJASMIN_FEED_PS_ID || "affil28",
    accessKey: process.env.LIVEJASMIN_FEED_ACCESS_KEY || DEFAULT_LIVEJASMIN_ACCESS_KEY,
    siteId: process.env.LIVEJASMIN_FEED_SITE_ID || "jsm",
    responseFormat: "json",
    imageSizes: process.env.LIVEJASMIN_FEED_IMAGE_SIZES || "320x240,800x600",
    category: process.env.LIVEJASMIN_FEED_CATEGORY || "girl",
    extendedDetails: process.env.LIVEJASMIN_FEED_EXTENDED_DETAILS || "1",
    showOffline: process.env.LIVEJASMIN_FEED_SHOW_OFFLINE || "0"
  } as const;
}

function buildFeedUrl() {
  const url = new URL(process.env.LIVEJASMIN_FEED_URL || DEFAULT_LIVEJASMIN_FEED_URL);

  for (const [key, value] of Object.entries(getFeedParams())) {
    url.searchParams.set(key, value);
  }

  return url;
}

function isLiveJasminModel(value: unknown): value is LiveJasminModel {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<LiveJasminModel>;

  return (
    typeof candidate.uniqueModelId === "string" &&
    typeof candidate.performerId === "string" &&
    typeof candidate.displayName === "string" &&
    typeof candidate.chatRoomUrl === "string" &&
    typeof candidate.status === "string"
  );
}

function getImageUrl(model: LiveJasminModel) {
  return model.profilePictureUrl?.size800x600 ?? model.profilePictureUrl?.size320x240;
}

function normalizeModel(model: LiveJasminModel): LiveModel {
  return {
    id: model.performerId || model.uniqueModelId,
    username: model.uniqueModelId,
    displayName: model.displayName,
    imageUrl: getImageUrl(model),
    profileUrl: model.chatRoomUrl
  };
}

async function getLiveJasminModels(limit?: number): Promise<LiveModel[]> {
  const headers: HeadersInit = {
    accept: "application/json"
  };

  if (process.env.LIVEJASMIN_FEED_TOKEN) {
    headers.Authorization = `Bearer ${process.env.LIVEJASMIN_FEED_TOKEN}`;
  }

  const response = await fetch(buildFeedUrl(), {
    headers,
    next: {
      revalidate: LIVEJASMIN_FEED_REVALIDATE_SECONDS
    },
    signal: AbortSignal.timeout(LIVEJASMIN_FEED_TIMEOUT_MS)
  });

  if (!response.ok) {
    throw new Error(`LiveJasmin feed request failed with ${response.status}`);
  }

  const payload = (await response.json()) as LiveJasminFeedResponse;
  const models = (payload.data?.models ?? []).filter(isLiveJasminModel).map(normalizeModel);

  return typeof limit === "number" ? models.slice(0, limit) : models;
}

export async function getLiveModels(limit = 8): Promise<ModelFeedResult> {
  try {
    const models = await getLiveJasminModels(limit);

    return {
      models,
      configured: true
    };
  } catch {
    return {
      models: [],
      configured: true,
      error: "Feed non raggiungibile"
    };
  }
}

export async function getLiveModelById(id: string): Promise<LiveModel | null> {
  const safeId = id.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);

  if (!safeId) {
    return null;
  }

  const feed = await getLiveModels(100);

  return (
    feed.models.find((model) => model.id === safeId || model.username === safeId) ?? null
  );
}
