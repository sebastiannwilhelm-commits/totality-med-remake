import Link from "next/link";

import { OFFICIAL } from "@/config/official";

import { BookingLink } from "./BookingLink";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-spa-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6">
        <Link href="/" className="font-display text-xl tracking-[0.2em] text-spa-cream sm:text-2xl">
          Totality <span className="text-spa-gold">Medispa</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-300 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-spa-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={OFFICIAL.phoneTel}
            className="hidden rounded-full border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-stone-300 transition hover:border-spa-gold/40 hover:text-spa-cream md:inline-flex"
          >
            Call
          </a>
          <BookingLink className="rounded-full border border-spa-gold/50 bg-spa-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-spa-cream transition hover:bg-spa-gold/20 sm:text-sm">
            Book now
          </BookingLink>
        </div>
      </div>
    </header>
  );
}
