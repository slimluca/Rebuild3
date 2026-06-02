import type { MetadataRoute } from "next";
import { indexPriorityPages } from "@/lib/index-priority-pages";
import { canonicalUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexPriorityPages.map((path) => ({
    url: canonicalUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/decisione") || path.includes("/domande") ? 0.75 : 0.65
  }));
}
