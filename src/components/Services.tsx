import { OFFICIAL } from "@/config/official";

const services = [
  {
    title: "Fillers",
    description: "Volume, contour, and refinement with artistry-first placement.",
    href: OFFICIAL.services.fillers,
  },
  {
    title: "Toxins",
    description: "Smooth lines and refresh expression with precise dosing.",
    href: OFFICIAL.services.toxins,
  },
  {
    title: "Lasers",
    description: "Skin quality, pigment, and texture—modern devices, careful protocols.",
    href: OFFICIAL.services.lasers,
  },
  {
    title: "Body sculpting",
    description: "Non-surgical shaping and tightening aligned to your goals.",
    href: OFFICIAL.services.body,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-spa-gold">
          Procedures
        </p>
        <h2 className="mt-3 font-display text-4xl text-spa-cream sm:text-5xl">
          Featured services
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-spa-gold/30"
            >
              <h3 className="font-display text-2xl text-spa-cream transition group-hover:text-spa-gold">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                {s.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
