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
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-mobile-h2 mb-3 sm:mb-4 gradient-text">Featured Insights</h2>
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge from building enterprise applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {visibleInsights.map((insight) => {
            const IconComponent = insight.icon
            return (
              <Card key={insight.id} className="modern-card overflow-hidden">
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                      {insight.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-base sm:text-lg leading-tight">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-mobile-small leading-relaxed">
                    {insight.description}
                  </CardDescription>
                  <Link
                    href={insight.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-mobile-small"
                  >
                    Read More
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
                `Load More (${allFeaturedInsights.length - visibleCount} remaining)`
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
