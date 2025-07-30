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
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-muted/20 pt-16">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {/* Status badge */}
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-mobile-small">
            {personalInfo.status}
          </Badge>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-mobile-h1 leading-tight">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-mobile-h3 text-muted-foreground font-normal">{personalInfo.title}</p>
          </div>

          {/* Description */}
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {personalInfo.shortBio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                {personalInfo.stats.yearsExperience}
              </div>
              <div className="text-mobile-small text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                {personalInfo.stats.projectsCompleted}
              </div>
              <div className="text-mobile-small text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                {personalInfo.stats.companiesWorked}
              </div>
              <div className="text-mobile-small text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1">{personalInfo.stats.usersServed}</div>
              <div className="text-mobile-small text-muted-foreground">Users</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-mobile-body"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-mobile-body bg-transparent"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8">
            <button
              onClick={() => scrollToSection("#skills")}
              className="animate-bounce text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
