export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "TypeORM",
    description:
      "Core maintainer of the widely-adopted TypeScript ORM for Node.js.",
    tech: ["TypeScript", "Open Source", "Database"],
    github: "https://github.com/typeorm/typeorm",
  },
  {
    title: "context-reliability-testing",
    description:
      "Python CLI for A/B testing AI agent context configurations — measures pass rate, token usage, and tool calls across controlled experiments.",
    tech: ["Python", "AI/Agents", "Testing"],
    github: "https://github.com/smith-xyz/context-reliability-testing",
  },
  {
    title: "tls-probe",
    description:
      "eBPF-based TLS handshake analyzer in Rust that captures handshakes at the network layer without process attachment.",
    tech: ["Rust", "eBPF", "TLS"],
    github: "https://github.com/smith-xyz/tls-probe",
  },
  {
    title: "go-probe",
    description:
      "Compile-time instrumentation patches for the Go compiler that emit zero-overhead probes at function call sites, observable via /proc without attaching to the process.",
    tech: ["Go", "Compiler"],
    github: "https://github.com/smith-xyz/go-probe",
  },
  {
    title: "Argus Observe Rules",
    description:
      "Semgrep rules for security analysis covering Go, Python, Rust, C/C++, Java, and TypeScript with test coverage and clear guidance.",
    tech: ["Static Analysis", "Open Source"],
    github: "https://github.com/smith-xyz/argus-observe-rules",
  },
  {
    title: "OpenGrep Contributor",
    description:
      "Contributing to the open-source fork of Semgrep, helping maintain and improve the static analysis engine.",
    tech: ["Tree-sitter", "Open Source", "Static Analysis"],
    github: "https://github.com/opengrep/opengrep",
  },
];
