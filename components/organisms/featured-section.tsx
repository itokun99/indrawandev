"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Users, Zap, Database, Smartphone } from "lucide-react"
import Link from "next/link"

const allFeaturedInsights = [
  {
    id: 1,
    category: "Architecture",
    title: "Building Scalable React Native Apps",
    description:
      "Best practices for architecting cross-platform mobile applications that can scale with your business needs.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Smartphone,
    link: "#",
  },
  {
    id: 2,
    category: "Performance",
    title: "Optimizing Enterprise Applications",
    description: "Techniques I used to improve performance by 40% in banking and e-commerce applications.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Zap,
    link: "#",
  },
  {
    id: 3,
    category: "Leadership",
    title: "Leading Technical Teams",
    description: "Insights on mentoring developers and establishing coding standards that increase team efficiency.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Users,
    link: "#",
  },
  {
    id: 4,
    category: "Microservices",
    title: "Designing Microservice Architecture",
    description: "How I architected banking microservices for BRI that handle millions of transactions daily.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Database,
    link: "#",
  },
  {
    id: 5,
    category: "DevOps",
    title: "CI/CD for Mobile Applications",
    description: "Implementing automated deployment pipelines for React Native apps across multiple environments.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Cpu,
    link: "#",
  },
  {
    id: 6,
    category: "Code Quality",
    title: "Establishing Development Standards",
    description: "Creating coding standards and review processes that improved team productivity by 30%.",
    image: "/placeholder.svg?height=200&width=300",
    icon: Code,
    link: "#",
  },
]

export function FeaturedSection() {
  const [visibleCount, setVisibleCount] = useState(3)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = async () => {
    setIsLoading(true)
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setVisibleCount((prev) => Math.min(prev + 3, allFeaturedInsights.length))
    setIsLoading(false)
  }

  const visibleInsights = allFeaturedInsights.slice(0, visibleCount)
  const hasMore = visibleCount < allFeaturedInsights.length

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30 relative">
      {/* Grid background */}
      <div className="absolute inset-0 tech-grid opacity-50"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="terminal-window max-w-2xl mx-auto p-4 sm:p-6 pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8">
            <div className="code-block text-xs sm:text-sm">
              <span className="text-green-500">$</span> <span className="text-blue-500">ls -la /insights</span>
              <br />
              <span className="text-muted-foreground">total {allFeaturedInsights.length} featured_articles</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-mono">
            {"<"}
            <span className="text-primary">FEATURED_INSIGHTS</span>
            {" />"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono text-sm sm:text-base">
            // Sharing knowledge from building enterprise applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {visibleInsights.map((insight, index) => {
            const IconComponent = insight.icon
            return (
              <Card
                key={insight.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-dashed hover:border-solid"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary" />
                  </div>
                  <div className="absolute top-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-mono">
                    [{String(index + 1).padStart(2, "0")}]
                  </div>
                </div>
                <CardHeader className="pb-3 sm:pb-4 p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <Badge variant="secondary" className="font-mono border border-dashed text-xs">
                      {insight.category.toUpperCase()}
                    </Badge>
                    <div className="text-xs text-muted-foreground font-mono">
                      [{String(index + 1).padStart(2, "0")}]
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors font-mono text-base sm:text-lg leading-tight">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <CardDescription className="mb-3 sm:mb-4 font-mono text-xs sm:text-sm leading-relaxed">
                    {insight.description}
                  </CardDescription>
                  <Link
                    href={insight.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-mono text-xs sm:text-sm border-b border-dashed border-primary hover:border-solid"
                  >
                    READ_MORE()
                    <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {hasMore && (
          <div className="text-center mt-8 sm:mt-12">
            <Button
              onClick={loadMore}
              disabled={isLoading}
              className="font-mono border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm px-4 sm:px-6"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin mr-2 h-3 w-3 sm:h-4 sm:w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  LOADING...
                </>
              ) : (
                `LOAD_MORE() // ${allFeaturedInsights.length - visibleCount} remaining`
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
