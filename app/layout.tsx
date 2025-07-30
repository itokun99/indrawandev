import type React from "react"
import type { Metadata } from "next"
import { Comic_Neue } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { getWebConfig } from "@/lib/data"

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const webConfig = getWebConfig()

export const metadata: Metadata = {
  title: webConfig.site.title,
  description: webConfig.site.description,
  keywords: webConfig.site.keywords,
  authors: [{ name: webConfig.site.author }],
  openGraph: {
    title: webConfig.site.title,
    description: webConfig.site.description,
    type: "website",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={comicNeue.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
