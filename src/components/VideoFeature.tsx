import Image from "next/image";
import Link from "next/link";

export function VideoFeature() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
              alt="Treatment consultation atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-spa-ink/40">
              <Link
                href="https://www.youtube.com/results?search_query=Totality+Medispa+Dr+Nicole+Nadel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-spa-cream/80 bg-spa-ink/60 text-spa-cream backdrop-blur transition hover:scale-105 hover:border-spa-gold hover:bg-spa-gold/20"
                aria-label="Watch video on YouTube"
              >
                <span className="ml-1 text-2xl">▶</span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl text-spa-cream sm:text-4xl">
              Dr. Nicole Nadel explains customized treatment plans
            </h2>
            <p className="mt-6 text-stone-400 leading-relaxed">
              Every visit begins with a consultation so we can understand your
              goals, answer questions, and design a plan that fits your anatomy
              and lifestyle—never one-size-fits-all.
            </p>
            <Link
              href="https://www.youtube.com/results?search_query=Totality+Medispa+Dr+Nicole+Nadel"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider text-spa-gold underline-offset-4 hover:underline"
            >
              Watch on YouTube
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
