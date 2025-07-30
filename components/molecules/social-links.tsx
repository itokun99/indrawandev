import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    href: "https://github.com/itokun99",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/indrawan-lisanto",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/byito_dev",
    icon: Twitter,
    label: "Twitter",
  },
]

interface SocialLinksProps {
  variant?: "default" | "footer"
}

export function SocialLinks({ variant = "default" }: SocialLinksProps) {
  return (
    <div className={`flex items-center ${variant === "footer" ? "space-x-2" : "space-x-1"}`}>
      {socialLinks.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          size="icon"
          asChild
          className={variant === "footer" ? "h-8 w-8" : "h-9 w-9"}
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            <link.icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  )
}
