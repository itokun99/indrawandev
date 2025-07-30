import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Facebook, Instagram, AtSign, Mail } from "lucide-react"
import { getSocialLinks } from "@/lib/data"

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  AtSign, // Using AtSign for Threads since there's no specific Threads icon in lucide-react
  Mail,
}

export function SocialLinks() {
  const socialLinks = getSocialLinks()

  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon as keyof typeof iconMap]
        return (
          <Button
            key={link.name}
            variant="outline"
            size="sm"
            className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground p-2 bg-transparent"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              <IconComponent className="h-4 w-4" />
            </a>
          </Button>
        )
      })}
    </div>
  )
}
