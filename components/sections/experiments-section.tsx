"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { getExperiments } from "@/lib/data"

export function ExperimentsSection() {
  const experiments = getExperiments()

  return (
    <section id="experiments" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Latest Experiments</h2>
        <p className="text-muted-foreground">Live explorations on LinkedIn where I share what I&apos;m building and learning</p>
      </div>

      <div className="space-y-4">
        {experiments.map((exp: any) => (
          <Card key={exp.id} className="p-6 hover:border-foreground transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
              <div className="text-sm text-muted-foreground whitespace-nowrap">
                {new Date(exp.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {exp.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>{exp.likes.toLocaleString()} likes</span>
                <span>{exp.comments.toLocaleString()} comments</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="ml-auto"
                asChild
              >
                <a href={exp.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read on LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
