"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Calendar, MapPin } from "lucide-react"
import { getWorkExperience } from "@/lib/data"

export function ExperienceSection() {
  const allExperiences = getWorkExperience()
  const [visibleCount, setVisibleCount] = useState(4)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreExperiences = async () => {
    setIsLoading(true)
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setVisibleCount((prev) => Math.min(prev + 3, allExperiences.length))
    setIsLoading(false)
  }

  const visibleExperiences = allExperiences.slice(0, visibleCount)
  const hasMoreExperiences = visibleCount < allExperiences.length

  return (
    <section id="experience" className="section-padding bg-muted/30 scroll-offset">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-mobile-h2 mb-3 sm:mb-4 gradient-text">Work Experience</h2>
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements over {allExperiences.length} positions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform sm:-translate-x-0.5"></div>

            {visibleExperiences.map((experience, index) => (
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
                          {experience.achievements.length > 3 && (
                            <li className="text-xs text-muted-foreground/70 italic">
                              +{experience.achievements.length - 3} more achievements
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {experience.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/20 text-primary text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {experience.technologies.length > 4 && (
                          <Badge variant="outline" className="border-primary/20 text-primary text-xs">
                            +{experience.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreExperiences && (
            <div className="text-center mt-8 sm:mt-12">
              <Button
                onClick={loadMoreExperiences}
                disabled={isLoading}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-mobile-small px-6 sm:px-8 bg-transparent"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin mr-2 h-3 w-3 sm:h-4 sm:w-4 border-2 border-current border-t-transparent rounded-full"></div>
                    Loading...
                  </>
                ) : (
                  `Load More Experience (${allExperiences.length - visibleCount} remaining)`
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
