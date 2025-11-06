import React from 'react'
import Spline from '@splinetool/react-spline'
import { Brain, Rocket } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignettes that do not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-12 sm:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Brain className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-violet-200">Developer • AI • 3D</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Building intelligent, delightful
          <span className="block bg-gradient-to-r from-violet-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">developer experiences</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          I craft AI-first interfaces, scalable APIs, and immersive visuals. Let’s turn ideas into elegant, production-ready products.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Rocket className="h-4 w-4" /> View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
