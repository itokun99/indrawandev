"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid pt-20">
      {/* ASCII Art Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <pre className="ascii-art text-primary absolute top-24 left-10">
          {`    ╔══════════════════════════════════════╗
    ║  > INITIALIZING PORTFOLIO_V2.0.1     ║
    ║  > LOADING DEVELOPER_PROFILE...      ║
    ║  > STATUS: READY_FOR_COLLABORATION   ║
    ╚══════════════════════════════════════╝`}
        </pre>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Terminal-style header */}
        <div className="terminal-window max-w-4xl mx-auto mb-8 p-8 pt-12">
          <div className="code-block mb-6">
            <span className="text-green-500">$</span> <span className="text-blue-500">whoami</span>
            <br />
            <span className="text-muted-foreground">
              indrawan-lisanto@portfolio:~$ Software Engineer & Lifelong Learner
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 glitch-text" data-text="< DEVELOPER />">
            {"< DEVELOPER />"}
          </h1>

          <div className="code-block mb-8">
            <span className="text-purple-500">const</span> <span className="text-blue-500">developer</span> = {"{"}
            <br />
            <span className="ml-4 text-orange-500">name:</span>{" "}
            <span className="text-green-500">"Indrawan Lisanto"</span>,
            <br />
            <span className="ml-4 text-orange-500">experience:</span>{" "}
            <span className="text-yellow-500">"6+ years"</span>,
            <br />
            <span className="ml-4 text-orange-500">specialization:</span>{" "}
            <span className="text-green-500">"React Native & Full-Stack"</span>,
            <br />
            <span className="ml-4 text-orange-500">mission:</span>{" "}
            <span className="text-green-500">"Building scalable systems"</span>
            <br />
            {"};"}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto font-mono border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              [VIEW_PROJECTS]
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto font-mono border-2 border-dashed border-muted-foreground text-muted-foreground hover:border-solid hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              {"{ CONTACT_ME }"}
            </Button>
          </div>
        </div>

        {/* Animated cursor */}
        <div className="flex justify-center items-center mt-8">
          <span className="text-primary animate-pulse text-2xl font-mono">_</span>
        </div>
      </div>
    </section>
  )
}
