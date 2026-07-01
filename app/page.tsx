import Image from "next/image"
import { Header } from "../components/header"
import { Terminal } from "../components/terminal"
import { ContactForm } from "../components/contact-form"
import {
  Code,
  Server,
  Database,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  GraduationCap,
  Award,
  Sparkles,
  ChevronRight,
  FileText
} from "lucide-react"

export const metadata = {
  title: "James Hamilton | Software Engineer - Clinical AI & Full-Stack",
  description: "Portfolio of James Hamilton, a Computer Science student at Pace University specializing in Clinical AI, Full-Stack Development, and LLM Code Automation.",
}

export default function Home() {
  const coreSkills = [
    { name: "Python", category: "Language", color: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30" },
    { name: "TypeScript", category: "Language", color: "from-blue-600/20 to-indigo-600/20 text-blue-300 border-blue-500/30" },
    { name: "Golang", category: "Language", color: "from-cyan-500/20 to-teal-500/20 text-cyan-300 border-cyan-500/30" },
    {name: "Java", category: "Language", color: "from-red-500/20 to-orange-500/20 text-red-300 border-red-500/30"},
    { name: "Next.js", category: "Framework", color: "from-zinc-800 to-zinc-900 text-white border-zinc-700" },
    { name: "React.js", category: "Framework", color: "from-sky-500/20 to-blue-500/20 text-sky-300 border-sky-500/30" },
    { name: "AWS", category: "DevOps", color: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30" },
    { name: "PostgreSQL", category: "Database", color: "from-indigo-500/20 to-blue-500/20 text-indigo-300 border-indigo-500/30" },
    { name: "Supabase", category: "Database", color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30" },
    { name: "Redis", category: "Database", color: "from-rose-500/20 to-red-500/20 text-rose-300 border-rose-500/30" },

  ]

  const skillGroups = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5 text-blue-400" />,
      skills: ["Python", "TypeScript", "Golang", "JavaScript", "Java", "HTML", "CSS", "SQL"],
      borderColor: "hover:border-blue-500/30",
      glowColor: "group-hover:bg-blue-500/10"
    },
    {
      title: "Frameworks",
      icon: <Cpu className="h-5 w-5 text-purple-400" />,
      skills: ["React.js", "Next.js", "Express.js", "Node.js", "Deno", ".NET"],
      borderColor: "hover:border-purple-500/30",
      glowColor: "group-hover:bg-purple-500/10"
    },
    {
      title: "DevOps & Cloud",
      icon: <Server className="h-5 w-5 text-amber-400" />,
      skills: ["Docker", "AWS EC2", "AWS S3", "AWS Route 53", "NGINX", "Azure", "CI/CD"],
      borderColor: "hover:border-amber-500/30",
      glowColor: "group-hover:bg-amber-500/10"
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-emerald-400" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Supabase"],
      borderColor: "hover:border-emerald-500/30",
      glowColor: "group-hover:bg-emerald-500/10"
    }
  ]

  const experience = [
    {
      role: "Software Engineer Intern (Clinical AI & Full-Stack)",
      company: "New York State EMS & Hospital Network (via Pace University)",
      location: "New York, NY",
      period: "May 2025 - Present",
      bullets: [
        "Architecting a live-triage EMS application to securely route patient data across the NY hospital network.",
        "Developing a decoupled architecture, building a native Android (Java) client to consume AI backend services.",
        "Designing backend AI logic to optimize emergency resource allocation under zero-fail constraints.",
        "Engineering real-time, data-compliant pipelines to synchronize critical healthcare metrics."
      ],
      highlights: ["Clinical AI", "Zero-Fail Constraints", "Real-Time Pipelines"]
    },
    {
      role: "Software Engineer (Founding Team)",
      company: "Arcampass",
      location: "Remote",
      period: "Feb 2025 – Jan 2026",
      bullets: [
        "Built and deployed a production web platform using Next.js, Express, and MongoDB, supporting 200 monthly active users and handling 1,000 API requests per day.",
        "Designed MongoDB schemas for user accounts, sessions, and transactional data. Added compound indexes on high traffic queries, reducing average read latency from 320 ms to 140 ms.",
        "Containerized backend with Docker and deployed to AWS EC2 behind NGINX. Reduced deployment time from 12 minutes to 8 minutes and improved API latency to 180 ms using Redis caching."
      ],
      highlights: ["Next.js & Express", "AWS EC2 / NGINX", "Latency 320ms -> 140ms", "Redis Caching"]
    },
    {
      role: "AI Research Assistant - LLM Code Automation",
      company: "Pace University, Seidenberg School of CSIS",
      location: "New York, NY",
      period: "Apr 2025 – Sep 2025",
      bullets: [
        "Developed a Python benchmarking framework to evaluate 5 LLMs across 50 structured software engineering tasks.",
        "Measured code correctness, runtime failures, and security violations. Identified a 28 percent average failure rate in authentication and input validation logic across models.",
        "Automated evaluation using unit tests and static analysis checks, reducing manual grading time by 60 percent and improving result reproducibility."
      ],
      highlights: ["LLM Evaluation", "Python Benchmarking", "60% Grading Time Reduction"]
    },
    {
      role: "Software Engineer Intern",
      company: "BZ Marketing",
      location: "Remote",
      period: "May 2024 - Sep 2024",
      bullets: [
        "Led frontend development of a React landing page redesign resulting in a SEO score increasing from 71 to 88.",
        "Built an AI driven keyword generation feature using OpenAI and Django. Increased client campaign outreach by 20 percent within 2 months of deployment.",
        "Implemented Redis TTL caching and optimized PostgreSQL queries in the CRM dashboard. Reduced average page load time from 2.4 seconds to 0.9 seconds and cut third party API costs by 15 percent."
      ],
      highlights: ["SEO 71 -> 88", "OpenAI & Django", "Page Load 2.4s -> 0.9s", "Redis TTL Caching"]
    }
  ]

  const projects = [
    {
      title: "Master Parcel Data Engine",
      subtitle: "Real Estate DaaS Platform",
      link: "https://ny-data.vercel.app",
      stack: ["Next.js", "Node.js", "Go", "PostgreSQL", "AWS", "Python", "Redis", "MongoDB"],
      bullets: [
        "Architected a real estate DaaS platform featuring a hybrid Go and Python (Pandas) ETL pipeline that standardizes unstructured MongoDB market listings and municipal records (MapPLUTO, ACRIS) to the NYC BBL standard.",
        "Built a serverless Next.js/React frontend powered by a secure Node.js backend to manage API routing, protect environment variables, and handle email-gated data streaming.",
        "Integrated a zero-cost architecture using Supabase (PostgreSQL) for automated lead capture and CRM routing, alongside Stripe for seamless B2B monetization."
      ]
    },
    {
      title: "Parkidsy",
      subtitle: "Cross-Platform Web Application",
      link: "https://parkidsy.voicesights.xyz",
      stack: ["Next.js", "Bun", "Supabase", "PostgreSQL", "TypeScript", "iOS/Android WebViews"],
      bullets: [
        "Architected a mobile-optimized full-stack web application wrapped inside native iOS and Android WebViews.",
        "Leveraged the Bun runtime to build high-performance, low-latency backend API routes.",
        "Engineered a relational Supabase (PostgreSQL) schema for secure authentication and real-time data storage."
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-blue-600/30 selection:text-blue-200">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <Header />

      {/* Main Content */}
      <main className="flex-1 z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Immediate Identification */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-wider animate-pulse">
              <Sparkles className="h-3.5 w-3.5" />
              Available for Fall/Winter 2026 Opportunities
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  James Hamilton
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-300 tracking-tight">
                Software Engineer
                <span className="text-blue-500 mx-2">•</span>
                Clinical AI & Full-Stack
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
                I build high-performance, AI-driven applications and secure full-stack architectures. Currently engineering live-triage EMS systems under zero-fail constraints and automation benchmarking pipelines.
              </p>
            </div>

            {/* Quick Skills Matrix - CLEAR IN THE FIRST SECOND */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Core Stack at a Glance:
              </h3>
              <div className="flex flex-wrap gap-2 max-w-2xl">
                {coreSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold bg-gradient-to-br ${skill.color} shadow-sm shadow-black/20 hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 cursor-pointer"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20 font-medium text-sm transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: Premium Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />

              {/* Image Frame */}
              <div className="relative rounded-2xl border border-white/10 bg-zinc-950 p-3 overflow-hidden shadow-2xl w-[280px] sm:w-[320px] aspect-[4/5]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                  <Image
                    src="/Personal_Image.png"
                    alt="James Hamilton"
                    fill
                    sizes="(max-w-768px) 280px, 320px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/25">
                  <Award className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Academics</div>
                  <div className="text-sm font-bold text-white">BS in Computer Science</div>
                  <div className="text-xs text-emerald-400 font-medium">GPA 3.68 @ Pace Univ.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal/CLI Section */}
        <section className="py-20 border-y border-white/[0.05] bg-zinc-950/40 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Interactive Terminal</h2>
              <p className="text-zinc-400 text-sm">
                Prefer command-line interfaces? Query my profile, skills, and professional experience directly using this interactive shell.
              </p>
            </div>
            <Terminal />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Capabilities</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Technical Expertise</h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              A comprehensive breakdown of my programming languages, full-stack frameworks, cloud infrastructure tools, and database systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`group relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300 ${group.borderColor}`}
              >
                {/* Glowing effect inside card */}
                <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none ${group.glowColor} blur-sm`} />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 transition-colors">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {group.title}
                    </h3>
                  </div>

                  <div className="h-px bg-white/[0.08]" />

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/15 text-zinc-300 text-xs transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-white/[0.05] bg-zinc-950/20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">History</div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Professional Experience</h2>
              </div>
              <p className="text-zinc-400 text-sm max-w-md">
                Previous software engineering internships and research assistant positions where I built production codebases and AI logic.
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="relative border-l border-white/10 pl-6 ml-4 md:pl-10 md:ml-8 space-y-12 max-w-4xl">
              {experience.map((job, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-4 w-4 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-300 shadow-md shadow-blue-500/50" />

                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {job.role}
                        </h3>
                        <div className="text-sm font-medium text-zinc-400 flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-zinc-300">{job.company}</span>
                          <span className="text-zinc-600">•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-blue-400/90 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 self-start md:self-center">
                        {job.period}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-sm text-zinc-400 list-none pl-0">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-1" />
                          <span>
                            {/* Make key metrics bold */}
                            {bullet.split(/(320 ms to 140 ms|12 minutes to 8 minutes|180 ms|60 percent|28 percent|71 to 88|20 percent|2\.4 seconds to 0\.9 seconds|15 percent)/g).map((part, pIdx) => {
                              const matches = [
                                "320 ms to 140 ms", "12 minutes to 8 minutes", "180 ms", "60 percent",
                                "28 percent", "71 to 88", "20 percent", "2.4 seconds to 0.9 seconds", "15 percent"
                              ].includes(part);
                              return matches ? <strong key={pIdx} className="text-white font-semibold">{part}</strong> : part;
                            })}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {job.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Portfolio</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              High-performance, production-ready systems architected with modular designs and modern tech stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-white/[0.08] bg-zinc-950/40 hover:bg-zinc-950/80 p-8 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/20"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <div>
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors group-hover/link:underline">
                            {project.title}
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      )}
                      <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 text-zinc-400 hover:text-blue-400 transition-all cursor-pointer"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-zinc-900 border border-white/[0.03] text-zinc-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-white/[0.08]" />

                  <ul className="space-y-3 text-sm text-zinc-400">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Independent Initiatives & Challenge */}
          <div className="mt-12 p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-blue-950/10 to-indigo-950/10 backdrop-blur-xl max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-6">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
              <Award className="h-6 w-6 text-blue-400" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold text-white">
                  Commuter App Design & Launch Challenge
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Finalist
                </span>
              </div>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                Collaboration with MTA & NJ Transit Leaders • Nov 2024
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Designed core features using Kotlin/Swift and Golang with RESTful APIs, implementing user authentication, offline caching, and Microsoft Azure database integration for seamless and secure functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 border-t border-white/[0.05] bg-zinc-950/40 relative">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex items-center gap-5 max-w-2xl">
              <div className="h-16 w-16 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/5">
                <GraduationCap className="h-8 w-8 text-blue-400" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">Education</div>
                <h3 className="text-xl font-bold text-white">
                  Pace University, Seidenberg School of Computer Science & Information Systems
                </h3>
                <p className="text-sm text-zinc-400">
                  Bachelor of Science in Computer Science <span className="text-zinc-600">|</span> GPA: 3.68 <span className="text-zinc-600">|</span> December 2026 Graduation
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-semibold text-white">Manhattan, NY</div>
              <div className="text-xs text-zinc-500 mt-1">Dean&apos;s List / Academic Honors</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Connect</div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let&apos;s Work Together</h2>
                <p className="text-zinc-400 text-sm mt-4 leading-relaxed max-w-md">
                  I&apos;m currently seeking software engineering internship or full-time roles starting in 2026/2027. Feel free to reach out through the form, email, or connect via LinkedIn and GitHub.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/10 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/25">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Email</div>
                    <a href="mailto:jameschamilton070605@gmail.com" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
                      jameschamilton070605@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/10 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25">
                    <Phone className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Phone</div>
                    <a href="tel:+16465004753" className="text-sm font-medium text-white hover:text-indigo-400 transition-colors">
                      (646)-500-4753
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/10 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Location</div>
                    <span className="text-sm font-medium text-white">
                      Bronx, NY 10467
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/JamesCHamilton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 text-sm font-medium text-zinc-300 hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/james-hamilton-499514293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 text-sm font-medium text-zinc-300 hover:text-white transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-zinc-950/60 py-12 text-center text-sm text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="font-bold text-white text-xs tracking-wider">JH</span>
            </div>
            <span className="font-semibold text-zinc-300">James Hamilton Portfolio</span>
          </div>
          <p>© {new Date().getFullYear()} James Hamilton. Built with Next.js & Tailwind CSS.</p>
          <div className="flex gap-4">
            <a href="/James_Hamilton_Resume.pdf" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              Resume PDF
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
