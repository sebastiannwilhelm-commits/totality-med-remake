import { OFFICIAL } from "@/config/official";

import { BookingLink } from "./BookingLink";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-spa-charcoal/80 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-spa-ink/40 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-spa-gold">
                Appointments
              </p>
              <p className="mt-2 max-w-md text-sm text-stone-400">
                Book online through the same patient portal linked from
                totalitymed.com.
              </p>
            </div>
            <BookingLink className="inline-flex shrink-0 items-center justify-center rounded-full bg-spa-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-spa-ink transition hover:bg-spa-gold/90">
              Book now
            </BookingLink>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-wide text-spa-cream">
              Totality Medispa
            </p>
            <p className="mt-4 text-sm text-stone-500 leading-relaxed">
              Award-winning aesthetics across Charleston and Hilton Head—with
              locations in Texas as well. Full site, forms, and blog at{" "}
              <a
                href={OFFICIAL.site}
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
              Phone & email
            </p>
            <p className="mt-4">
              <a
                href={OFFICIAL.phoneTel}
                className="text-lg text-spa-cream transition hover:text-spa-gold"
              >
                {OFFICIAL.phoneDisplay}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={OFFICIAL.mailto}
                className="text-sm text-stone-400 underline-offset-2 hover:text-spa-cream hover:underline"
              >
                {OFFICIAL.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-spa-gold">
              Locations
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={OFFICIAL.locations.danielIsland}
                  className="text-stone-400 transition hover:text-spa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daniel Island, SC
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL.locations.downtown}
                  className="text-stone-400 transition hover:text-spa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Downtown Charleston, SC
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL.locations.hiltonHead}
                  className="text-stone-400 transition hover:text-spa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hilton Head, SC
                </a>
              </li>
            </ul>
            <a
              href={OFFICIAL.contactLocations}
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-spa-gold underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              All locations & contact form
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-spa-gold">
              Social
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={OFFICIAL.instagram}
                  className="text-stone-400 transition hover:text-spa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL.facebook}
                  className="text-stone-400 transition hover:text-spa-cream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} Totality Medispa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
