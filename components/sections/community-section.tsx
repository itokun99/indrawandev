"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { getCommunity } from "@/lib/data"

export function CommunitySection() {
  const initiatives = getCommunity()

  return (
    <section id="community" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Community & Speaking</h2>
        <p className="text-muted-foreground">Building ecosystems where developers can explore AI-native architectures together</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {initiatives.map((initiative: any) => (
          <Card key={initiative.id} className="card-premium p-6 flex flex-col group hover:shadow-lg transition-all duration-200">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{initiative.name}</h3>
              <Badge variant="secondary" className="text-xs font-medium mb-3">
                {initiative.role}
              </Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">{initiative.description}</p>
            </div>

            <div className="mt-auto pt-4 border-t border-border/50 space-y-2 text-xs">
              {initiative.frequency && (
                <div className="flex justify-between font-mono text-muted-foreground">
                  <span>Frequency</span>
                  <span className="text-foreground">{initiative.frequency}</span>
                </div>
              )}
              
              {initiative.memberCount && (
                <div className="flex justify-between font-mono text-muted-foreground">
                  <span>Members</span>
                  <span className="text-accent">{initiative.memberCount.toLocaleString()}+</span>
                </div>
              )}

              {initiative.talks && (
                <div className="flex justify-between font-mono text-muted-foreground">
                  <span>Talks</span>
                  <span className="text-foreground">{initiative.talks}</span>
                </div>
              )}

              {(initiative.focus || []).length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {(initiative.focus || []).map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {initiative.url && (
                <Button size="sm" className="w-full mt-3 bg-accent hover:bg-accent-secondary text-background font-semibold rounded-md transition-all duration-200" asChild>
                  <a href={initiative.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
