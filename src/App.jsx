import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#" className="text-sm font-semibold tracking-wide text-white/90">dev.ai</a>
          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black/60 py-6 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} dev.ai — Built with care.
      </footer>
    </div>
  )
}

export default App
