import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  const [firstName, ...rest] = site.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="section-container relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden">
      <div className="animate-fade-in-up mb-3 flex items-center gap-3">
        <span className="h-px w-10 shrink-0 bg-white" aria-hidden="true" />
        <p className="section-label !mb-0">Software Engineer · JPMorgan Chase</p>
      </div>

      <h1 className="font-display animate-fade-in-up animate-fade-in-up-delay-1 bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-7xl font-semibold leading-[0.9] tracking-tight text-transparent sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[11rem]">
        <span className="block">{firstName}</span>
        {lastName && <span className="block">{lastName}</span>}
      </h1>

      <div className="animate-fade-in-up animate-fade-in-up-delay-2 mt-8 max-w-2xl">
        <p className="text-base leading-8 text-zinc-300 md:text-lg">
          {site.tagline}
        </p>
        <p className="mt-3 text-sm tracking-wide text-zinc-500">
          {site.location} <span className="mx-2 text-indigo-400">/</span> Product-minded frontend engineering
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
          >
            Explore my work <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-indigo-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
          >
            GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-medium text-zinc-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
          >
            LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-10 right-6 flex items-center gap-3 text-zinc-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 sm:right-8 lg:right-12"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px origin-top bg-current opacity-50"
        />
      </a>
    </section>
  );
}
