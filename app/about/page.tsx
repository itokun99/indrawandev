import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "The evolution from software engineer to AI-native enterprise architect",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            The Evolution to AI-Native Thinking
          </h1>
          <p className="text-lg text-muted-foreground">
            From building applications to architecting intelligence into enterprise systems
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Chapter 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <h2 className="text-2xl font-bold">The Foundation Years</h2>
            </div>
            <Card className="card-premium p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I started like most developers—obsessed with building applications. React Native, Node.js, the full stack. Eight years 
                across ten companies, fifty projects shipped. I learned how to architect scalable systems, manage technical teams, and 
                deliver under pressure.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                But there was always something that felt incomplete. We were building better interfaces, faster backends, more resilient 
                infrastructure. Yet the core intelligence remained static—hardcoded logic, batch processes, reactive systems.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Full-Stack</Badge>
                <Badge variant="outline">Architecture</Badge>
                <Badge variant="outline">Leadership</Badge>
              </div>
            </Card>
          </section>

          {/* Chapter 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <h2 className="text-2xl font-bold">The AI Inflection</h2>
            </div>
            <Card className="card-premium p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Then came 2023. Not because of ChatGPT—I'd been following LLMs—but because the economics fundamentally shifted. 
                AI wasn&apos;t just a research achievement anymore. It was economically viable to embed intelligence everywhere.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I started asking different questions: What if your application could reason about its own state? What if agents could 
                collaborate across your entire tech stack? What if the boundary between code and AI wasn&apos;t this artificial wall?
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The realization hit hard: I wasn&apos;t obsolete. I was finally equipped to build what we should have been building all along.
              </p>
            </Card>
          </section>

          {/* Chapter 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <h2 className="text-2xl font-bold">Rethinking Enterprise Architecture</h2>
            </div>
            <Card className="card-premium p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Enterprise systems are defined by their constraints: distributed teams, legacy integration points, compliance requirements, 
                massive data volumes. Traditional architecture patterns don&apos;t optimize for intelligence.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I started designing from first principles. Not "how do we fit AI into our stack?" but "what does enterprise architecture 
                look like when intelligence is a first-class citizen?"
              </p>
              <p className="text-foreground/80 leading-relaxed">
                That led to three core ideas:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Agentic Workflows</strong> — Multi-agent systems that orchestrate work across your entire 
                    tech stack, respecting boundaries and integrations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Open Intelligence Standards</strong> — Building on MCP and open protocols so your systems 
                    aren&apos;t locked into any single AI provider.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Terminal-First Thinking</strong> — The best developer experience happens in tools 
                    closest to the actual work, not in fancy UIs disconnected from reality.
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Chapter 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">Building in Public</h2>
            </div>
            <Card className="p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I started sharing these ideas on LinkedIn—not polished thoughts, but genuine explorations. Experiments in progress. 
                What I discovered was that I wasn&apos;t alone in thinking about this. Hundreds of architects were grappling with the same 
                questions.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Out of those conversations came:
              </p>
              <ul className="space-y-2 pl-4 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>OpenCode</strong> — A framework for open intelligence standards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>Agentic Framework</strong> — Production-ready multi-agent orchestration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>MCP Ecosystem</strong> — Enterprise integrations for LLMs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>OpenCode Community</strong> — A growing circle of architects thinking about AI-native systems</span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Chapter 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">Where We Are Now</h2>
            </div>
            <Card className="p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I&apos;m at the intersection of three worlds:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">●</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Architect</strong> — Designing AI-native systems for enterprise clients, thinking deeply 
                    about how intelligence should be embedded into complex organizations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">●</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Builder</strong> — Creating open-source frameworks that make it easier for others to build 
                    these systems. OpenCode, Agentic Framework, and the MCP ecosystem.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">●</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Advocate</strong> — Speaking and writing about why this shift matters, why open standards 
                    matter, and how developers can stay relevant in the AI era.
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Philosophy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">A Simple Philosophy</h2>
            </div>
            <Card className="p-6 space-y-4 border-primary/50 bg-primary/5">
              <p className="text-foreground/90 leading-relaxed italic">
                "Intelligence should be embedded into enterprise systems through open standards, not hidden behind proprietary APIs. 
                AI-native architecture means agents collaborate across your entire tech stack, respecting your infrastructure and your autonomy. 
                The best tools are the ones developers actually use—and that usually means terminal-first, not browser-first."
              </p>
            </Card>
          </section>

          {/* CTA */}
          <section className="space-y-4">
            <Card className="p-6 space-y-4 border-foreground/20">
              <h3 className="text-lg font-semibold">Want to discuss AI-native architecture?</h3>
              <p className="text-muted-foreground">
                I&apos;m actively exploring these ideas with architects, founders, and developers. Let&apos;s think about this together.
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <a href="mailto:me@indrawan.dev">
                    Start a Conversation
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/indrawandev" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
