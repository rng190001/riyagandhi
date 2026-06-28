import { site } from '@/data/site'

export default function Hero() {
  const [firstName, ...rest] = site.name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section className="section-container flex min-h-[calc(100vh-5rem)] flex-col justify-center">
      <div className="animate-fade-in-up mb-3 flex items-center gap-3">
        <span className="h-px w-10 shrink-0 bg-white" aria-hidden="true" />
        <p className="section-label !mb-0">Software Engineer</p>
      </div>
      <h1 className="font-display animate-fade-in-up animate-fade-in-up-delay-1 bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-7xl font-semibold leading-[0.9] tracking-tight text-transparent sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[11rem]">
        <span className="block">{firstName}</span>
        {lastName ? <span className="block">{lastName}</span> : null}
      </h1>
      <p className="animate-fade-in-up animate-fade-in-up-delay-2 mt-8 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-xl">
        {site.tagline}
      </p>
    </section>
  )
}
