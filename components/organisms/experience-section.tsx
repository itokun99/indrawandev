"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const allExperiences = [
  {
    id: 1,
    company: "Aleph-Labs",
    role: "Middle React Native Developer",
    period: "2019 - Present",
    location: "Jakarta, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Full-time",
    achievements: [
      "Led development for enterprise clients including Astra Honda, PermataBank, and Telkomsel",
      "Improved application performance by 30-40% through optimization techniques",
      "Established coding standards that increased team development efficiency by 30%",
      "Managed cross-platform mobile applications for 26+ dealer locations",
    ],
  },
  {
    id: 2,
    company: "PT Karya Inovasi Digital",
    role: "Senior Software Engineer (Freelance)",
    period: "2024 - 2025",
    location: "Tangerang, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Freelance",
    achievements: [
      "Architected mobile & desktop applications for educational systems",
      "Improved development process efficiency by 50% through better team communication",
      "Optimized React Native codebase resulting in 60% performance increase",
      "Mentored junior developers and established development standards",
    ],
  },
  {
    id: 3,
    company: "PT Cahaya Sanivokasi",
    role: "Full-Stack Software Engineer (Freelance)",
    period: "2024 - 2025",
    location: "Tangerang, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Freelance",
    achievements: [
      "Led complete redesign of HRIS frontend with modern React stack",
      "Optimized user navigation flows resulting in 40% UX improvement",
      "Established development standards and architected microservices",
      "Mentored engineers to foster culture of ownership and quality",
    ],
  },
  {
    id: 4,
    company: "PT Sharing Vision Indonesia",
    role: "Full-Stack Engineer (Remote)",
    period: "2021 - 2023",
    location: "Jakarta, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Remote",
    achievements: [
      "Developed microservices for Bank Rakyat Indonesia (BRI) BRIAPI division",
      "Implemented core banking features including payment systems and authentication",
      "Maintained API Gateway using Apigee for all BRIAPI products",
      "Conducted comprehensive end-to-end testing for banking applications",
    ],
  },
  {
    id: 5,
    company: "Kabayan Coding",
    role: "Co-Founder | CTO",
    period: "2019 - 2022",
    location: "Tangerang, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Founder",
    achievements: [
      "Co-founded developer community focused on freelance projects and mentorship",
      "Designed e-commerce application architecture from ground up",
      "Led cross-functional teams and improved development efficiency by 30%",
      "Mentored aspiring programmers and provided technical leadership",
    ],
  },
  {
    id: 6,
    company: "PT Hudoro Solusi Digital",
    role: "Senior Front-End Engineer (Freelance)",
    period: "2024",
    location: "Tangerang, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Freelance",
    achievements: [
      "Led technological transformation for TUV Nord Indonesia",
      "Architected unified front-end architecture with 60% development acceleration",
      "Built centralized design system improving UX by 30%",
      "Reduced server load by 35% through optimized API handling",
    ],
  },
  {
    id: 7,
    company: "The Entrepreneurs Society",
    role: "Web Developer (Freelance)",
    period: "2021 - 2023",
    location: "Jakarta, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Freelance",
    achievements: [
      "Led complete front-end overhaul of ELITES.ID e-course platform",
      "Boosted performance and UX by 25% with modern React.js technologies",
      "Established coding standards increasing team efficiency by 20%",
      "Implemented compression methods reducing server load by 15%",
    ],
  },
  {
    id: 8,
    company: "PT Mitra Digital Sukses (Youtap)",
    role: "Front-End Developer (Freelance)",
    period: "2021 - 2022",
    location: "Jakarta, Indonesia",
    logo: "/placeholder.svg?height=60&width=60",
    type: "Freelance",
    achievements: [
      "Developed specialized web dashboard for internal finance team",
      "Implemented GraphQL increasing data transfer efficiency by 10%",
      "Optimized React components with Atomic Design approach",
      "Boosted finance team operational efficiency by 20%",
    ],
  },
]

export function ExperienceSection() {
  const [visibleCount, setVisibleCount] = useState(4)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setVisibleCount((prev) => Math.min(prev + 4, allExperiences.length))
    setIsLoading(false)
  }

  const visibleExperiences = allExperiences.slice(0, visibleCount)
  const hasMore = visibleCount < allExperiences.length

  return (
    <section id="experience" className="py-20 bg-muted/30 relative scroll-offset">
      <div className="absolute inset-0 tech-grid opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto p-6 pt-12 mb-8">
            <div className="code-block">
              <span className="text-green-500">$</span>{" "}
              <span className="text-blue-500">history | grep "employment"</span>
              <br />
              <span className="text-muted-foreground">{allExperiences.length} career milestones found</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono">
            {"<"}
            <span className="text-primary">CAREER_JOURNEY</span>
            {" />"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            // 6+ years building enterprise applications and leading teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5 opacity-50"></div>

          <div className="space-y-12">
            {visibleExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:transform md:-translate-x-2 z-10 border-2 border-background"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="terminal-window pt-6 border-2 border-dashed hover:border-solid transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/50">
                            <Building className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-mono mb-1">{exp.role}</CardTitle>
                            <CardDescription className="text-primary font-medium font-mono">
                              {exp.company}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="font-mono border-dashed">
                          {exp.type.toUpperCase()}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="font-mono leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMore}
              disabled={isLoading}
              className="font-mono border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  LOADING_HISTORY...
                </>
              ) : (
                `LOAD_MORE() // ${allExperiences.length - visibleCount} positions remaining`
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
