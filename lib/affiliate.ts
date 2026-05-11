const LIVEJASMIN_BASE_URL = "https://www.livejasmin.com/en/";

export const liveJasminAffiliateParams = {
  psid: "affil28",
  pstool: "205_1",
  psprogram: "pps",
  siteId: "jasmin"
} as const;

type AffiliateTarget = {
  path?: string;
  url?: string | null;
  searchParams?: Record<string, string | undefined>;
};

function appendAffiliateParams(url: URL) {
  Object.entries(liveJasminAffiliateParams).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
}

function isAllowedLiveJasminHost(hostname: string) {
  return (
    hostname === "livejasmin.com" ||
    hostname.endsWith(".livejasmin.com") ||
    hostname === "ctwmsg.com" ||
    hostname.endsWith(".ctwmsg.com")
  );
}

function cleanPath(path = "/") {
  if (!path.startsWith("/")) {
    return "/";
  }

  return path.replace(/\/{2,}/g, "/");
}

export function createLiveJasminUrl(target: AffiliateTarget = {}) {
  let url: URL;

  if (target.url) {
    try {
      url = new URL(target.url);
      if (!isAllowedLiveJasminHost(url.hostname)) {
        url = new URL(LIVEJASMIN_BASE_URL);
      }
    } catch {
      url = new URL(LIVEJASMIN_BASE_URL);
    }
  } else {
    url = new URL(cleanPath(target.path), LIVEJASMIN_BASE_URL);
  }

  appendAffiliateParams(url);

  if (target.searchParams) {
    Object.entries(target.searchParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });
  }

  return url.toString();
}

export function getSignupUrl() {
  return createLiveJasminUrl({ path: "/" });
}

export function getLiveJasminUrl() {
  return createLiveJasminUrl({ path: "/" });
}

export function getRandomModelUrl() {
  return createLiveJasminUrl({
    path: "/",
    searchParams: {
      category: "girls"
    }
  });
}

export function getModelUrl(modelIdOrUsername: string, directUrl?: string | null) {
  const safeIdentifier = modelIdOrUsername.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);

  if (directUrl) {
    return createLiveJasminUrl({ url: directUrl });
  }

  if (!safeIdentifier) {
    return getLiveJasminUrl();
  }

  return createLiveJasminUrl({
    path: "/",
    searchParams: {
      selectedModel: safeIdentifier
    }
  });
}
