import type { MetadataRoute } from "next"
import { getWebConfig } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getWebConfig().site
  const now = new Date()
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
