const reasons = [
  { title: "Highly qualified", subtitle: "Specialists" },
  { title: "Professional", subtitle: "Approach" },
  { title: "Latest", subtitle: "Equipment" },
  { title: "Private", subtitle: "Appointments" },
];

export function WhyUs() {
  return (
    <section className="border-y border-white/5 bg-spa-charcoal/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl text-spa-cream sm:text-5xl">
          Why choose us
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title + r.subtitle}
              className="border-l-2 border-spa-gold/50 pl-6"
            >
              <p className="font-display text-2xl text-spa-cream">{r.title}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-stone-500">
                {r.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
