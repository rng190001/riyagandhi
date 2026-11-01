import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";

function ProjectRow({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden border-b border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "linear-gradient(90deg, rgba(99,102,241,0.08), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between gap-5 py-8">
        <div className="min-w-0">
          <span className="text-xs text-zinc-500">{project.id}</span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white transition group-hover:text-indigo-300 sm:text-3xl">
            {project.title.trim()}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
            {project.tech.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="border border-border px-2 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-5 sm:gap-8">
          <div className="hidden max-w-xs flex-wrap justify-end gap-2 lg:flex">
            {project.tech.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="border border-border px-2 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-zinc-500">{project.year}</span>
          <motion.span
            animate={{
              rotate: hovered ? 0 : -45,
              x: hovered ? 0 : -4,
              y: hovered ? 0 : 4,
            }}
            aria-hidden="true"
          >
            <ArrowUpRight />
          </motion.span>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border/60 bg-surface-elevated/40"
    >
      <div className="section-container">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-white" aria-hidden="true" />
            <p className="section-label !mb-0">Selected work</p>
          </div>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Projects & experiments
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            A selection of product builds and technical explorations across
            frontend engineering, full-stack development, and applied machine learning.
          </p>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
