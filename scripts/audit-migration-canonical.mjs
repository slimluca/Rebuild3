const timeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 5000);
const siteOrigin = "https://sessochat.net";
const localBaseCandidates = [
  process.env.AUDIT_BASE_URL,
  "http://127.0.0.1:3017",
  "http://localhost:3017",
  "http://127.0.0.1:3000",
  "http://localhost:3000"
].filter(Boolean);

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.toLowerCase().replace(/\/+$/, "");
}

async function fetchUrl(url, options = {}) {
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

function extractTag(html, regex) {
  const match = html.match(regex);
  return match?.[1]?.trim() ?? "";
}

async function isSessochatBase(candidate) {
  try {
    const response = await fetchUrl(new URL("/", candidate));
    if (response.status !== 200) return false;
    const html = await response.text();
    const canonical = extractTag(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    return canonical === siteOrigin || canonical === `${siteOrigin}/`;
  } catch {
    return false;
  }
}

async function resolveBaseUrl() {
  for (const candidate of localBaseCandidates) {
    if (await isSessochatBase(candidate)) return candidate.replace(/\/+$/, "");
  }

  throw new Error(`No local sessochat.net server found. Set AUDIT_BASE_URL or start next locally.`);
}

const baseUrl = await resolveBaseUrl();
console.log(`Using audit base URL: ${baseUrl}`);

const failures = [];

function record(ok, message) {
  console.log(`${ok ? "OK" : "FAIL"} ${message}`);
  if (!ok) failures.push(message);
}

async function checkPublicPage(path) {
  const response = await fetchUrl(new URL(path, baseUrl));
  const xRobots = response.headers.get("x-robots-tag") ?? "";
  const html = await response.text();
  const canonical = extractTag(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  const expectedCanonical = `${siteOrigin}${path === "/" ? "" : normalizePath(path)}`;

  record(response.status === 200, `${path} returns 200`);
  record(!/noindex/i.test(xRobots) && !/<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html), `${path} is indexable`);
  record(canonical === expectedCanonical || (path === "/" && canonical === `${siteOrigin}/`), `${path} canonical is non-www sessochat`);
}

async function checkRedirect(path, expectedPath) {
  const response = await fetchUrl(new URL(path, baseUrl), { method: "HEAD" });
  const location = response.headers.get("location") ?? "";
  const locationPath = location ? new URL(location, baseUrl).pathname : "";

  record([301, 308].includes(response.status) && locationPath === expectedPath, `${path} permanently redirects to ${expectedPath}`);
}

async function checkGone(path) {
  const response = await fetchUrl(new URL(path, baseUrl), { method: "HEAD" });
  const xRobots = response.headers.get("x-robots-tag") ?? "";
  record(response.status === 410 && /noindex/i.test(xRobots) && /nofollow/i.test(xRobots), `${path} is 410 noindex,nofollow`);
}

await checkPublicPage("/");
await checkPublicPage("/guida");
await checkPublicPage("/categorie/modelli-webcam-live");
await checkPublicPage("/categorie/modelli-webcam-latine");
await checkPublicPage("/decisione/livejasmin-italia-recensione-guida");

const sitemapResponse = await fetchUrl(new URL("/sitemap.xml", baseUrl));
const sitemap = await sitemapResponse.text();
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
record(sitemapResponse.status === 200, "/sitemap.xml returns 200");
record(sitemapUrls.length > 0, "/sitemap.xml contains URLs");
record(sitemapUrls.every((url) => url.startsWith(`${siteOrigin}/`) || url === siteOrigin), "/sitemap.xml uses only https://sessochat.net URLs");
record(sitemapUrls.every((url) => !url.includes("www.sessochat.net")), "/sitemap.xml has no www URLs");
record(sitemapUrls.every((url) => !new URL(url).pathname.startsWith("/go")), "/sitemap.xml has no /go URLs");

const robotsResponse = await fetchUrl(new URL("/robots.txt", baseUrl));
const robots = await robotsResponse.text();
record(robotsResponse.status === 200, "/robots.txt returns 200");
record(/Sitemap:\s*https:\/\/sessochat\.net\/sitemap\.xml/i.test(robots), "/robots.txt points to canonical sitemap");
record(!/Disallow:\s*\/(?:siti|guida|confronti|categorie|argomenti|ricerche|decisione|domande|quiz)/i.test(robots), "/robots.txt does not block public sections");

const goSignup = await fetchUrl(new URL("/go/signup", baseUrl), { method: "HEAD" });
record(
  [307, 308].includes(goSignup.status) && /noindex/i.test(goSignup.headers.get("x-robots-tag") ?? "") && /nofollow/i.test(goSignup.headers.get("x-robots-tag") ?? ""),
  "/go/signup remains noindex,nofollow redirect"
);
const goModel = await fetchUrl(new URL("/go/diventa-modella", baseUrl), { method: "HEAD" });
record(
  [307, 308].includes(goModel.status) && /noindex/i.test(goModel.headers.get("x-robots-tag") ?? "") && /nofollow/i.test(goModel.headers.get("x-robots-tag") ?? ""),
  "/go/diventa-modella remains noindex,nofollow redirect"
);

await checkRedirect("/latina", "/categorie/modelli-webcam-latine");
await checkRedirect("/trans", "/categorie/modelli-webcam-live");
await checkRedirect("/category/livejasmin", "/decisione/livejasmin-italia-recensione-guida");
await checkRedirect("/tag/prezzi-chat-webcam", "/decisione/costi-chat-webcam");
await checkRedirect("/2024/05/livejasmin-italia", "/decisione/livejasmin-italia-recensione-guida");
await checkRedirect("/guida/", "/guida");

await checkGone("/wp-admin");
await checkGone("/wp-login.php");
await checkGone("/xmlrpc.php");
await checkGone("/random-old-model-page");

if (failures.length) {
  process.exitCode = 1;
}
