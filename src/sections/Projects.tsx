import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";

function ProjectRow({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      className="group block border-b border-border relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "linear-gradient(90deg, rgba(99,102,241,0.08), transparent)",
        }}
      />

      <div className="relative py-8 flex justify-between gap-8 items-center">
        <div>
          <span className="text-xs text-zinc-500">
            {project.id}
          </span>

          <h3 className="mt-2 text-3xl font-display font-semibold text-white group-hover:text-indigo-300 transition">
            {project.title}
          </h3>

          <p className="mt-3 max-w-xl text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex gap-2 flex-wrap justify-end max-w-xs">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-sm text-zinc-500">
            {project.year}
          </span>

          <motion.div
            animate={{
              rotate: hovered ? 0 : -45,
              x: hovered ? 0 : -4,
              y: hovered ? 0 : 4,
            }}
          >
            <ArrowUpRight />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          height: hovered ? 250 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-[250px] w-full object-cover rounded-lg"
        />
      </motion.div>
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
        <p className="section-label">Projects</p>

        <h2 className="section-title mb-12">
          Selected work
        </h2>

        <div>
          {projects.map((project) => (
            <ProjectRow
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}