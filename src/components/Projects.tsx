import { projects } from "../data"
import "./Projects.css"

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 border-t border-green-500/30 bg-green-500/2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-green-400">$ projects</h2>
        <div className="h-1 w-12 bg-amber-400 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-amber-500/50 p-6 bg-amber-500/5 hover:bg-amber-500/10 transition"
            >
              <h3 className="text-lg font-bold text-amber-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 border border-amber-500/50 text-amber-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-bold text-green-400 mb-4">{"> other projects"}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="border border-green-500/30 p-4 bg-green-500/5 hover:bg-green-500/10 transition"
              >
                <h4 className="font-bold text-green-300 mb-2">{project.title}</h4>
                <p className="text-gray-400 text-xs mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-gray-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
