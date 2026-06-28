import { site } from '@/data/site'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="section-container">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-indigo-500/10 via-surface-elevated to-surface p-8 sm:p-12">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s connect</h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Open to new opportunities, collaborations, and conversations. The
            easiest way to reach me is by email.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              {site.email}
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-600 hover:bg-surface"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
