import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-spa-charcoal/80 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-wide text-spa-cream">
              Totality Medispa
            </p>
            <p className="mt-4 text-sm text-stone-500 leading-relaxed">
              This page is a design remake for portfolio purposes. For official
              hours, locations, and medical scheduling, visit{" "}
              <a
                href="https://www.totalitymed.com/"
                className="text-spa-gold underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                totalitymed.com
              </a>
              .
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-spa-gold">
              Charleston area
            </p>
            <p className="mt-4 text-stone-400">
              Multiple locations throughout Charleston, SC.
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Consultation prior to every treatment.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-spa-gold">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.instagram.com/totality_medispa/"
                  className="text-stone-400 transition hover:text-spa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <a
                  href="https://www.totalitymed.com/"
                  className="text-stone-400 transition hover:text-spa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official website
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} Remake demo — not affiliated with Totality
          Medispa unless authorized.
        </p>
      </div>
    </footer>
  );
}
