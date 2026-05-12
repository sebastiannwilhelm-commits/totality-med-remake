import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <Image
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop"
        alt="Soft-lit spa interior"
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-spa-ink via-spa-ink/70 to-spa-ink/40" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 sm:pb-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-spa-gold sm:text-sm">
          Totality Medispa
        </p>
        <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-spa-cream sm:text-7xl md:text-8xl">
          defy
          <br />
          <span className="text-spa-gold/90">reality</span>
        </h1>
        <p className="mt-8 max-w-lg text-lg text-stone-400 sm:text-xl">
          Charleston’s award-winning medispa—personalized aesthetics, advanced
          technology, and hospitality that matches your results.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-spa-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-spa-ink transition hover:bg-spa-gold/90"
          >
            Schedule consultation
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-spa-cream transition hover:border-spa-gold/50 hover:bg-white/5"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
