import Image from "next/image";
import Link from "next/link";

import { OFFICIAL } from "@/config/official";

export function GalleryCTA() {
  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-spa-charcoal/60">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] min-h-[280px] lg:aspect-auto lg:min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop"
                alt="Spa treatment environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-spa-gold">
                Before + after
              </p>
              <h2 className="mt-3 font-display text-3xl text-spa-cream sm:text-4xl">
                Gallery
              </h2>
              <p className="mt-6 text-stone-400 leading-relaxed">
                View real patients’ before and after photos of treatments
                performed by Dr. Nicole Nadel and the Totality Medispa team in
                Charleston, SC.
              </p>
              <Link
                href={OFFICIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-spa-gold/40 bg-spa-gold/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-spa-cream transition hover:bg-spa-gold/20"
              >
                <span aria-hidden>↗</span> Instagram portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
