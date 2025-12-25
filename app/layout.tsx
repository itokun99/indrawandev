import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { getWebConfig } from "@/lib/data"
import { Kode_Mono } from "next/font/google"

const webConfig = getWebConfig()
const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(webConfig.site.url),
  title: {
    default: "meganecode.dev | Senior Software Engineer",
    template: "%s | meganecode.dev",
  },
  description: "The Intellectual Knight. Crafting robust, human-verified solutions. 100% Logic, 0% AI Magic.",
  keywords: ["Software Engineer", "React Native", "Full-Stack Developer", "TypeScript", "Go", "Node.js"],
  authors: [{ name: "Indrawan Lisanto", url: webConfig.site.url }],
  creator: "Indrawan Lisanto",
  publisher: "Indrawan Lisanto",
  alternates: {
    canonical: webConfig.site.url,
  },
  openGraph: {
    title: "meganecode.dev",
    description: "Senior Software Engineer crafting human-verified solutions",
    url: webConfig.site.url,
    siteName: "meganecode.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "meganecode.dev",
    description: "Senior Software Engineer. 100% Logic, 0% AI Magic.",
    creator: "@indrawandev",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kodeMono.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
