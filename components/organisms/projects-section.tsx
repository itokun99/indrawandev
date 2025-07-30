"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { getProjects } from "@/lib/data"

export function ProjectsSection() {
  const projects = getProjects()
  const [visibleOtherCount, setVisibleOtherCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreProjects = async () => {
    setIsLoading(true)
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setVisibleOtherCount((prev) => Math.min(prev + 6, projects.other.length))
    setIsLoading(false)
  }

  const visibleOtherProjects = projects.other.slice(0, visibleOtherCount)
  const hasMoreProjects = visibleOtherCount < projects.other.length

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
          {projects.featured.map((project) => (
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
            {visibleOtherProjects.map((project) => (
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
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="border-primary/20 text-primary text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
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

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="text-center mt-8 sm:mt-12">
              <Button
                onClick={loadMoreProjects}
                disabled={isLoading}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-mobile-small px-6 sm:px-8 bg-transparent"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin mr-2 h-3 w-3 sm:h-4 sm:w-4 border-2 border-current border-t-transparent rounded-full"></div>
                    Loading...
                  </>
                ) : (
                  `Load More Projects (${projects.other.length - visibleOtherCount} remaining)`
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
