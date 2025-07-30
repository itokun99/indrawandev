"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { getWorkExperience } from "@/lib/data"

export function ExperienceSection() {
  const experiences = getWorkExperience()

  return (
    <section id="experience" className="section-padding bg-muted/30 scroll-offset">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-mobile-h2 mb-3 sm:mb-4 gradient-text">Work Experience</h2>
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform sm:-translate-x-0.5"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative mb-8 sm:mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-1/2 w-4 h-4 bg-primary rounded-full transform sm:-translate-x-2 z-10 mt-4"></div>

                {/* Content */}
                <div className={`ml-8 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-6" : "sm:ml-auto sm:pl-6"}`}>
                  <Card className="modern-card">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-primary" />
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-mobile-small text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {experience.period}
                        </div>
                      </div>
                      <CardTitle className="text-base sm:text-lg">{experience.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-mobile-small">
                        <span className="font-medium text-primary">{experience.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-mobile-small text-muted-foreground mb-3">{experience.description}</p>

                      <div className="mb-3">
                        <h4 className="text-mobile-small font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/20 text-primary text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
