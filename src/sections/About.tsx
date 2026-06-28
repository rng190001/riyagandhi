import { site, skills } from '@/data/site'

export default function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="section-container">
        <p className="section-label">About</p>
        <h2 className="section-title">A little about me</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-zinc-400">
            <p>
              Replace this paragraph with your story — what you care about, what
              you&apos;re currently working on, and the kind of roles or
              collaborations you&apos;re open to.
            </p>
            <p>
              This starter keeps content in{' '}
              <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-sm text-indigo-300">
                src/data/site.ts
              </code>{' '}
              so you can update copy without touching layout code.
            </p>
            <p className="text-sm text-zinc-500">{site.location}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-zinc-500">
              Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
