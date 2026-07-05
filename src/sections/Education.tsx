import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/site";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-border/60 bg-surface"
    >
      <div className="section-container">
        {/* Header */}

        <div className="mb-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-white" />
            <p className="section-label !mb-0">
              Education
            </p>
          </div>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {education.map((item) => (
            <motion.article
              key={item.degree}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="group rounded-2xl border border-border bg-surface-elevated p-8 transition hover:border-indigo-400/40"
            >
              {/* Top */}

              <div className="mb-8 flex items-start justify-between">
                <div className="rounded-xl border border-border p-3 text-indigo-400">
                  <GraduationCap size={22} />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {item.period}
                </span>
              </div>

              {/* Degree */}

              <h3 className="font-display text-2xl font-semibold text-white">
                {item.degree}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-medium text-indigo-400">
                  {item.school}
                </span>

                <span className="text-zinc-600">•</span>

                <span className="text-zinc-500">
                  {item.location}
                </span>
              </div>

              {item.track && (
                <p className="mt-2 text-sm text-zinc-400">
                  {item.track}
                </p>
              )}

              <p className="mt-6 leading-7 text-zinc-400">
                {item.description}
              </p>

              {/* Coursework */}

              {item.coursework && (
                <>
                  <h4 className="mt-8 mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Coursework
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-md border border-border px-3 py-1 text-xs text-zinc-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Achievements */}

              {item.achievements && (
                <>
                  <h4 className="mt-8 mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Highlights
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="rounded-md bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}