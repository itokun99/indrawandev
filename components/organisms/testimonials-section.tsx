"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Indrawan's expertise in React Native development was instrumental in delivering our mobile application on time. His attention to detail and ability to optimize performance resulted in a 40% improvement in our app's speed.",
    author: "Sarah Johnson",
    title: "Product Manager at PermataBank",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    text: "Working with Indrawan was a game-changer for our development team. His leadership in establishing coding standards and mentoring junior developers increased our overall productivity by 30%.",
    author: "Michael Chen",
    title: "Engineering Director at Telkomsel",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    text: "Indrawan's full-stack capabilities and architectural thinking helped us modernize our legacy systems. His microservices approach improved our system reliability and made maintenance much easier.",
    author: "Amanda Rodriguez",
    title: "CTO at Sharing Vision Indonesia",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What Others Say</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've worked with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <Quote className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary/20 mb-4 sm:mb-6" />

              <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-muted-foreground">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-dashed">
                <img
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={currentTestimonial.author}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-dashed"
                />
                <div>
                  <div className="font-semibold text-foreground font-mono text-sm sm:text-base">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-mono">{currentTestimonial.title}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
