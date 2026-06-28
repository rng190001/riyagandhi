import { experience } from '@/data/site'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border/60">
      <div className="section-container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="grid gap-2 border-l-2 border-indigo-500/30 pl-6 sm:grid-cols-[12rem_1fr] sm:gap-8"
            >
              <p className="text-sm font-medium text-zinc-500">{item.period}</p>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.role}
                  <span className="text-zinc-500"> · {item.company}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
