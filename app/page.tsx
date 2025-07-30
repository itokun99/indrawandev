import { Header } from "@/components/organisms/header"
import { HeroSection } from "@/components/organisms/hero-section"
import { FeaturedSection } from "@/components/organisms/featured-section"
import { ProjectsSection } from "@/components/organisms/projects-section"
import { SkillsSection } from "@/components/organisms/skills-section"
import { YouTubeSection } from "@/components/organisms/youtube-section"
import { ExperienceSection } from "@/components/organisms/experience-section"
import { TestimonialsSection } from "@/components/organisms/testimonials-section"
import { ContactSection } from "@/components/organisms/contact-section"
import { Footer } from "@/components/organisms/footer"
import { BackToTop } from "@/components/atoms/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <ProjectsSection />
        <SkillsSection />
        <YouTubeSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
