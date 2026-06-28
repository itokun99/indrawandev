"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import { getOpenSourceProjects } from "@/lib/data"

export function OpenSourceSection() {
  const projects = getOpenSourceProjects()

  return (
    <section id="open-source" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Open Source & AI Lab</h2>
        <p className="text-muted-foreground">Projects, research, and frameworks shaping the future of AI-native development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project: any) => (
          <Card key={project.id} className="card-premium p-6 flex flex-col group hover:shadow-lg transition-all duration-200">
            <div className="mb-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-foreground flex-1 group-hover:text-accent transition-colors">{project.name}</h3>
                <div className="flex items-center gap-1.5 text-accent whitespace-nowrap font-mono text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{project.stars}</span>
                </div>
              </div>
              <p className="text-sm text-accent font-semibold mb-2">{project.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            <div className="my-4 flex-1">
              <div className="flex flex-wrap gap-2">
                {project.topics.map((topic: string) => (
                  <Badge key={topic} variant="secondary" className="text-xs font-medium">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <span className="text-accent">◊</span> {project.language}
              </div>
              <Badge variant="outline" className="w-fit text-xs font-medium">
                {project.status}
              </Badge>
              <Button 
                size="sm" 
                className="ml-auto bg-accent hover:bg-accent-secondary text-background font-semibold rounded-md text-xs transition-all duration-200"
                asChild
              >
                <a href={`https://github.com/${project.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
