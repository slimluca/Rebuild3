import type { LiveModel, ModelFeedResult } from "@/types/model";

type RawModelRecord = Record<string, unknown>;

const FEED_URL = process.env.LIVEJASMIN_FEED_URL;
const FEED_TOKEN = process.env.LIVEJASMIN_FEED_TOKEN;

function asString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function firstString(values: unknown[]) {
  for (const value of values) {
    const stringValue = asString(value);
    if (stringValue) {
      return stringValue;
    }
  }

  return undefined;
}

function getImageUrl(record: RawModelRecord) {
  const direct = firstString([
    record.image,
    record.imageUrl,
    record.thumbnail,
    record.thumbnailUrl,
    record.preview,
    record.previewUrl,
    record.profilePicture
  ]);

  if (direct) {
    return direct;
  }

  const pictures = record.pictures ?? record.images ?? record.photos;
  if (Array.isArray(pictures)) {
    for (const item of pictures) {
      if (typeof item === "string") {
        return item;
      }

      if (item && typeof item === "object") {
        const nested = item as RawModelRecord;
        const nestedUrl = firstString([nested.url, nested.src, nested.imageUrl, nested.thumbnail]);
        if (nestedUrl) {
          return nestedUrl;
        }
      }
    }
  }

  return undefined;
}

function getRawModelList(payload: unknown): RawModelRecord[] {
  if (Array.isArray(payload)) {
    return payload.filter((item): item is RawModelRecord => Boolean(item && typeof item === "object"));
  }

  if (!payload || typeof payload !== "object") {
    return [];
  }

  const record = payload as RawModelRecord;
  const candidates = [record.models, record.data, record.results, record.performers, record.items];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate.filter((item): item is RawModelRecord => Boolean(item && typeof item === "object"));
    }
  }

  return [];
}

function normalizeModel(record: RawModelRecord): LiveModel | null {
  const id = firstString([record.id, record.modelId, record.userId, record.performerId, record.username]);
  const username = firstString([record.username, record.screenName, record.slug, record.nick]);

  if (!id && !username) {
    return null;
  }

  const tags = Array.isArray(record.tags)
    ? record.tags.map((tag) => asString(tag)).filter((tag): tag is string => Boolean(tag)).slice(0, 3)
    : undefined;

  return {
    id: id ?? username ?? "",
    username,
    displayName: firstString([record.displayName, record.name, record.username, record.screenName]),
    imageUrl: getImageUrl(record),
    profileUrl: firstString([record.url, record.link, record.profileUrl, record.chatUrl]),
    tags
  };
}

export async function getLiveModels(limit = 8): Promise<ModelFeedResult> {
  if (!FEED_URL) {
    return { models: [], configured: false };
  }

  try {
    const headers: HeadersInit = {
      Accept: "application/json"
    };

    if (FEED_TOKEN) {
      headers.Authorization = `Bearer ${FEED_TOKEN}`;
    }

    const response = await fetch(FEED_URL, {
      headers,
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return { models: [], configured: true, error: "Feed non disponibile" };
    }

    const payload = (await response.json()) as unknown;
    const models = getRawModelList(payload)
      .map(normalizeModel)
      .filter((model): model is LiveModel => Boolean(model))
      .slice(0, limit);

    return { models, configured: true };
  } catch {
    return { models: [], configured: true, error: "Feed non raggiungibile" };
  }
}
