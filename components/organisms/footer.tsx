import { Logo } from "@/components/atoms/logo"
import { SocialLinks } from "@/components/molecules/social-links"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-mobile-small text-muted-foreground max-w-sm">
              Software engineer specializing in React Native and full-stack development. Building scalable applications
              that make a difference.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-mobile-small font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#skills"
                className="text-mobile-small text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-mobile-small text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-mobile-small text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-mobile-small text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-mobile-small font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-mobile-small text-muted-foreground">
              <p>Jakarta, Indonesia</p>
              <p>ito@byito.dev</p>
              <p>+62 123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-mobile-small text-muted-foreground">
          <p>&copy; 2024 Indrawan Lisanto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
