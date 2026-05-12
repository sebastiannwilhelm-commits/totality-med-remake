const items = [
  {
    title: "Kathryn Dennis just got new lips",
    subtitle: "See her plumped-up pout",
  },
  {
    title: "Kathryn Dennis transformed her cheeks with fillers",
    subtitle: "See the before and after",
  },
  {
    title: "Kathryn Dennis just gave her eyebrows a full makeover",
    subtitle: "Press spotlight",
  },
];

export function Press() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-spa-gold">
          Press
        </p>
        <h2 className="mt-3 font-display text-4xl text-spa-cream sm:text-5xl">
          Recently featured
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <a
                href="#contact"
                className="block h-full rounded-2xl border border-white/10 bg-spa-ink/60 p-6 transition hover:border-spa-gold/40 hover:bg-white/[0.03]"
              >
                <h3 className="font-display text-xl text-spa-cream leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-spa-gold/90">{item.subtitle}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
