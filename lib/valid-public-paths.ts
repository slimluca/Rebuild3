import { siteConfig } from "@/lib/site";

const extraPublicPaths = ["/robots.txt", "/sitemap.xml", "/icon", "/apple-icon", "/favicon.ico"];

export function normalizePublicPath(pathname: string) {
  const pathOnly = pathname.split("?")[0]?.split("#")[0] || "/";
  const withSlash = pathOnly.startsWith("/") ? pathOnly : `/${pathOnly}`;
  const lower = withSlash.toLowerCase();

  if (lower === "/") {
    return "/";
  }

  return lower.replace(/\/+$/, "");
}

export const validPublicPaths = new Set(
  [...siteConfig.publicPages.map((page) => page.path), ...extraPublicPaths].map((path) =>
    normalizePublicPath(path)
  )
);

export function isValidPublicPath(pathname: string) {
  return validPublicPaths.has(normalizePublicPath(pathname));
}
