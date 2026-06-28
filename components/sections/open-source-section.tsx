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
          <Card key={project.id} className="p-6 hover:border-foreground transition-colors flex flex-col">
            <div className="mb-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-semibold text-foreground flex-1">{project.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500 whitespace-nowrap">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{project.stars}</span>
                </div>
              </div>
              <p className="text-sm text-primary font-medium mb-2">{project.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            <div className="my-4 flex-1">
              <div className="flex flex-wrap gap-2">
                {project.topics.map((topic: string) => (
                  <Badge key={topic} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{project.language}</span>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                {project.status}
              </Badge>
              <div className="flex gap-2 ml-auto">
                <Button size="sm" variant="ghost" asChild>
                  <a href={`https://github.com/${project.github}`} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
