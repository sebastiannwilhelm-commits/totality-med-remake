const quotes = [
  "Wonderful experience and results every time I go!",
  "Bethany is my go to. They have a great retail area with all kinds of great products. Always on time, friendly and professional.",
  "Had a great experience here!",
  "I have been a member of Totality since 2021. The ambience and the people that work here make it an experience. I love the VIP membership. Great deal.",
  "The absolute best!! I feel totally comfortable and myself! They bring out the best of me!",
  "Great first time experience! I will be back!",
  "Maureen was great! Explained everything in detail and very patient!",
  "Came to see my most favorite person, Dr. Nadel, and staff today! She helped me immensely with my lips. Her bedside manner is spectacular!",
  "I had an amazing experience at Totality Med Spa! I received Botox and filler from Sarah, and I couldn’t be happier with the results.",
  "Staff is so friendly, informative and efficient!",
];

export function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-spa-charcoal/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-spa-gold">
          Testimonials
        </p>
        <h2 className="mt-3 font-display text-4xl text-spa-cream sm:text-5xl">
          Loved in Charleston
        </h2>
        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 scrollbar-hide sm:gap-6">
          {quotes.map((text, i) => (
            <figure
              key={i}
              className="min-w-[280px] max-w-sm shrink-0 rounded-2xl border border-white/10 bg-spa-ink/80 p-6 shadow-xl sm:min-w-[320px] sm:p-8"
            >
              <blockquote className="text-sm leading-relaxed text-stone-300 sm:text-base">
                “{text}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-medium uppercase tracking-wider text-spa-gold/80">
                Verified guest
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
