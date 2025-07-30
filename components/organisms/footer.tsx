"use client"

import { Logo } from "@/components/atoms/logo"
import { SocialLinks } from "@/components/molecules/social-links"

const footerLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Software Engineer specializing in React Native and modern web technologies.
            </p>
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Indrawan Lisanto. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
