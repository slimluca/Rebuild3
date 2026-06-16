let baseUrl = process.env.AUDIT_BASE_URL ?? "";
const timeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 8000);
const siteOrigin = "https://sessochat.net";
const localBaseCandidates = [
  "http://127.0.0.1:3017",
  "http://localhost:3017",
  "http://127.0.0.1:3000",
  "http://localhost:3000"
];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.toLowerCase().replace(/\/+$/, "");
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
  return fetchUrlWithTimeout(new URL(path, baseUrl), options);
}

function extractTag(html, regex) {
  const match = html.match(regex);
  return match?.[1]?.trim() ?? "";
}

async function isSessochatBase(candidate) {
  try {
    const response = await fetchUrlWithTimeout(new URL("/", candidate));
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

function extractInternalLinks(html) {
  const links = new Set();
  for (const match of html.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    const parsed = new URL(href, siteOrigin);
    if (parsed.origin !== siteOrigin) continue;
    const path = normalizePath(parsed.pathname);
    if (path.startsWith("/_next")) continue;
    links.add(path);
  }
  return [...links];
}

baseUrl = await resolveAuditBaseUrl();
console.log(`Using audit base URL: ${baseUrl}`);

const sitemap = await (await fetchWithTimeout("/sitemap.xml")).text();
const pages = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => normalizePath(new URL(match[1]).pathname));
const failures = [];
const checkedLinks = new Map();

for (const page of pages) {
  const response = await fetchWithTimeout(page);
  if (response.status !== 200) {
    failures.push({ from: "sitemap", to: page, status: response.status });
    continue;
  }

  const html = await response.text();
  for (const link of extractInternalLinks(html)) {
    if (checkedLinks.has(link)) {
      const status = checkedLinks.get(link);
      if ([404, 410].includes(status) || status >= 500) failures.push({ from: page, to: link, status });
      continue;
    }

    const linkResponse = await fetchWithTimeout(link, { method: "HEAD" });
    checkedLinks.set(link, linkResponse.status);
    if ([404, 410].includes(linkResponse.status) || linkResponse.status >= 500) {
      failures.push({ from: page, to: link, status: linkResponse.status });
    }
  }
}

console.log(`Checked ${pages.length} sitemap pages and ${checkedLinks.size} unique internal links.`);

for (const failure of failures) {
  console.log(`FAIL from=${failure.from} to=${failure.to} status=${failure.status}`);
}

if (failures.length) {
  process.exitCode = 1;
} else {
  console.log("OK no broken internal links found");
}
