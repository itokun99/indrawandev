import type { MetadataRoute } from "next"
import { getWebConfig } from "@/lib/data"

export default function robots(): MetadataRoute.Robots {
  const site = getWebConfig().site
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
