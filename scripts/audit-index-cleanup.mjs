const timeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 5000);
const siteOrigin = "https://sessochat.net";
const localBaseCandidates = [
  process.env.AUDIT_BASE_URL,
  "http://127.0.0.1:3017",
  "http://localhost:3017",
  "http://127.0.0.1:3000",
  "http://localhost:3000"
].filter(Boolean);

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

let baseUrl = await resolveBaseUrl();
console.log(`Using audit base URL: ${baseUrl}`);

const validChecks = [
  ["/", [200]],
  ["/siti", [200]],
  ["/guida", [200]],
  ["/confronti", [200]],
  ["/categorie", [200]],
  ["/argomenti", [200]],
  ["/ricerche", [200]],
  ["/decisione", [200]],
  ["/domande", [200]],
  ["/quiz", [200]],
  ["/sitemap.xml", [200]],
  ["/robots.txt", [200]],
  ["/go/signup", [307, 308]],
  ["/go/diventa-modella", [307, 308]]
];

const redirectChecks = [
  ["/latina", "/categorie/modelli-webcam-latine"],
  ["/trans", "/categorie/modelli-webcam-live"],
  ["/teens", "/categorie/modelli-webcam-live"],
  ["/sex-chat-russian-teen", "/categorie/modelli-webcam-live"],
  ["/joss-caprice-chaturbate-live-cam", "/categorie/modelli-webcam-live"],
  ["/category/livejasmin", "/decisione/livejasmin-italia-recensione-guida"],
  ["/tag/prezzi-chat-webcam", "/decisione/costi-chat-webcam"],
  ["/tag/prezzi-livejasmin", "/decisione/prezzi-livejasmin"],
  ["/category/chat-webcam-sicura", "/guida/chat-webcam-sicura"],
  ["/tag/privacy-chat-webcam", "/guida/chat-webcam-sicura"],
  ["/2024/05/livejasmin-italia", "/decisione/livejasmin-italia-recensione-guida"],
  ["/2024/05/prezzi-livejasmin", "/decisione/prezzi-livejasmin"],
  ["/page/2", "/mappa-del-sito"],
  ["/guida/", "/guida"]
];

const goneChecks = [
  "/wp-admin",
  "/wp-login.php",
  "/xmlrpc.php",
  "/wp-content/uploads/old.jpg",
  "/wp-includes/js/old.js",
  "/random-old-model-page",
  "/fake-old-category",
  "/old-english-webcam-page"
];

async function checkStatus(path, expectedStatuses) {
  const response = await fetchUrl(new URL(path, baseUrl), { method: "HEAD" });
  const robots = response.headers.get("x-robots-tag") ?? "";
  const robotsOk =
    response.status === 410 || path.startsWith("/go/")
      ? /noindex/i.test(robots) && /nofollow/i.test(robots)
      : !/noindex/i.test(robots);

  return {
    path,
    status: response.status,
    robots,
    ok: expectedStatuses.includes(response.status) && robotsOk
  };
}

async function checkRedirect(path, expectedLocationPath) {
  const response = await fetchUrl(new URL(path, baseUrl), { method: "HEAD" });
  const location = response.headers.get("location") ?? "";
  const locationPath = location ? new URL(location, baseUrl).pathname : "";
  const targetResponse = locationPath
    ? await fetchUrl(new URL(locationPath, baseUrl), { method: "HEAD" })
    : null;

  return {
    path,
    status: response.status,
    location,
    ok: [301, 308].includes(response.status) && locationPath === expectedLocationPath && targetResponse?.status === 200
  };
}

const results = [];

for (const [path, statuses] of validChecks) {
  results.push(await checkStatus(path, statuses));
}

for (const [path, locationPath] of redirectChecks) {
  results.push(await checkRedirect(path, locationPath));
}

for (const path of goneChecks) {
  results.push(await checkStatus(path, [410]));
}

for (const result of results) {
  const marker = result.ok ? "OK" : "FAIL";
  const location = result.location ? ` location="${result.location}"` : "";
  console.log(`${marker} ${result.path} status=${result.status} robots="${result.robots ?? ""}"${location}`);
}

if (results.some((result) => !result.ok)) {
  process.exitCode = 1;
}
