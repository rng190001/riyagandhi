import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/site";
import React from "react";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalCards = experience.length;
  const cardWidth = 460;
  const gap = 48;
  const maxShift = (cardWidth + gap) * (totalCards - 1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative border-t border-border/60"
      style={{
        height: `${100 + totalCards * 65}vh`,
      }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-surface">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-16 pb-10 sm:px-8 lg:px-12">
         <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-white" aria-hidden="true" />
            <p className="section-label !mb-0">Experience</p>
          </div>
        </div>

          <motion.div className="hidden md:block w-40 h-[2px] bg-border overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-indigo-400"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: "left",
              }}
            />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="flex flex-1 items-center overflow-hidden px-6 sm:px-8 lg:px-12">
          <motion.div
            className="flex gap-12"
            style={{ x }}
          >
            {experience.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                className="flex shrink-0 flex-col justify-between rounded-2xl border border-border bg-surface-elevated p-8 transition"
                style={{
                  width: "min(460px,85vw)",
                  minHeight: 380,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgb(129 140 248)",
                }}
              >
                {/* Top */}

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      {exp.period}
                    </span>

                    <span className="text-xs text-indigo-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-semibold text-white">
                    {exp.role}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="font-medium text-indigo-400">
                      {exp.company}
                    </span>

                    {exp.location && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-500">
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-6 leading-relaxed text-zinc-400">
                    {exp.description}
                  </p>
                </div>

                {/* Bottom */}

                <div className="mt-8 border-t border-border pt-6">
                  {exp.stack && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {exp.stack.map((tech: string) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border px-2 py-1 text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.highlight && (
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-indigo-300">
                      {exp.highlight.map((item: boolean | React.Key | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: number) => (
                        <React.Fragment key={item}>
                          {index > 0 && (
                            <span className="h-1 w-1 rounded-full bg-indigo-500/60" />
                          )}
                          <span>{item}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}

            {/* End Card */}

            <div className="flex w-64 shrink-0 items-center justify-center">
              <div className="text-center">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Building since
                </p>

                <p className="font-display text-6xl text-indigo-400">
                  2022
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicator */}

        <div className="px-6 py-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Scroll
            </span>

            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full bg-indigo-400"
                style={{
                  scaleX: scrollYProgress,
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}