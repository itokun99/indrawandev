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
          <Card key={initiative.id} className="p-6 hover:border-foreground transition-colors flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-1">{initiative.name}</h3>
              <Badge variant="secondary" className="text-xs mb-3">
                {initiative.role}
              </Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">{initiative.description}</p>
            </div>

            <div className="mt-auto pt-4 border-t border-border space-y-3">
              {initiative.frequency && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Frequency:</span>
                  <span className="font-medium">{initiative.frequency}</span>
                </div>
              )}
              
              {initiative.memberCount && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Members:</span>
                  <span className="font-medium">{initiative.memberCount.toLocaleString()}+</span>
                </div>
              )}

              {initiative.talks && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Talks:</span>
                  <span className="font-medium">{initiative.talks}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1 mb-2">
                {(initiative.focus || []).map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {initiative.url && (
                <Button size="sm" variant="outline" className="w-full" asChild>
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
