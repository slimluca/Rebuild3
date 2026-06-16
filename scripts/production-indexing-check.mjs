const baseUrl = process.env.PRODUCTION_BASE_URL ?? "https://sessochat.net";
const timeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 6000);
const siteOrigin = "https://sessochat.net";

const keyPaths = [
  "/",
  "/sitemap.xml",
  "/robots.txt",
  "/chi-siamo",
  "/contatti",
  "/guida",
  "/guida/chat-webcam-sicura",
  "/guida/come-scegliere-un-sito-webcam",
  "/guida/prezzi-chat-webcam",
  "/confronti/migliori-siti-webcam-live",
  "/confronti/alternative-livejasmin",
  "/decisione/prezzi-livejasmin",
  "/decisione/costi-chat-webcam",
  "/decisione/chat-webcam-privacy",
  "/decisione/chat-webcam-pagamenti",
  "/decisione/livejasmin-italia-recensione-guida",
  "/diventa-modella-webcam",
  "/quiz/chat-gratis-o-chat-privata",
  "/domande/serve-carta-di-credito-per-chat-webcam",
  "/domande/le-chat-webcam-sono-gratis",
  "/domande/serve-registrazione-per-vedere-webcam",
  "/privacy-policy",
  "/politica-editoriale"
];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.toLowerCase().replace(/\/+$/, "");
}

function canonicalFor(path) {
  return `${siteOrigin}${path === "/" ? "" : path}`;
}

async function fetchWithTimeout(path, options = {}) {
  let lastError;

  for (let attempt = 0; attempt < 3; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      return await fetch(new URL(path, baseUrl), {
        redirect: "manual",
        signal: controller.signal,
        ...options
      });
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}

async function runLimited(items, limit, task) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const current = items[index++];
      results.push(await task(current));
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function extractInternalLinks(html) {
  const links = new Set();
  for (const match of html.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    const parsed = new URL(href, siteOrigin);
    if (parsed.origin !== siteOrigin) continue;
    const path = normalizePath(parsed.pathname);
    if (path.startsWith("/_next") || path.startsWith("/go")) continue;
    links.add(path);
  }
  return [...links];
}

function extractRobotsDisallows(robotsText) {
  return [...robotsText.matchAll(/^\s*Disallow:\s*(\S+)/gim)]
    .map((match) => match[1].trim())
    .filter(Boolean);
}

function isBlockedByRobots(path, disallows) {
  return disallows.some((rule) => rule !== "/" && path.startsWith(rule.replace(/\/$/, "")));
}

const robotsText = await (await fetchWithTimeout("/robots.txt")).text();
const disallows = extractRobotsDisallows(robotsText);
const sitemapResponse = await fetchWithTimeout("/sitemap.xml");
const sitemapXml = await sitemapResponse.text();
const sitemapPaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => normalizePath(new URL(match[1]).pathname));
const keySet = new Set(keyPaths.map(normalizePath));
const paths = [...new Set([...keyPaths, ...sitemapPaths])].sort();
const failures = [];

await runLimited(paths, 3, async (path) => {
  let response;
  try {
    response = await fetchWithTimeout(path, keySet.has(path) ? {} : { method: "HEAD" });
  } catch (error) {
    failures.push(`${path} request failed ${error instanceof Error ? error.message : String(error)}`);
    return;
  }
  const xRobots = response.headers.get("x-robots-tag") ?? "";

  if (response.status !== 200) failures.push(`${path} status=${response.status}`);
  if (response.status >= 300 && response.status < 400) failures.push(`${path} redirects from public check`);
  if (response.status >= 500) failures.push(`${path} server error`);
  if (/noindex/i.test(xRobots)) failures.push(`${path} x-robots noindex`);
  if (isBlockedByRobots(path, disallows)) failures.push(`${path} robots blocked`);

  if (keySet.has(path) && path !== "/sitemap.xml" && path !== "/robots.txt") {
    const html = await response.text();
    if (/<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) failures.push(`${path} meta noindex`);
    if (!html.includes(`rel="canonical" href="${canonicalFor(path)}"`)) failures.push(`${path} canonical mismatch`);

    await runLimited(extractInternalLinks(html), 3, async (link) => {
      let linkResponse;
      try {
        linkResponse = await fetchWithTimeout(link, { method: "HEAD" });
      } catch (error) {
        failures.push(`${path} internal link ${link} failed ${error instanceof Error ? error.message : String(error)}`);
        return;
      }
      if ([404, 410].includes(linkResponse.status) || linkResponse.status >= 500) {
        failures.push(`${path} broken internal link ${link} status=${linkResponse.status}`);
      }
    });
  }
});

if (sitemapPaths.some((path) => path.startsWith("/go"))) failures.push("sitemap includes /go route");
if (sitemapXml.includes("www.sessochat.net")) failures.push("sitemap includes www URL");

for (const failure of failures) console.log(`FAIL ${failure}`);

if (failures.length) {
  process.exitCode = 1;
} else {
  console.log(`OK production indexing check passed for ${paths.length} public URLs`);
}
