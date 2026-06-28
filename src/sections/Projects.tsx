import { projects } from '@/data/site'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 bg-surface-elevated/40">
      <div className="section-container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Swap in your own projects in{' '}
          <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-sm text-indigo-300">
            src/data/site.ts
          </code>
          .
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-indigo-500/40 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.35)]"
            >
              <h3 className="font-display text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-white transition group-hover:text-indigo-300"
                >
                  Live demo →
                </a>
                <a
                  href={project.github}
                  className="text-zinc-500 transition hover:text-zinc-300"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
