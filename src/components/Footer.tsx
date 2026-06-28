import { site } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60">
      <div className="section-container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          © {year} {site.name}. Built with React, Vite, and Tailwind.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
