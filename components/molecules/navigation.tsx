"use client"

interface NavigationProps {
  mobile?: boolean
  onItemClick?: () => void
}

export function Navigation({ mobile = false, onItemClick }: NavigationProps) {
  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onItemClick?.()
  }

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item.href)}
            className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {item.name}
          </button>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleClick(item.href)}
          className="text-mobile-small font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {item.name}
        </button>
      ))}
    </nav>
  )
}
