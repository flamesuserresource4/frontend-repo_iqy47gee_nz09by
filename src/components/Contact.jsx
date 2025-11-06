import React, { useState } from 'react'
import { Mail } from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      // In a real app, post to your backend/email service
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I’ll get back to you soon.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="w-full bg-zinc-950 py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">Have an idea or project in mind? I’m available for collaborations and freelance work.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:max-w-xl">
          <input
            required
            type="text"
            placeholder="Your name"
            className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-violet-400"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-violet-400"
          />
          <textarea
            required
            rows="4"
            placeholder="Tell me about your project..."
            className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-violet-400"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
          >
            <Mail className="h-4 w-4" /> Send Message
          </button>
          {status && <p className="text-sm text-zinc-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
