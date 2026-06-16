import type { MetadataRoute } from "next";
import { canonicalUrl, siteConfig } from "@/lib/site";

const lastModified = new Date("2026-06-16T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.publicPages.map(({ path }) => ({
    url: canonicalUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/decisione") || path.includes("/domande") ? 0.75 : 0.65
  }));
}
