import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { getWebConfig } from "@/lib/data"
import { Poppins } from "next/font/google"
import { Kode_Mono as KodeMono } from "next/font/google"

const webConfig = getWebConfig()
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
})

const kodeMono = KodeMono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(webConfig.site.url),
  title: {
    default: "Indrawan Lisanto | AI-Native Enterprise Architect",
    template: "%s | Indrawan Lisanto",
  },
  description: "AI-Native Enterprise Software Architect building agentic workflows, open intelligence standards, and terminal-first developer tools.",
  keywords: [
    "AI-Native",
    "Enterprise Architecture",
    "Agentic Workflows",
    "OpenCode",
    "MCP",
    "Terminal-First",
    "Developer Tools",
    "OMO",
    "AI Agents",
    "Enterprise AI",
  ],
  authors: [{ name: "Indrawan Lisanto", url: webConfig.site.url }],
  creator: "Indrawan Lisanto",
  publisher: "Indrawan Lisanto",
  alternates: {
    canonical: webConfig.site.url,
  },
  openGraph: {
    title: "Indrawan Lisanto | AI-Native Enterprise Architect",
    description: "Building AI-native enterprise systems through agentic workflows and open intelligence standards",
    url: webConfig.site.url,
    siteName: "indrawan.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indrawan Lisanto",
    description: "AI-Native Enterprise Architect - Agentic Workflows, OpenCode, MCP, Terminal-First",
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
  // Get user's preferred language from browser
  const getLang = () => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language || navigator.languages[0]
      return browserLang.startsWith("id") ? "id" : "en"
    }
    return "en"
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
