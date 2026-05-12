import Link from "next/link";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-spa-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <Link href="/" className="font-display text-xl tracking-[0.2em] text-spa-cream sm:text-2xl">
          Totality <span className="text-spa-gold">Medispa</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-300 md:flex">
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
        <Link
          href="#contact"
          className="rounded-full border border-spa-gold/50 bg-spa-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-spa-cream transition hover:bg-spa-gold/20 sm:text-sm"
        >
          Book
        </Link>
      </div>
    </header>
  );
}
