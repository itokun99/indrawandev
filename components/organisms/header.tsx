"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/atoms/logo"
import { Navigation } from "@/components/molecules/navigation"
import { SocialLinks } from "@/components/molecules/social-links"
import { ThemeToggle } from "@/components/atoms/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <div className="flex items-center space-x-4">
            <Navigation />
            <div className="hidden sm:block">
              <SocialLinks />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
