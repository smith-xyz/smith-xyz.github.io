import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import headshot from "./assets/headshot.jpeg";
import resume from "./assets/shaun-smith-resume.pdf";

const techColors: Record<string, string> = {
  Rust: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Go: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  React: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  Python: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  eBPF: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  TLS: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  PQC: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  Compiler: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  Instrumentation: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  Docker: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Runtime Analysis": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  "Tree-sitter": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Static Analysis": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  Semgrep: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Security: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Cryptography: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
  Visualization: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  OCaml: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "Open Source": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Database: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
};

const defaultTechColor = "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";

const cardAccentColors = [
  "from-blue-500 to-cyan-500",
  "from-orange-500 to-red-500",
  "from-cyan-500 to-teal-500",
  "from-purple-500 to-indigo-500",
  "from-rose-500 to-pink-500",
  "from-emerald-500 to-green-500",
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "tls-probe",
    description:
      "eBPF-based TLS handshake analyzer written in Rust. Captures ClientHello/ServerHello at the network layer without process attachment. Detects PQC/hybrid key exchanges (ML-KEM, Kyber) across OpenSSL, BoringSSL, Go, and rustls.",
    tech: ["Rust", "eBPF", "TLS", "PQC"],
    github: "https://github.com/smith-xyz/tls-probe",
    highlight: true,
  },
  {
    title: "go-probe",
    description:
      "Compile-time instrumentation patches for the Go compiler that emit zero-overhead probes at function call sites, observable via /proc without attaching to the process. Targets crypto usage detection and runtime dependency auditing.",
    tech: ["Go", "Compiler", "Instrumentation"],
    github: "https://github.com/smith-xyz/go-probe",
    highlight: true,
  },
  {
    title: "go-runtime-observer",
    description:
      "Instrumented Go toolchain that logs runtime behavior (reflection, unsafe, stdlib crypto) with correlation tracking. Supports Go 1.19-1.25 with configurable instrumentation levels.",
    tech: ["Go", "Runtime Analysis", "Docker"],
    github: "https://github.com/smith-xyz/go-runtime-observer",
    highlight: true,
  },
  {
    title: "argflow",
    description:
      "Multi-language static analysis tool in Rust using Tree-sitter to trace function argument flows across codebases, with presets for cryptographic APIs. Output aligned to CBOM standards.",
    tech: ["Rust", "Tree-sitter", "Static Analysis"],
    github: "https://github.com/smith-xyz/argflow",
    highlight: true,
  },
  {
    title: "PQC Readiness Tracker",
    description:
      "Interactive dashboard visualizing post-quantum cryptography implementation status across languages, crypto libraries, and standards.",
    tech: ["TypeScript", "React", "Cryptography"],
    github: "https://github.com/smith-xyz/pqc-readiness-tracker",
    demo: "https://smith-xyz.github.io/pqc-readiness-tracker/",
    highlight: true,
  },
  {
    title: "Argus Observe Rules",
    description:
      "Semgrep rules for security analysis covering Go, Python, Rust, C/C++, Java, and TypeScript with test coverage and clear guidance.",
    tech: ["Semgrep", "Security", "Static Analysis"],
    github: "https://github.com/smith-xyz/argus-observe-rules",
    highlight: true,
  },
  {
    title: "OpenGrep Contributor",
    description:
      "Contributing to the open-source fork of Semgrep, helping maintain and improve the static analysis engine used across security tooling.",
    tech: ["OCaml", "Open Source", "Static Analysis"],
    github: "https://github.com/opengrep/opengrep",
  },
  {
    title: "TypeORM Contributor",
    description:
      "Contributed improvements and bug fixes to the popular TypeScript ORM for Node.js.",
    tech: ["TypeScript", "Open Source", "Database"],
    github: "https://github.com/typeorm/typeorm",
  },
];

const skillTags = ["Go", "Rust", "TypeScript", "Python", "eBPF", "Static Analysis", "PQC"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
      clipRule="evenodd"
    />
  </svg>
);

function DarkModeToggle({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = cardAccentColors[index % cardAccentColors.length];

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      className="group relative bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`h-1 bg-gradient-to-r ${accent}`} />
      <div className="p-6">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-xs font-medium rounded-full ${techColors[tech] || defaultTechColor}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <GitHubIcon />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ContributionCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      className="flex items-start justify-between gap-4 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex-1">
        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
          {project.title}
        </h4>
        <p className="text-sm text-[var(--color-text-secondary)] mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-xs font-medium rounded-full ${techColors[tech] || defaultTechColor}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors shrink-0"
      >
        <GitHubIcon className="w-5 h-5" />
      </a>
    </motion.div>
  );
}

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const resumeDownloadProps = {
    href: resume,
    download: "shaun-smith-resume.pdf",
  };

  const featured = projects.filter((p) => p.highlight);
  const contributions = projects.filter((p) => !p.highlight);

  return (
    <div className="min-h-screen bg-[var(--color-surface)] transition-colors duration-300">
      <DarkModeToggle dark={dark} toggle={() => setDark(!dark)} />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/20" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <img
              src={headshot}
              alt="Shaun Smith"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 shadow-xl border-4 border-white dark:border-slate-700 object-cover"
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] mb-3 tracking-tight">
              Shaun Smith
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
              Software Engineer &middot; Full-Stack Development, Security Tooling & Systems Instrumentation
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillTags.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className={`px-3 py-1 text-sm font-medium rounded-full ${techColors[skill] || defaultTechColor}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[var(--color-accent)] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
                About Me
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-base sm:text-lg">
                Software engineer with 7+ years of experience building scalable
                systems, security tooling, and developer infrastructure. I focus
                on understanding how software works under the hood -- from Go
                compiler instrumentation to eBPF network analysis. I independently
                build open-source tools spanning runtime observability, static
                analysis, and post-quantum cryptography readiness, and care deeply
                about clean architecture and setting projects up for long-term
                success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-12">

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-10">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Open Source Contributions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contributions.map((project, i) => (
              <ContributionCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              Let's Connect
            </h2>
            <div className="flex flex-col items-center gap-4">
              <a
                {...resumeDownloadProps}
                className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-md hover:shadow-lg no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href="https://github.com/smith-xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors text-sm"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shaun-smith-113071ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#006399] transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;
