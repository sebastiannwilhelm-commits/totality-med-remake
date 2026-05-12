import { OFFICIAL } from "@/config/official";

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
          {OFFICIAL.press.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
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
