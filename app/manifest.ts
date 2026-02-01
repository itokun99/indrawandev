import type { MetadataRoute } from "next"
import { getWebConfig } from "@/lib/data"

export default function manifest(): MetadataRoute.Manifest {
  const site = getWebConfig().site
  return {
    name: site.title,
    short_name: "Portfolio",
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      { src: "/placeholder-logo.png", type: "image/png", sizes: "192x192" },
      { src: "/placeholder-logo.png", type: "image/png", sizes: "512x512" },
      { src: "/placeholder-logo.svg", type: "image/svg+xml", sizes: "any" },
    ],
  }
}
