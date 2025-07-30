import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getSkills } from "@/lib/data"

export function SkillsSection() {
  const skills = getSkills()

  return (
    <section id="skills" className="section-padding bg-muted/30 scroll-offset">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-mobile-h2 mb-3 sm:mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build modern applications
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {skills.categories.map((category) => (
            <Card key={category.title} className="modern-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-mobile-h3 text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-mobile-small">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology badges */}
        <div className="text-center">
          <h3 className="text-mobile-h3 mb-4 sm:mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {skills.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-mobile-small px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
