"use client"

import Link from "next/link"
import { Github, Linkedin, FileText, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.08] bg-black/75 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
            <span className="font-bold text-white text-base tracking-wider">JH</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm tracking-tight leading-none group-hover:text-blue-400 transition-colors">
              James Hamilton
            </span>
            <span className="text-[10px] text-zinc-500 font-medium tracking-wider mt-0.5 uppercase">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/JamesCHamilton"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/james-hamilton-499514293/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/James_Hamilton_Resume.pdf"
            target="_blank"
            className="relative inline-flex items-center justify-center font-medium transition-all duration-300 border border-blue-500/30 bg-black/50 text-blue-400 hover:bg-blue-900/10 hover:text-blue-300 h-10 rounded-lg px-4 text-sm gap-2"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg md:hidden bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-white/[0.08] bg-black/95 backdrop-blur-2xl py-6 px-6 space-y-6 flex flex-col animate-slide-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-px bg-white/[0.08]" />

          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <a
                href="https://github.com/JamesCHamilton"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/james-hamilton-499514293/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            {/* Resume Button */}
            <a
              href="/James_Hamilton_Resume.pdf"
              target="_blank"
              className="relative inline-flex items-center justify-center font-medium transition-all duration-300 border border-blue-500/30 bg-black/50 text-blue-400 hover:bg-blue-900/10 hover:text-blue-300 h-10 rounded-lg px-4 text-sm gap-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
