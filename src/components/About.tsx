export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-spa-charcoal/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-spa-gold">
              About us
            </p>
            <h2 className="mt-3 font-display text-3xl text-spa-cream sm:text-4xl">
              Founded in 2018
            </h2>
            <p className="mt-6 text-stone-400 leading-relaxed">
              Totality Medispa is an award-winning medispa offering the latest
              generation of treatments and technologies that rejuvenate,
              revitalize, sculpt, and restore face and body. With multiple
              locations throughout Charleston, SC, we deliver our services
              with best-in-class hospitality.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-spa-gold">
              Dr. Nicole Nadel
            </p>
            <h2 className="mt-3 font-display text-3xl text-spa-cream sm:text-4xl">
              Direction you can trust
            </h2>
            <p className="mt-6 text-stone-400 leading-relaxed">
              Under the direction of Dr. Nicole Nadel, Totality Medispa offers
              treatments tailored to your needs. Each appointment includes a
              consultation prior to treatment so we can formulate a customized
              plan of services and products to achieve your aesthetic goals.
            </p>
            <p className="mt-4 text-stone-500 leading-relaxed">
              Experience the art of aesthetic enhancement in a luxurious,
              discreet setting where your personal cosmetic goals become
              reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
