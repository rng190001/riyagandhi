import { motion } from "framer-motion";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container border-t border-border/60 py-24 sm:py-28"
    >
      <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-white" aria-hidden="true" />
            <p className="section-label !mb-0">Experience</p>
          </div>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Where I’ve built
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-zinc-400">
          From enterprise product teams to smaller engineering environments,
          I enjoy turning user needs into thoughtful, dependable software.
        </p>
      </div>

      <div className="relative space-y-5">
        <div
          className="absolute bottom-8 left-[7px] top-8 hidden w-px bg-border sm:block"
          aria-hidden="true"
        />

        {experience.map((exp, index) => {
          const isCurrentRole = index === 0;

          return (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
              className={`relative rounded-2xl border p-6 transition-colors sm:p-8 ${
                isCurrentRole
                  ? "border-indigo-400/50 bg-indigo-400/[0.06] sm:ml-0"
                  : "border-border bg-surface-elevated sm:ml-10"
              }`}
            >
              <span
                className={`absolute -left-[1.95rem] top-10 hidden h-3 w-3 rounded-full border-2 sm:block ${
                  isCurrentRole
                    ? "border-indigo-300 bg-indigo-400"
                    : "border-zinc-600 bg-surface"
                }`}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {exp.period}
                    </span>
                    {isCurrentRole && (
                      <span className="rounded-full border border-indigo-400/40 bg-indigo-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-300">
                        Current role
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {exp.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span className="font-medium text-indigo-300">{exp.company}</span>
                    <span className="text-zinc-600" aria-hidden="true">·</span>
                    <span className="text-zinc-500">{exp.location}</span>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {exp.highlight.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/80 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-border/70 pt-5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-black/20 px-2.5 py-1.5 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
