import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Hero() {
  const [firstName, ...rest] = site.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="section-container relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden">
      {/* Header */}
      <div className="animate-fade-in-up mb-3 flex items-center gap-3">
        <span className="h-px w-10 shrink-0 bg-white" aria-hidden="true" />
        <p className="section-label !mb-0">Software Engineer</p>
      </div>

      {/* Name */}
      <h1 className="font-display animate-fade-in-up animate-fade-in-up-delay-1 bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-7xl font-semibold leading-[0.9] tracking-tight text-transparent sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[11rem]">
        <span className="block">{firstName}</span>
        {lastName && <span className="block">{lastName}</span>}
      </h1>

      {/* Tagline */}
      <p className="animate-fade-in-up animate-fade-in-up-delay-2 mt-8 max-w-lg text-sm leading-7 text-zinc-300 md:text-base">
        {site.tagline}
      </p>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 right-6 flex items-center gap-3 text-zinc-400 transition hover:text-white sm:right-8 lg:right-12"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{ scaleY: [1, 0.35, 1] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px origin-top bg-current opacity-50"
        />
      </a>
    </section>
  );
}