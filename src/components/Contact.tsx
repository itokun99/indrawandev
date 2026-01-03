import { socialLinks } from "../data"
import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 border-t border-green-500/30 bg-green-500/2">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-green-400">$ contact</h2>
        <div className="h-1 w-12 bg-amber-400 mx-auto mb-12"></div>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Always interested in hearing about new opportunities and connecting with fellow engineers. Feel free to reach
          out!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-500 text-green-400 hover:bg-green-500/10 transition text-sm font-mono"
            >
              {link.username}
            </a>
          ))}
        </div>

        <div className="border-t border-green-500/30 pt-8">
          <p className="text-xs text-gray-500">{"// © 2025 Indrawan Lisanto. All rights reserved."}</p>
          <p className="text-xs text-gray-600 mt-2">{"// Crafted with coffee and code"}</p>
        </div>
      </div>
    </section>
  )
}
