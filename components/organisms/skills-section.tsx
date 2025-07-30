import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Server,
  Cpu,
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Cloud,
  Container,
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: Code },
      { name: "JavaScript", icon: Terminal },
      { name: "Go", icon: Zap },
      { name: "Python", icon: Code },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React Native", icon: Smartphone },
      { name: "React.js", icon: Globe },
      { name: "Next.js", icon: Layers },
      { name: "Node.js", icon: Server },
      { name: "Laravel", icon: Code },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "Supabase", icon: Database },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: Container },
      { name: "Kubernetes", icon: Cpu },
      { name: "Vercel", icon: Cloud },
      { name: "CI/CD", icon: GitBranch },
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 tech-grid opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto p-6 pt-12 mb-8">
            <div className="code-block">
              <span className="text-green-500">$</span> <span className="text-blue-500">cat /proc/skills</span>
              <br />
              <span className="text-muted-foreground">
                Loaded {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} technologies
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono">
            {"<"}
            <span className="text-primary">TECH_STACK</span>
            {" />"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            // Comprehensive toolkit for modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="terminal-window pt-6 border-2 border-dashed hover:border-solid transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-center font-mono text-lg">
                  [{String(categoryIndex + 1).padStart(2, "0")}] {category.title.toUpperCase()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-dashed hover:border-solid group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center border border-dashed rounded group-hover:border-solid group-hover:bg-primary/10 transition-all">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="font-mono text-sm font-medium">{skill.name}</span>
                          <div className="text-xs text-muted-foreground font-mono">
                            skill_{String(skillIndex + 1).padStart(2, "0")}.exe
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
