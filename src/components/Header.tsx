import { navLinks, site } from '@/data/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4 sm:px-8">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-white transition hover:text-indigo-300"
        >
          {site.name}
          <span className="text-indigo-400">.</span>
        </a>

        <nav
          className="ml-auto flex items-center gap-4 sm:gap-8"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
