import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { getWebConfig } from "@/lib/data"
import { Poppins } from "next/font/google"

const webConfig = getWebConfig()
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(webConfig.site.url),
  title: {
    default: webConfig.site.title,
    template: "%s | " + webConfig.site.author,
  },
  description: webConfig.site.description,
  keywords: webConfig.site.keywords,
  authors: [{ name: webConfig.site.author, url: webConfig.site.url }],
  creator: webConfig.site.author,
  publisher: webConfig.site.author,
  alternates: {
    canonical: webConfig.site.url,
  },
  openGraph: {
    title: webConfig.site.title,
    description: webConfig.site.description,
    url: webConfig.site.url,
    siteName: webConfig.site.author,
    type: "website",
    images: [{ url: webConfig.site.logo, width: 512, height: 512, alt: webConfig.site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: webConfig.site.title,
    description: webConfig.site.description,
    images: [webConfig.site.logo],
    creator: webConfig.site.author,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/placeholder-logo.svg",
    shortcut: "/placeholder-logo.svg",
    apple: "/placeholder-logo.svg",
  },
  generator: "v0.dev",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
