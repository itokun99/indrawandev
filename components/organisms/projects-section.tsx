"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Enterprise Banking App",
    description:
      "React Native application for Bank Rakyat Indonesia (BRI) serving 100K+ users with core banking features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Apigee"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "HRIS Management System",
    description: "Complete redesign of HR system with modern React stack, improving user navigation by 40%.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React.js", "Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const otherProjects = [
  {
    title: "E-Learning Platform",
    description: "Front-end overhaul of e-course platform boosting performance by 25%.",
    technologies: ["React.js", "Next.js", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TUV Nord System",
    description: "Unified front-end architecture accelerating development by 60%.",
    technologies: ["React.js", "TypeScript", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Finance Dashboard",
    description: "Internal finance dashboard with GraphQL and atomic design.",
    technologies: ["React.js", "GraphQL", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Multi-Dealer App",
    description: "Mobile app managing 26+ dealer locations with real-time sync.",
    technologies: ["React Native", "Firebase", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding scroll-offset">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-mobile-h2 mb-3 sm:mb-4 gradient-text">Featured Projects</h2>
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto">
            Recent work and contributions to various projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="modern-card overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-mobile-h3">{project.title}</CardTitle>
                <CardDescription className="text-mobile-small">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/20 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-mobile-small flex-1">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-mobile-small flex-1 bg-transparent"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-mobile-h3 mb-4 sm:mb-6 text-center">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <Card key={project.title} className="modern-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-mobile-small">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/20 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 text-xs bg-transparent"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 text-xs bg-transparent"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
