const baseUrl = process.env.AUDIT_BASE_URL ?? "http://localhost:3000";
const timeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 4000);

const validChecks = [
  ["/", [200]],
  ["/siti", [200]],
  ["/guida", [200]],
  ["/confronti", [200]],
  ["/categorie", [200]],
  ["/argomenti", [200]],
  ["/ricerche", [200]],
  ["/sitemap.xml", [200]],
  ["/robots.txt", [200]],
  ["/go/signup", [307, 308]]
];

const goneChecks = [
  "/teens",
  "/latina",
  "/trans",
  "/sex-chat-russian-teen",
  "/joss-caprice-chaturbate-live-cam-model",
  "/random-old-model-page",
  "/fake-old-category",
  "/old-english-webcam-page"
].map((path) => [path, [410]]);

async function check(path, expectedStatuses) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(new URL(path, baseUrl), {
      method: "HEAD",
      redirect: "manual",
      signal: controller.signal
    });

    const statusOk = expectedStatuses.includes(response.status);
    const robots = response.headers.get("x-robots-tag") ?? "";
    const robotsOk =
      response.status === 410 || path.startsWith("/go/")
        ? /noindex/i.test(robots) && /nofollow/i.test(robots)
        : !/noindex/i.test(robots);

    return { path, status: response.status, robots, ok: statusOk && robotsOk };
  } catch (error) {
    return { path, status: "ERR", robots: "", ok: false, error: error instanceof Error ? error.message : String(error) };
  } finally {
    clearTimeout(timeout);
  }
}

const results = [];

for (const [path, statuses] of [...validChecks, ...goneChecks]) {
  results.push(await check(path, statuses));
}

for (const result of results) {
  const marker = result.ok ? "OK" : "FAIL";
  console.log(`${marker} ${result.path} status=${result.status} robots="${result.robots}"${result.error ? ` error="${result.error}"` : ""}`);
}

if (results.some((result) => !result.ok)) {
  process.exitCode = 1;
}
