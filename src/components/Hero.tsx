import { personalInfo } from "../data"
import "./Hero.css"

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block text-green-500 text-sm font-mono mb-4">$ whoami</div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow">
          {personalInfo.name}
          <span className="cursor-blink">_</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-amber-400 mb-8 glow-amber">{personalInfo.title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">{personalInfo.shortBio}</p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500/10 transition font-mono text-sm"
          >
            {"> view work"}
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-3 border border-amber-500 text-amber-400 hover:bg-amber-500/10 transition font-mono text-sm"
          >
            {"> contact me"}
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Years", value: personalInfo.stats.yearsExperience },
            { label: "Projects", value: personalInfo.stats.projectsCompleted },
            { label: "Companies", value: personalInfo.stats.companiesWorked },
            { label: "Users Served", value: personalInfo.stats.usersServed },
          ].map((stat) => (
            <div key={stat.label} className="border border-green-500/30 p-4 bg-green-500/5">
              <div className="text-2xl font-bold text-green-400">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
