import type React from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Indrawan Lisanto - Software Engineer & React Native Developer",
  description:
    "Software Engineer with over 6 years of experience, specializing in React Native to build high-performance mobile applications for enterprise clients.",
  keywords: "Software Engineer, React Native Developer, Frontend Specialist, TypeScript, Next.js",
  authors: [{ name: "Indrawan Lisanto" }],
  openGraph: {
    title: "Indrawan Lisanto - Software Engineer & React Native Developer",
    description:
      "Software Engineer with over 6 years of experience, specializing in React Native to build high-performance mobile applications for enterprise clients.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={firaCode.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
