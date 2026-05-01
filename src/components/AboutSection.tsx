import { motion } from "framer-motion";

export function AboutSection() {
  return (
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
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          About Me
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-base sm:text-lg">
          Product-minded engineer with 7+ years shipping full-stack systems,
          developer tools, and platform infrastructure. Core maintainer of
          TypeORM. I build across Go, TypeScript, Python, and Rust — from mobile
          auth SDKs to data platforms to low-level runtime tooling. I care
          deeply about developer experience, clean architecture, and setting
          projects up for long-term success.
        </p>
      </div>
    </motion.div>
  );
}
