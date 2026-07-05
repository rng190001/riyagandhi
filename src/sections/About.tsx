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
              I'm a software engineer who loves building products from idea to production. Over the past few years, I've shipped consumer-facing applications at JP Morgan Chase & Co, built data-driven dashboards, explored AI-powered projects, and won hackathons by combining thoughtful engineering with intuitive design.
              I enjoy working across the frontend, collaborating closely with product and design teams, and crafting experiences that are fast, accessible, and genuinely enjoyable to use.
            </p>
            <p>
              When I'm not building for work, I'm usually designing new side projects, experimenting with emerging technologies, or finding ways to push my skills further. 
              I'm always excited by opportunities to create products that people love and to work with teams that care deeply about craftsmanship and user experience.
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
