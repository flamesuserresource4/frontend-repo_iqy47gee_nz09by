import React from 'react'
import { Code2, Cpu } from 'lucide-react'

const skills = [
  { name: 'AI/ML', icon: Cpu },
  { name: 'TypeScript', icon: Code2 },
  { name: 'React', icon: Code2 },
  { name: 'FastAPI', icon: Code2 },
]

const About = () => {
  return (
    <section id="about" className="relative w-full bg-zinc-950 py-20 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">About</h2>
        <p className="mt-3 max-w-3xl text-zinc-400">
          I’m a developer focused on AI-native products. I blend model-first thinking with solid frontend and backend engineering to ship fast and iterate even faster.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="rounded-lg border border-white/5 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
            >
              <Icon className="h-5 w-5 text-violet-300" />
              <p className="mt-2 text-sm text-zinc-300">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
