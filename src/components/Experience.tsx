import { experiences } from "../data"
import "./Experience.css"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 border-t border-green-500/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-green-400">$ experience</h2>
        <div className="h-1 w-12 bg-amber-400 mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-amber-500 pl-6 py-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-amber-400">{exp.title}</h3>
                  <p className="text-green-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-400 md:text-right">{exp.period}</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-xs text-gray-400 flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">{"+"}</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
