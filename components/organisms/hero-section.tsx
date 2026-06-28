"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, Mail } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"

export function HeroSection() {
  const personalInfo = getPersonalInfo()

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    // Open the resume link in a new tab since it's a Google Drive link
    window.open(personalInfo.resume, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-16 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="container text-center">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* Status badge - terminal style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">{personalInfo.status}</span>
          </div>

          {/* Main heading - premium typography */}
          <div className="space-y-4">
            <h1 className="leading-tight text-balance">
              I architect <span className="gradient-text font-bold">AI-native</span> enterprise systems
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">{personalInfo.title}</p>
          </div>

          {/* Description - elegant and spacious */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            {personalInfo.shortBio}
          </p>

          {/* Stats - minimal grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto py-6">
            {[
              { value: personalInfo.stats.yearsExperience, label: "Years Experience" },
              { value: personalInfo.stats.projectsCompleted, label: "Projects" },
              { value: personalInfo.stats.companiesWorked, label: "Companies" },
              { value: personalInfo.stats.usersServed, label: "Users Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2 border-l border-border/30 pl-4 last:border-l-0">
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons - premium styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-secondary text-background font-semibold px-8 h-12 rounded-lg transition-all duration-200"
              onClick={() => scrollToSection("#experiments")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-border bg-card hover:bg-muted/50 text-foreground font-semibold px-8 h-12 rounded-lg transition-all duration-200"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <button
              onClick={() => scrollToSection("#experiments")}
              className="text-muted-foreground hover:text-accent transition-colors duration-200 inline-flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-widest font-mono">Scroll to explore</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
