import {
  getPersonalInfo,
  getSkills,
  getProjects,
  getWorkExperience,
  getYouTubeVideos,
  getSocialLinks,
} from "@/lib/data"
import { ThemeToggle } from "@/components/atoms/theme-toggle"
import { Info, Code, FolderGit2, Briefcase, PlayCircle, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Home() {
  const personal = getPersonalInfo()
  const skills = getSkills()
  const projects = getProjects()
  const experiences = getWorkExperience()
  const videos = getYouTubeVideos()
  const social = getSocialLinks()

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

  const sameAs = social.map((s: any) => s.url)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: personal.shortBio,
    url: personal.website || "",
    email: `mailto:${personal.email}`,
    telephone: personal.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: personal.location,
      addressCountry: "ID",
    },
    sameAs,
  }

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 underline">
        Skip to content
      </a>

      <header className="border-b">
        <div className="container mx-auto max-w-3xl px-4 py-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">{personal.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{personal.title}</p>
            </div>
            <ThemeToggle />
          </div>

          <p className="mt-4 text-sm">{personal.shortBio}</p>

          <nav className="mt-5 text-sm" aria-label="Primary">
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href="#about" className="underline">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="underline">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="underline">
                  Experience
                </a>
              </li>
              <li>
                <a href="#videos" className="underline">
                  Videos
                </a>
              </li>
              <li>
                <a href="#contact" className="underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="container mx-auto max-w-3xl px-4 py-8">
        {/* About */}
        <section id="about" className="scroll-offset" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-xl font-semibold flex items-center gap-2">
            <Info className="h-4 w-4" aria-hidden="true" />
            About
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{personal.longBio}</p>

          <ul className="mt-4 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <strong>Location:</strong> {personal.location}
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                className="underline"
                href={personal.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Visit website " + personal.website}
              >
                {personal.website}
              </a>
            </li>
            <li>
              <strong>Status:</strong> {personal.status}
            </li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Skills */}
        <section id="skills" className="scroll-offset" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-xl font-semibold flex items-center gap-2">
            <Code className="h-4 w-4" aria-hidden="true" />
            Skills
          </h2>
          <div className="mt-4 space-y-6">
            {skills.categories.map((cat: any) => (
              <div key={cat.title}>
                <h3 className="text-sm font-medium">{cat.title}</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  {cat.skills.map((s: any) => (
                    <li key={s.name}>
                      <span className={isHighlighted(s.name) ? "font-semibold text-foreground" : undefined}>
                        {s.name}
                      </span>
                      {isHighlighted(s.name) && <span className="sr-only"> (most experienced)</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-medium">Technologies</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {skills.technologies.map((tech: string, i: number) => (
                  <span key={tech} className={isHighlighted(tech) ? "font-semibold text-foreground" : undefined}>
                    {tech}
                    {i < skills.technologies.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8" />

        {/* Projects */}
        <section id="projects" className="scroll-offset" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-xl font-semibold flex items-center gap-2">
            <FolderGit2 className="h-4 w-4" aria-hidden="true" />
            Projects
          </h2>

          <div className="mt-4">
            <h3 className="text-sm font-medium">Featured</h3>
            <ul className="mt-2 space-y-4">
              {projects.featured.map((p: any) => (
                <li key={p.id} className="text-sm">
                  <div className="font-medium">{p.title}</div>
                  <p className="mt-1 text-muted-foreground">{p.description}</p>
                  <p className="mt-1 text-muted-foreground">Tech: {p.technologies.join(", ")}</p>
                  <div className="mt-1 flex flex-wrap gap-x-3">
                    {p.liveUrl && p.liveUrl !== "#" && (
                      <a
                        className="inline-flex items-center gap-1 underline"
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open demo for ${p.title}`}
                      >
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        Demo
                      </a>
                    )}
                    {p.githubUrl && p.githubUrl !== "#" && (
                      <a
                        className="inline-flex items-center gap-1 underline"
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${p.title}`}
                      >
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        Code
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium">Other Projects</h3>
            <ul className="mt-2 space-y-4">
              {projects.other.map((p: any) => (
                <li key={p.id} className="text-sm">
                  <div className="font-medium">{p.title}</div>
                  <p className="mt-1 text-muted-foreground">{p.description}</p>
                  <p className="mt-1 text-muted-foreground">Tech: {p.technologies.join(", ")}</p>
                  <div className="mt-1 flex flex-wrap gap-x-3">
                    {p.liveUrl && p.liveUrl !== "#" && (
                      <a
                        className="inline-flex items-center gap-1 underline"
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open demo for ${p.title}`}
                      >
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        Demo
                      </a>
                    )}
                    {p.githubUrl && p.githubUrl !== "#" && (
                      <a
                        className="inline-flex items-center gap-1 underline"
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${p.title}`}
                      >
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        Code
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="my-8" />

        {/* Experience */}
        <section id="experience" className="scroll-offset" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-xl font-semibold flex items-center gap-2">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            Experience
          </h2>
          <ul className="mt-4 space-y-6">
            {experiences.map((e: any) => (
              <li key={e.id} className="text-sm">
                <div className="font-medium">
                  {e.title} at {e.company}
                </div>
                <div className="mt-1 text-muted-foreground">
                  {e.period} • {e.location} • {e.type}
                </div>
                <p className="mt-2 text-muted-foreground">{e.description}</p>
                {Array.isArray(e.achievements) && e.achievements.length > 0 && (
                  <div className="mt-2">
                    <div className="font-medium">Key Achievements</div>
                    <ul className="mt-1 list-disc pl-5 text-muted-foreground">
                      {e.achievements.slice(0, 3).map((a: string, i: number) => (
                        <li key={i}>{a}</li>
                      ))}
                      {e.achievements.length > 3 && <li>+{e.achievements.length - 3} more</li>}
                    </ul>
                  </div>
                )}
                {Array.isArray(e.technologies) && e.technologies.length > 0 && (
                  <p className="mt-2 text-muted-foreground">Tech: {e.technologies.join(", ")}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <hr className="my-8" />

        {/* Videos */}
        <section id="videos" className="scroll-offset" aria-labelledby="videos-heading">
          <h2 id="videos-heading" className="text-xl font-semibold flex items-center gap-2">
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            Videos
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {videos.map((v: any) => (
              <li key={v.id}>
                <a
                  className="underline"
                  href={`https://www.youtube.com/watch?v=${v.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${v.title} on YouTube`}
                >
                  {v.title}
                </a>
                <span className="text-muted-foreground">
                  {" "}
                  — {v.category} • {v.duration}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <a
              className="inline-flex items-center gap-1 underline"
              href="https://youtube.com/@indrawandev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit YouTube channel"
            >
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
              Visit channel
            </a>
          </p>
        </section>

        <hr className="my-8" />

        {/* Contact */}
        <section id="contact" className="scroll-offset" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-xl font-semibold">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <strong>Email:</strong>{" "}
              <a className="underline" href={`mailto:${personal.email}`} aria-label={"Email " + personal.email}>
                {personal.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <strong>Phone:</strong>{" "}
              <a
                className="underline"
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                aria-label={"Call " + personal.phone}
              >
                {personal.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <strong>Location:</strong> {personal.location}
            </li>
            <li>
              <strong>Resume:</strong>{" "}
              <a
                className="underline"
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume (new tab)"
              >
                Download CV
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {social.map((s: any) => (
                <li key={s.name}>
                  <a
                    className="underline"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${s.name} profile`}
                  >
                    {s.name}
                  </a>{" "}
                  <span className="text-muted-foreground">{s.username}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>

      <footer className="border-t">
        <div className="container mx-auto max-w-3xl px-4 py-8 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
