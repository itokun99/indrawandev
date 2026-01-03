import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import "./App.css"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}
