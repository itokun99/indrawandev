import { skills } from "../data"
import "./Skills.css"

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 border-t border-green-500/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-green-400">$ skills</h2>
        <div className="h-1 w-12 bg-amber-400 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.categories.map((category) => (
            <div key={category.title} className="border border-green-500/30 p-6 bg-green-500/5">
              <h3 className="text-lg font-bold text-amber-400 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-gray-300 flex items-start">
                    <span className="text-green-400 mr-2">{">"}</span>
                    <span>{skill}</span>
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
