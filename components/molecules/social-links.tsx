import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/itokun99",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/indrawan-lisanto",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/byito_dev",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ito@byito.dev",
    },
  ]

  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="sm"
          className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground p-2 bg-transparent"
          asChild
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <link.icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  )
}
