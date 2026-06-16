import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const priorityFile = path.join(root, "lib", "index-priority-pages.ts");
const sitemapFile = path.join(root, ".next", "server", "app", "sitemap.xml.body");
const robotsFile = path.join(root, ".next", "server", "app", "robots.txt.body");

function pageHtmlPath(routePath) {
  if (routePath === "/") {
    return path.join(root, ".next", "server", "app", "index.html");
  }

  return path.join(root, ".next", "server", "app", `${routePath.slice(1)}.html`);
}

function canonicalForHtml(routePath) {
  return `https://sessochat.net${routePath === "/" ? "" : routePath}`;
}

function sitemapUrlFor(routePath) {
  return `https://sessochat.net${routePath === "/" ? "/" : routePath}`;
}

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
}

const prioritySource = await readFile(priorityFile, "utf8");
const priorityPaths = [...prioritySource.matchAll(/"((?:\/)[^"]*)"/g)].map((match) => match[1]);
const prioritySet = new Set(priorityPaths);

if (priorityPaths.length < 30 || priorityPaths.length > 45) {
  fail(`priority list should contain 30-45 paths, found ${priorityPaths.length}`);
}

if (prioritySet.size !== priorityPaths.length) {
  fail("priority list contains duplicate paths");
}

const sitemap = await readFile(sitemapFile, "utf8");
const robots = await readFile(robotsFile, "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

for (const routePath of priorityPaths) {
  const url = sitemapUrlFor(routePath);
  if (!sitemapUrls.includes(url)) {
    fail(`priority URL missing from sitemap: ${url}`);
  }
}

for (const url of sitemapUrls) {
  if (url.includes("/go/")) {
    fail(`/go URL found in sitemap: ${url}`);
  }
  if (url.includes("www.sessochat.net")) {
    fail(`www URL found in sitemap: ${url}`);
  }
  if (!url.startsWith("https://sessochat.net")) {
    fail(`external URL found in sitemap: ${url}`);
  }
}

for (const legacy of ["/latina", "/trans", "/teens", "/sex-chat-russian-teen", "/joss-caprice", "/random-old-model"]) {
  if (sitemap.includes(legacy)) {
    fail(`legacy path found in sitemap: ${legacy}`);
  }
}

if (!/Disallow:\s*\/go\//.test(robots)) {
  fail("robots.txt does not disallow /go/");
}

for (const blocked of ["/latina", "/trans", "/teens", "/decisione", "/domande", "/quiz"]) {
  if (new RegExp(`Disallow:\\s*${blocked.replace(/\//g, "\\/")}`).test(robots)) {
    fail(`robots.txt blocks ${blocked}`);
  }
}

for (const routePath of priorityPaths) {
  const html = await readFile(pageHtmlPath(routePath), "utf8");

  if (/content="noindex/i.test(html) || /X-Robots-Tag/i.test(html)) {
    fail(`priority page appears noindexed: ${routePath}`);
  }

  const canonical = canonicalForHtml(routePath);
  if (!html.includes(`rel="canonical" href="${canonical}"`)) {
    fail(`canonical missing or incorrect for ${routePath}`);
  }

  if (html.includes("www.sessochat.net")) {
    fail(`www canonical/reference found in ${routePath}`);
  }
}

if (!process.exitCode) {
  console.log(`OK priority indexing audit passed for ${priorityPaths.length} priority URLs inside ${sitemapUrls.length} sitemap URLs`);
}
