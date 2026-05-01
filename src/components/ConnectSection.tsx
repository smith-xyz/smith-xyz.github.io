import { motion } from "framer-motion";
import resume from "../assets/shaun-smith-resume.pdf";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function ConnectSection() {
  return (
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
            href={resume}
            download="shaun-smith-resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-md hover:shadow-lg no-underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
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
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
