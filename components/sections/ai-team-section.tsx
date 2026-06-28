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
            className={`p-6 border border-border hover:border-foreground transition-all cursor-pointer bg-gradient-to-br ${member.color} opacity-10 hover:opacity-20`}
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{member.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{member.specialty}</p>
              <Badge variant="outline" className="text-xs mt-2">
                {member.specialty.split(",")[0]}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
