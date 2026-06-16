let baseUrl = process.env.AUDIT_BASE_URL ?? "";
const timeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 8000);
const siteOrigin = "https://sessochat.net";
const localBaseCandidates = [
  "http://127.0.0.1:3017",
  "http://localhost:3017",
  "http://127.0.0.1:3000",
  "http://localhost:3000"
];

const seedPaths = [
  "/",
  "/siti",
  "/guida",
  "/confronti",
  "/categorie",
  "/argomenti",
  "/ricerche",
  "/decisione",
  "/domande",
  "/quiz",
  "/risorse",
  "/mappa-del-sito"
];

const manualPublicPaths = [
  "/",
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

function absoluteUrl(path) {
  return new URL(path, baseUrl).toString();
}

async function fetchUrlWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      redirect: "manual",
      signal: controller.signal,
      ...options
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchWithTimeout(path, options = {}) {
  return fetchUrlWithTimeout(absoluteUrl(path), options);
}

async function isSessochatBase(candidate) {
  try {
    const response = await fetchUrlWithTimeout(new URL("/", candidate).toString());
    if (response.status !== 200) return false;
    const html = await response.text();
    const canonical = extractTag(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    return canonical === siteOrigin || canonical === `${siteOrigin}/`;
  } catch {
    return false;
  }
}

async function resolveAuditBaseUrl() {
  const candidates = baseUrl ? [baseUrl] : localBaseCandidates;

  for (const candidate of candidates) {
    if (await isSessochatBase(candidate)) {
      return candidate.replace(/\/+$/, "");
    }
  }

  throw new Error(
    `No local sessochat.net server found. Set AUDIT_BASE_URL or start next on one of: ${localBaseCandidates.join(", ")}`
  );
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(html, regex) {
  const match = html.match(regex);
  return match?.[1]?.trim() ?? "";
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

function isGenericTitle(title) {
  return /^(home|untitled|page|sessochat\.net)$/i.test(title.trim());
}

function canonicalFor(path) {
  return `${siteOrigin}${path === "/" ? "" : path}`;
}

baseUrl = await resolveAuditBaseUrl();
console.log(`Using audit base URL: ${baseUrl}`);

const sitemapResponse = await fetchWithTimeout("/sitemap.xml");
const sitemapXml = await sitemapResponse.text();
const sitemapPaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
  const parsed = new URL(match[1]);
  return normalizePath(parsed.pathname);
});

const robotsResponse = await fetchWithTimeout("/robots.txt");
const robotsText = await robotsResponse.text();
const disallows = extractRobotsDisallows(robotsText);

const seedLinkedPaths = new Set();
for (const seed of seedPaths) {
  const response = await fetchWithTimeout(seed);
  if (response.status !== 200) continue;
  const html = await response.text();
  extractInternalLinks(html).forEach((path) => seedLinkedPaths.add(path));
}

const checkedPaths = [...new Set([...sitemapPaths, ...seedLinkedPaths, ...manualPublicPaths])].sort();
const pageResults = [];
const linkFailures = [];
const titles = new Map();
const descriptions = new Map();

for (const path of checkedPaths) {
  const result = {
    path,
    status: 0,
    xRobots: "",
    title: "",
    description: "",
    canonical: "",
    h1Count: 0,
    visibleTextLength: 0,
    internalLinks: 0,
    issues: []
  };

  try {
    const response = await fetchWithTimeout(path);
    result.status = response.status;
    result.xRobots = response.headers.get("x-robots-tag") ?? "";

    if (response.status !== 200) result.issues.push(`status ${response.status}`);
    if (response.status >= 300 && response.status < 400) result.issues.push("redirect");
    if (/noindex/i.test(result.xRobots)) result.issues.push("x-robots noindex");
    if (isBlockedByRobots(path, disallows)) result.issues.push("robots blocked");

    const html = await response.text();
    result.title = extractTag(html, /<title[^>]*>(.*?)<\/title>/i);
    result.description = extractTag(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    result.canonical = extractTag(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    result.h1Count = [...html.matchAll(/<h1\b/gi)].length;
    result.visibleTextLength = stripHtml(html).length;
    const internalLinks = extractInternalLinks(html);
    result.internalLinks = internalLinks.length;

    if (/<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) result.issues.push("meta noindex");
    if (!result.canonical) result.issues.push("missing canonical");
    if (result.canonical && result.canonical !== canonicalFor(path)) result.issues.push(`bad canonical ${result.canonical}`);
    if (!result.title || result.title.length < 18 || isGenericTitle(result.title)) result.issues.push("weak title");
    if (!result.description || result.description.length < 70) result.issues.push("weak description");
    if (result.h1Count !== 1) result.issues.push(`h1 count ${result.h1Count}`);
    if (result.visibleTextLength < 1200) result.issues.push("thin visible text");
    if (result.internalLinks < 3) result.issues.push("few internal links");

    titles.set(result.title, [...(titles.get(result.title) ?? []), path]);
    descriptions.set(result.description, [...(descriptions.get(result.description) ?? []), path]);

    for (const link of internalLinks) {
      const linkResponse = await fetchWithTimeout(link, { method: "HEAD" });
      if ([404, 410].includes(linkResponse.status) || linkResponse.status >= 500) {
        linkFailures.push({ from: path, to: link, status: linkResponse.status });
      }
    }
  } catch (error) {
    result.status = "ERR";
    result.issues.push(error instanceof Error ? error.message : String(error));
  }

  pageResults.push(result);
}

const duplicateTitles = [...titles.entries()].filter(([title, paths]) => title && paths.length > 1);
const duplicateDescriptions = [...descriptions.entries()].filter(([description, paths]) => description && paths.length > 1);
for (const [, paths] of duplicateTitles) paths.forEach((path) => pageResults.find((result) => result.path === path)?.issues.push("duplicate title"));
for (const [, paths] of duplicateDescriptions) paths.forEach((path) => pageResults.find((result) => result.path === path)?.issues.push("duplicate description"));

const broken = pageResults.filter((result) => result.status !== 200);
const noindex = pageResults.filter((result) => /noindex/i.test(result.xRobots) || result.issues.includes("meta noindex"));
const robotsBlocked = pageResults.filter((result) => result.issues.includes("robots blocked"));
const redirectedSitemap = pageResults.filter((result) => sitemapPaths.includes(result.path) && result.status >= 300 && result.status < 400);
const orphanRisk = pageResults.filter((result) => sitemapPaths.includes(result.path) && result.path !== "/" && !seedLinkedPaths.has(result.path));
const thinRisk = pageResults.filter((result) => result.issues.includes("thin visible text"));
const indexable = pageResults.filter((result) => result.status === 200 && !result.issues.some((issue) => /noindex|robots blocked|redirect|status|canonical/i.test(issue)));

const summary = {
  totalCheckedUrls: pageResults.length,
  indexablePublicUrls: indexable.length,
  brokenUrls: broken.length,
  noindexUrls: noindex.length,
  robotsBlockedUrls: robotsBlocked.length,
  redirectedSitemapUrls: redirectedSitemap.length,
  duplicateTitles: duplicateTitles.length,
  duplicateDescriptions: duplicateDescriptions.length,
  orphanRiskUrls: orphanRisk.length,
  thinRiskUrls: thinRisk.length,
  brokenInternalLinks: linkFailures.length
};

console.log("Emergency indexing audit summary");
for (const [key, value] of Object.entries(summary)) {
  console.log(`${key}: ${value}`);
}

const failingResults = pageResults.filter((result) => result.issues.length);
for (const result of failingResults) {
  console.log(`FAIL ${result.path} status=${result.status} issues=${result.issues.join(", ")}`);
}
for (const failure of linkFailures) {
  console.log(`FAIL broken link from=${failure.from} to=${failure.to} status=${failure.status}`);
}

if (failingResults.length || linkFailures.length) {
  process.exitCode = 1;
}
