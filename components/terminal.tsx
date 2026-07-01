"use client"

import { useState, useRef, useEffect } from "react"
import { Terminal as TerminalIcon, CornerDownLeft, Play } from "lucide-react"

interface TerminalLine {
  text: string
  type: "input" | "output" | "system" | "error"
}

export function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "james-hamilton-shell [Version 1.0.0]", type: "system" },
    { text: "(c) James Hamilton. All rights reserved.", type: "system" },
    { text: "Type 'help' or click the quick commands below to explore.", type: "system" },
  ])
  const [input, setInput] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = {
    help: () => [
      "Available commands:",
      "  about       - Who I am & Education",
      "  skills      - Full technical stack & expertise",
      "  experience  - Professional software engineering experience",
      "  projects    - Featured projects and architectures",
      "  contact     - Contact information and social links",
      "  clear       - Clear the terminal screen",
    ],
    about: () => [
      "👤 James Hamilton",
      "📍 Bronx, NY | 📧 jameschamilton070605@gmail.com",
      "🎓 Pace University, Seidenberg School of CSIS",
      "   • Bachelor of Science in Computer Science (GPA: 3.68)",
      "   • Graduation: December 2026",
      "🎯 Objective:",
      "   • Software Engineer specializing in Clinical AI, Full-Stack,",
      "     and LLM Code Automation under zero-fail constraints.",
    ],
    skills: () => [
      "🛠️ TECHNICAL SKILLS MATRIX",
      "💻 Languages:  Python, TypeScript, Golang, JavaScript, Java, HTML, CSS, SQL",
      "⚡ Frameworks: React.js, Next.js, Express.js, Node.js, Deno, .NET",
      "☁️ DevOps:     Docker, AWS (EC2, S3, Route 53), NGINX, Azure, CI/CD",
      "🗄️ Databases:  MongoDB, PostgreSQL, Firebase, Redis, Supabase",
    ],
    experience: () => [
      "💼 WORK EXPERIENCE",
      "1. Software Engineer Intern | NY State EMS & Hospital Network (May 2025 - Present)",
      "   • Architecting live-triage EMS app routing patient data across NY hospitals.",
      "   • Developing native Android (Java) client and AI backend logic under zero-fail constraints.",
      "2. Software Engineer (Founding Team) | Arcampass (Feb 2025 - Jan 2026)",
      "   • Deployed production platform using Next.js/Express/MongoDB.",
      "   • Reduced database latency from 320ms to 140ms; EC2/NGINX/Redis cache setup.",
      "3. AI Research Assistant | Pace University (Apr 2025 - Sep 2025)",
      "   • Developed Python benchmarking framework evaluating 5 LLMs on 50 SE tasks.",
      "4. Software Engineer Intern | BZ Marketing (May 2024 - Sep 2024)",
      "   • Led React landing page redesign (SEO 71 -> 88) & Django/OpenAI keyword generator.",
    ],
    projects: () => [
      "🚀 FEATURED PROJECTS",
      "1. Master Parcel Data Engine (Next.js | Node.js | Go | PostgreSQL | AWS | Redis | MongoDB)",
      "   • Deployed at: https://ny-data.vercel.app",
      "   • Real estate DaaS platform standardizing MongoDB listings to NYC BBL standard.",
      "   • Go & Python (Pandas) ETL pipeline, Stripe monetization, Supabase lead capture.",
      "2. Parkidsy (Next.js | Bun | Supabase | TypeScript)",
      "   • Deployed at: https://parkidsy.voicesights.xyz",
      "   • Full-stack mobile-optimized web app wrapped inside native iOS/Android WebViews.",
      "   • Low-latency backend API routes via Bun runtime and secure Supabase database.",
      "3. Commuter App Challenge (MTA & NJ Transit Leaders Finalist - Nov 2024)",
      "   • Designed Kotlin/Swift & Golang offline-cached app with Azure database.",
    ],
    contact: () => [
      "📞 CONTACT CHANNELS",
      "   • Email:    jameschamilton070605@gmail.com",
      "   • Phone:    (646)-500-4753",
      "   • GitHub:   https://github.com/JamesCHamilton",
      "   • LinkedIn: https://www.linkedin.com/in/james-hamilton-499514293/",
    ],
  }

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase()
    if (!trimmed) return

    const newHistory = [...history, { text: `guest@james-hamilton:~$ ${cmdStr}`, type: "input" as const }]

    if (trimmed === "clear") {
      setHistory([])
      return
    }

    if (trimmed in commands) {
      const output = commands[trimmed as keyof typeof commands]()
      setHistory([
        ...newHistory,
        ...output.map((line) => ({ text: line, type: "output" as const })),
      ])
    } else {
      setHistory([
        ...newHistory,
        { text: `bash: command not found: ${trimmed}. Type 'help' for options.`, type: "error" as const },
      ])
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [history])

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-white/[0.08] bg-zinc-950/90 shadow-2xl overflow-hidden font-mono text-sm transition-all duration-300 hover:border-blue-500/30">
      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/[0.05] select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
          <TerminalIcon className="h-3.5 w-3.5" />
          <span>james@portfolio: ~</span>
        </div>
        <div className="w-14" /> {/* Spacer */}
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        onClick={focusInput}
        className="h-[340px] overflow-y-auto p-5 space-y-2 text-zinc-300 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent cursor-text"
      >
        {history.map((line, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap leading-relaxed ${
              line.type === "input"
                ? "text-blue-400 font-semibold"
                : line.type === "system"
                ? "text-zinc-500"
                : line.type === "error"
                ? "text-rose-400"
                : "text-emerald-400"
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Terminal Input Row */}
      <form onSubmit={onSubmit} className="flex items-center px-5 py-3 bg-zinc-950 border-t border-white/[0.05]">
        <span className="text-blue-400 mr-2 shrink-0 font-semibold">guest@james-hamilton:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-emerald-400 font-mono text-sm p-0 min-w-0 focus:ring-0"
          placeholder="type a command..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button type="submit" className="text-zinc-500 hover:text-white p-1 transition-colors">
          <CornerDownLeft className="h-4 w-4" />
        </button>
      </form>

      {/* Quick Commands Grid */}
      <div className="px-5 py-3 bg-zinc-900/40 border-t border-white/[0.05] flex flex-wrap gap-2 items-center">
        <span className="text-xs text-zinc-500 font-medium mr-1 uppercase tracking-wider">Quick Runs:</span>
        {Object.keys(commands).map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 text-xs rounded bg-zinc-800 hover:bg-blue-600/20 hover:text-blue-300 border border-zinc-700 hover:border-blue-500/40 text-zinc-400 transition-all flex items-center gap-1 cursor-pointer"
          >
            <Play className="h-2.5 w-2.5 fill-current" />
            {cmd}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleCommand("clear")}
          className="px-2.5 py-1 text-xs rounded bg-zinc-850 hover:bg-rose-950/30 hover:text-rose-400 border border-zinc-700/50 hover:border-rose-500/30 text-zinc-500 transition-all cursor-pointer ml-auto"
        >
          clear
        </button>
      </div>
    </div>
  )
}
