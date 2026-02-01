"use client"

import { useState, useEffect } from "react"
import {
  getPersonalInfo,
  getSkills,
  getProjects,
  getWorkExperience,
  getYouTubeVideos,
  getSocialLinks,
} from "@/lib/data"
import { ThemeToggle } from "@/components/atoms/theme-toggle"
import { getLanguage, t } from "@/lib/i18n"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Home() {
  const [lang, setLang] = useState<"en" | "id">("en")
  const personal = getPersonalInfo()
  const skills = getSkills()
  const projects = getProjects()
  const experiences = getWorkExperience()
  const videos = getYouTubeVideos()
  const social = getSocialLinks()

  useEffect(() => {
    setLang(getLanguage())
  }, [])

  const translate = (key: string) => t(lang, key)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 underline">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">{translate("header.title")}</h1>
          <div className="flex items-center gap-4">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as "en" | "id")}
              className="text-sm px-2 py-1 rounded border border-border bg-background"
            >
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{personal.name}</h2>
            <p className="text-lg text-muted-foreground">{translate("hero.role")}</p>
          </div>
          <p className="text-base leading-relaxed text-foreground/90">
            {personal.bio || "Building robust, scalable systems with React Native, TypeScript, and Go."}
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${personal.phone.replace(/\s+/g, "")}`}>{personal.phone}</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={personal.resume} target="_blank" rel="noopener noreferrer">
                {translate("hero.resume")}
              </a>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">{translate("skills.title")}</h3>
          <div className="space-y-4">
            {skills.categories.map((category: any) => (
              <div key={category.title}>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((s: any) => (
                    <Badge key={s.name} variant="secondary">
                      {s.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">{translate("experience.title")}</h3>
          <div className="space-y-4">
            {experiences.map((e: any) => (
              <Card key={e.id} className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{e.title}</h4>
                    <p className="text-sm text-muted-foreground">{e.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{e.period}</span>
                </div>
                {e.location && <p className="text-xs text-muted-foreground mb-3">{e.location}</p>}
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">{e.description}</p>
                {Array.isArray(e.technologies) && e.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {e.technologies.slice(0, 5).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                {Array.isArray(e.achievements) && e.achievements.length > 0 && (
                  <ul className="text-sm space-y-1 text-foreground/80">
                    {e.achievements.slice(0, 3).map((achievement: string, idx: number) => (
                      <li key={idx}>• {achievement}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">{translate("projects.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...projects.featured, ...projects.other].map((p: any) => (
              <Card key={p.id} className="p-5 sm:p-6 hover:border-foreground transition-colors">
                <h4 className="font-semibold text-foreground mb-2">{p.title}</h4>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">{p.description}</p>
                {Array.isArray(p.technologies) && p.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.technologies.slice(0, 3).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  {p.liveUrl && p.liveUrl !== "#" && (
                    <Button variant="ghost" size="sm" asChild className="text-xs">
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {translate("projects.liveDemo")}
                      </a>
                    </Button>
                  )}
                  {p.githubUrl && p.githubUrl !== "#" && (
                    <Button variant="ghost" size="sm" asChild className="text-xs">
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        {translate("projects.sourceCode")}
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">{translate("videos.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((v: any) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-5 sm:p-6 hover:border-foreground transition-colors h-full">
                  <p className="text-xs text-muted-foreground mb-2">{v.category}</p>
                  <h4 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                    {v.title}
                  </h4>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Connect Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">{translate("connect.title")}</h3>
          <div className="flex flex-wrap gap-3">
            {social.map((s: any) => (
              <Button key={s.name} variant="outline" size="sm" asChild>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </Button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Indrawan Lisanto. {translate("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  )
}
