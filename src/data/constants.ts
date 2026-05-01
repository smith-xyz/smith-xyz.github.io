import type { Variants } from "framer-motion";

export const techColors: Record<string, string> = {
  Rust: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Go: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  TypeScript:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  React: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  Python:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  eBPF: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  TLS: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Static Analysis":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Tree-sitter":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Open Source":
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Database:
    "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
  "AI/Agents":
    "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  Testing: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
};

export const defaultTechColor =
  "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";

export const cardAccentColors = [
  "from-blue-500 to-cyan-500",
  "from-orange-500 to-red-500",
  "from-cyan-500 to-teal-500",
  "from-purple-500 to-indigo-500",
  "from-rose-500 to-pink-500",
  "from-emerald-500 to-green-500",
];

export const skillTags = [
  "TypeScript",
  "Go",
  "React",
  "Rust",
  "Python",
  "Open Source",
];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};
