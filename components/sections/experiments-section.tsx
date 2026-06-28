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

      <div className="space-y-3">
        {experiments.map((exp: any) => (
          <Card key={exp.id} className="card-premium p-6 group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap font-mono">
                {new Date(exp.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {exp.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border/50">
              <div className="flex gap-6 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1">
                  <span className="text-accent">♡</span> {exp.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-accent">💬</span> {exp.comments.toLocaleString()}
                </span>
              </div>
              <Button
                size="sm"
                className="bg-accent hover:bg-accent-secondary text-background font-semibold rounded-md transition-all duration-200 text-xs"
                asChild
              >
                <a href={exp.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-2" />
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
