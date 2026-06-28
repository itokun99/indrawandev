"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getWorkflowStages } from "@/lib/data"

export function WorkflowSection() {
  const stages = getWorkflowStages()

  return (
    <section id="workflow" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Agentic Workflow Architecture</h2>
        <p className="text-muted-foreground">How I architect intelligence into enterprise systems</p>
      </div>

      <div className="space-y-4">
        {stages.map((stage: any, index: number) => (
          <div key={stage.id} className="flex gap-4">
            {/* Timeline connector */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-lg font-semibold text-accent mb-2">
                {stage.icon}
              </div>
              {index < stages.length - 1 && (
                <div className="w-0.5 h-24 bg-border/50 my-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <Card className="card-premium p-6 group hover:shadow-lg transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      <span className="text-accent font-mono">{String(index + 1).padStart(2, "0")}.</span> {stage.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{stage.description}</p>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap text-xs font-medium">
                    {stage.duration}
                  </Badge>
                </div>

                <div className="mt-4 space-y-3 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest font-mono">Activities</p>
                  <ul className="space-y-2">
                    {stage.activities.map((activity: string, idx: number) => (
                      <li key={idx} className="text-sm text-foreground/80 flex gap-3">
                        <span className="text-accent font-mono flex-shrink-0">▸</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
