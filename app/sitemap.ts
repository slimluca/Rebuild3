import type { MetadataRoute } from "next";
import { canonicalUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.publicPages.map((page) => ({
    url: canonicalUrl(page.path),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.6
  }));
}
