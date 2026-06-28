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
              <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-xl mb-2">
                {stage.icon}
              </div>
              {index < stages.length - 1 && (
                <div className="w-0.5 h-24 bg-border my-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <Card className="p-6 hover:border-foreground transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {index + 1}. {stage.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{stage.description}</p>
                  </div>
                  <Badge variant="outline" className="whitespace-nowrap text-xs">
                    {stage.duration}
                  </Badge>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Key Activities:</p>
                  <ul className="space-y-1">
                    {stage.activities.map((activity: string, idx: number) => (
                      <li key={idx} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-primary">→</span>
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
