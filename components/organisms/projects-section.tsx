"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Smartphone, Globe, Database, Server, Code } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "DuitQu - Money Management App",
    description:
      "A comprehensive money management application built from the ground up with modern React Native architecture.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React Native", "TypeScript", "Firebase", "Go", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Smartphone,
    status: "Production",
  },
  {
    id: 2,
    title: "Astra Honda - Mokita App",
    description:
      "Cross-platform mobile application for 26 Astra Honda dealers with E-Commerce and Service Booking features.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React Native", "Redux", "TypeScript", "REST API"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Smartphone,
    status: "Enterprise",
  },
  {
    id: 3,
    title: "PermataBank Enterprise Business",
    description:
      "Responsive web application for Permata Enterprise Business ecosystem with 40% performance improvement.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "REST API"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Globe,
    status: "Enterprise",
  },
  {
    id: 4,
    title: "Telkomsel by.U Mobile App",
    description: "Core features development for by.U mobile app including payment, ordering, and loyalty systems.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React Native", "Redux", "GraphQL", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Smartphone,
    status: "Enterprise",
  },
  {
    id: 5,
    title: "XPresensi & XLibrary Suite",
    description:
      "Educational information system with attendance tracking and digital library features using RFID and AI.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React Native", "React.js", "AI", "RFID", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Database,
    status: "Production",
  },
  {
    id: 6,
    title: "Sani V2 HRIS",
    description:
      "Modern Human Resource Information System with complete frontend redesign and microservices architecture.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React.js", "TypeScript", "ShadcnUI", "Docker", "Microservices"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Server,
    status: "Production",
  },
  {
    id: 7,
    title: "BRIAPI Banking Microservices",
    description: "Core banking microservices for Bank Rakyat Indonesia handling millions of daily transactions.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["Go", "Python", "Kubernetes", "Apigee", "Microservices"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Server,
    status: "Enterprise",
  },
  {
    id: 8,
    title: "TUV Nord Unified System",
    description: "Unified front-end architecture for multiple internal applications with 60% development acceleration.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["React.js", "TypeScript", "Design System", "REST API"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Globe,
    status: "Enterprise",
  },
  {
    id: 9,
    title: "Vokadash - Admin Dashboard Kit",
    description: "Open source NPM package providing tooling for customizable and efficient admin dashboards.",
    image: "/placeholder.svg?height=200&width=350",
    techStack: ["Vite", "Tanstack Query", "Jotai", "TailwindCSS", "ShadcnUI"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Code,
    status: "Open Source",
  },
]

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setVisibleCount((prev) => Math.min(prev + 3, allProjects.length))
    setIsLoading(false)
  }

  const visibleProjects = allProjects.slice(0, visibleCount)
  const hasMore = visibleCount < allProjects.length

  return (
    <section id="projects" className="py-20 relative scroll-offset">
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto p-6 pt-12 mb-8">
            <div className="code-block">
              <span className="text-green-500">$</span> <span className="text-blue-500">git log --oneline</span>
              <br />
              <span className="text-muted-foreground">{allProjects.length} commits (projects) found</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono">
            {"<"}
            <span className="text-primary">MY_LATEST_WORK</span>
            {" />"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            // Enterprise applications and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 terminal-window pt-8 border-2 border-dashed hover:border-solid"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg relative bg-gradient-to-br from-primary/10 to-blue-600/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-primary/60" />
                  </div>
                  <div className="absolute top-2 left-2 bg-background/90 px-2 py-1 rounded text-xs font-mono border border-dashed">
                    [{String(index + 1).padStart(2, "0")}]
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant={
                        project.status === "Enterprise"
                          ? "default"
                          : project.status === "Open Source"
                            ? "secondary"
                            : "outline"
                      }
                      className="font-mono text-xs"
                    >
                      {project.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="group-hover:text-primary transition-colors font-mono text-lg mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-mono text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-mono border-dashed hover:border-solid transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="font-mono border-dashed border-muted-foreground text-muted-foreground hover:border-solid hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        CODE
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        DEMO
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMore}
              disabled={isLoading}
              className="font-mono border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  LOADING_PROJECTS...
                </>
              ) : (
                `LOAD_MORE() // ${allProjects.length - visibleCount} remaining`
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
