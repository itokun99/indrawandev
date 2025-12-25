"use client"

import {
  getPersonalInfo,
  getSkills,
  getProjects,
  getWorkExperience,
  getYouTubeVideos,
  getSocialLinks,
} from "@/lib/data"
import { ThemeToggle } from "@/components/atoms/theme-toggle"
import { Code, FolderGit2, Briefcase, PlayCircle, Mail, Phone, ExternalLink, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const personal = getPersonalInfo()
  const skills = getSkills()
  const projects = getProjects()
  const experiences = getWorkExperience()
  const videos = getYouTubeVideos()
  const social = getSocialLinks()
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const highlightedSkills = new Set([
    "react native",
    "react.js",
    "react",
    "next.js",
    "typescript",
    "go",
    "node.js",
    "rest apis",
    "git",
    "docker",
  ])
  const isHighlighted = (name: string) => highlightedSkills.has(name.toLowerCase())

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 underline">
        Skip to content
      </a>

      {/* Header */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-accent text-xl font-bold">{"{O-O}"}</span>
              <h1 className="text-xl font-bold text-accent">meganecode.dev</h1>
            </div>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm font-mono" aria-label="Primary Navigation">
            <a href="#philosophy" className="hover:text-accent-secondary transition-colors">
              Philosophy
            </a>
            <a href="#arsenal" className="hover:text-accent-secondary transition-colors">
              Arsenal
            </a>
            <a href="#contact" className="hover:text-accent-secondary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="max-w-4xl mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <h2 className="text-5xl font-black mb-2 text-accent">
            Focusing Logic.
            <br />
            Refracting Hype.
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-mono">
            Senior Software Architect crafting robust, human-verified solutions.
            <br />
            <span className="text-accent">100% Logic</span>, <span className="text-accent-secondary">0% AI Magic</span>
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#arsenal" className="terminal-button">
              View My Arsenal
            </a>
            <a href="#contact" className="terminal-button-secondary">
              Get In Touch
            </a>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="scroll-offset">
          <div className="section-title">
            <Lightbulb className="w-6 h-6" />
            The Megane Philosophy
          </div>

          <div className="terminal-card">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I don't rely on AI generators. I sell <span className="text-accent font-bold">craftsmanship</span>,
                <span className="text-accent font-bold"> deep understanding</span>, and
                <span className="text-accent font-bold"> accountability</span>.
              </p>
              <p>
                Every line of code is written by a human mind, for human needs. Every solution is thoughtfully
                architected. Every decision is defensible.
              </p>
              <p className="text-accent font-mono">
                {"// Code written with intention. Logic refined through experience."}
              </p>
              <p className="text-sm border-l-2 border-accent-secondary pl-4 text-accent-secondary">
                "The Intellectual Knight" believes in hand-crafted code logic over hype. Wearing glasses (Megane) with
                Neovim and Tmux in hand, building solutions that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Arsenal Section */}
        <section id="arsenal" className="scroll-offset">
          <div className="section-title">
            <Code className="w-6 h-6" />
            Arsenal
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Featured Tech Stack */}
            <div className="terminal-card">
              <h3 className="text-accent font-bold mb-4 flex items-center gap-2">
                <span className="text-accent-secondary">›</span> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React Native", "React.js", "Next.js", "TypeScript"].map((tech) => (
                  <span key={tech} className="skill-tag highlighted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="terminal-card">
              <h3 className="text-accent font-bold mb-4 flex items-center gap-2">
                <span className="text-accent-secondary">›</span> Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Go", "PostgreSQL", "Docker"].map((tech) => (
                  <span key={tech} className="skill-tag highlighted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="terminal-card">
              <h3 className="text-accent font-bold mb-4 flex items-center gap-2">
                <span className="text-accent-secondary">›</span> Editor & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Neovim", "Tmux", "Git", "Linux"].map((tech) => (
                  <span key={tech} className="skill-tag highlighted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="terminal-card">
              <h3 className="text-accent font-bold mb-4 flex items-center gap-2">
                <span className="text-accent-secondary">›</span> Specialization
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Architecture", "Performance", "Leadership", "Microservices"].map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="terminal-card bg-black/50 border-accent-secondary">
            <p className="text-center text-accent-secondary font-mono font-bold">// Hand-Forged Code</p>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="scroll-offset">
          <div className="section-title">
            <FolderGit2 className="w-6 h-6" />
            Featured Work
          </div>

          <div className="space-y-6">
            {projects.featured.map((p: any) => (
              <div key={p.id} className="terminal-card">
                <h3 className="text-xl text-accent font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-3">{p.description}</p>
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  <span className="text-accent-secondary">Stack:</span> {p.technologies.join(" • ")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {p.liveUrl && p.liveUrl !== "#" && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 terminal-button text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  )}
                  {p.githubUrl && p.githubUrl !== "#" && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 terminal-button text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="scroll-offset">
          <div className="section-title">
            <Briefcase className="w-6 h-6" />
            Experience
          </div>

          <div className="space-y-6">
            {experiences.map((e: any) => (
              <div key={e.id} className="terminal-card">
                <div className="flex flex-wrap gap-2 mb-2">
                  <h3 className="text-accent font-bold">{e.title}</h3>
                  <span className="text-accent-secondary">@</span>
                  <h3 className="text-foreground font-bold">{e.company}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-3 font-mono">
                  {e.period} • {e.location} • {e.type}
                </p>
                <p className="text-sm text-muted-foreground mb-3">{e.description}</p>
                {Array.isArray(e.achievements) && e.achievements.length > 0 && (
                  <div className="mb-3">
                    <p className="text-accent text-sm font-mono mb-2">Key Wins:</p>
                    <ul className="space-y-1">
                      {e.achievements.slice(0, 3).map((a: string, i: number) => (
                        <li key={i} className="text-xs text-muted-foreground">
                          <span className="text-accent-secondary">▸</span> {a}
                        </li>
                      ))}
                      {e.achievements.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          <span className="text-accent-secondary">▸</span> +{e.achievements.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                {Array.isArray(e.technologies) && e.technologies.length > 0 && (
                  <p className="text-xs text-muted-foreground font-mono">
                    <span className="text-accent">Tech:</span> {e.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="scroll-offset">
          <div className="section-title">
            <PlayCircle className="w-6 h-6" />
            Latest Content
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {videos.map((v: any) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-card group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-accent font-bold group-hover:text-accent-secondary transition-colors">
                    {v.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{v.category}</p>
                <p className="text-xs text-accent-secondary">{v.duration}</p>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://youtube.com/@indrawandev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 terminal-button-secondary"
            >
              <ExternalLink className="w-4 h-4" />
              All Videos
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-offset py-12">
          <div className="section-title">
            <Mail className="w-6 h-6" />
            Contact
          </div>

          <div className="terminal-card">
            <div className="space-y-4">
              <p className="text-muted-foreground">Let's work together. Reach out through any of these channels:</p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <a href={`mailto:${personal.email}`} className="terminal-button text-center">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </a>
                <a href={`tel:${personal.phone.replace(/\s+/g, "")}`} className="terminal-button text-center">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call
                </a>
              </div>

              <div>
                <p className="text-accent text-sm font-mono mb-3">Social Profiles:</p>
                <div className="flex flex-wrap gap-2">
                  {social.map((s: any) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="skill-tag">
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-6">
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button-secondary w-full text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Indrawan Lisanto. All rights reserved.</p>
          <p className="mt-2 text-accent-secondary">Compiled with Human Logic.</p>
        </div>
      </footer>
    </div>
  )
}
