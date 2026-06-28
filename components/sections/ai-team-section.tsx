"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAITeam } from "@/lib/data"

export function AITeamSection() {
  const team = getAITeam()

  return (
    <section id="ai-team" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">AI Pantheon</h2>
        <p className="text-muted-foreground">Meet the digital intelligences shaping my work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map((member: any) => (
          <Card
            key={member.id}
            className="card-premium p-6 cursor-pointer group hover:shadow-lg transition-all duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl p-2 rounded-lg bg-muted/50 group-hover:bg-accent/10 transition-colors">
                  {member.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">{member.name}</h3>
                  <p className="text-sm text-accent font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{member.specialty}</p>
              <div className="flex gap-2 pt-2 border-t border-border/50">
                <Badge variant="secondary" className="text-xs font-medium">
                  {member.specialty.split(",")[0]}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
