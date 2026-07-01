"use client"

import { useState, useTransition } from "react"
import { submitContactForm } from "../app/actions"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<{
    success: boolean
    message: string
    errors?: Record<string, string[]>
  } | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    startTransition(async () => {
      const result = await submitContactForm(formData)
      setState(result)
      if (result.success) {
        ;(event.target as HTMLFormElement).reset()
      }
    })
  }

  return (
    <div className="w-full max-w-xl mx-auto p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/40">
      <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>
      <p className="text-gray-400 text-sm mb-6">
        Have a question, project proposal, or just want to connect? Drop me a line!
      </p>

      {state && state.success && (
        <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-start gap-3 animate-fade-in">
          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
          <p className="text-sm">{state.message}</p>
        </div>
      )}

      {state && !state.success && (
        <div className="mb-6 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 flex items-start gap-3 animate-fade-in">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <p className="text-sm">{state.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
            />
            {state?.errors?.name && (
              <p className="text-xs text-rose-400 mt-1">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
            />
            {state?.errors?.email && (
              <p className="text-xs text-rose-400 mt-1">{state.errors.email[0]}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="Collaboration, job opportunity, etc."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
          />
          {state?.errors?.subject && (
            <p className="text-xs text-rose-400 mt-1">{state.errors.subject[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Hi James, I'd love to talk about..."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm resize-none"
          />
          {state?.errors?.message && (
            <p className="text-xs text-rose-400 mt-1">{state.errors.message[0]}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
        >
          {isPending ? (
            <>
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
