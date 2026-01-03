import { socialLinks } from "../data"
import "./Header.css"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/95 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold glow">{"{O-O}"}</div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#skills" className="hover:text-green-400 transition">
            $ Skills
          </a>
          <a href="#projects" className="hover:text-green-400 transition">
            $ Projects
          </a>
          <a href="#experience" className="hover:text-green-400 transition">
            $ Experience
          </a>
          <a href="#contact" className="hover:text-green-400 transition">
            $ Contact
          </a>
        </nav>
        <div className="flex gap-4">
          {socialLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-amber-400 transition"
            >
              {link.username}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
