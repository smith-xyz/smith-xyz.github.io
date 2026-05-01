import { motion } from "framer-motion";
import headshot from "../assets/headshot.jpeg";
import { techColors, defaultTechColor, skillTags } from "../data/constants";

export function HeroSection() {
  return (
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
        Software Engineer &middot; Full-Stack Development, Developer Tools &
        Platform Infrastructure
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
  );
}
