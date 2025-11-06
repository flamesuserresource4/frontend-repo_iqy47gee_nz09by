import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Conversational UI Kit',
    desc: 'A plug-and-play chat interface optimized for agentic workflows and tool usage.',
    tags: ['React', 'Typescript', 'LLM'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Vector Search',
    desc: 'Embeddings pipeline with streaming ingestion and blazing-fast similarity search.',
    tags: ['Python', 'FastAPI', 'Qdrant'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Generative 3D Playground',
    desc: 'Procedural geometry experiments powered by shaders and diffusion models.',
    tags: ['WebGL', 'Three.js', 'AI'],
    link: '#',
    repo: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">Featured Projects</h2>
          <a href="#" className="text-sm text-zinc-400 hover:text-white">View all</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/5 bg-white/5 p-5 transition hover:bg-white/10">
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-zinc-300">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
