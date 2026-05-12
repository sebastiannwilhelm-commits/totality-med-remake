import { OFFICIAL, youtubeEmbedUrl, youtubeWatchUrl } from "@/config/official";
export function VideoFeature() {
  const watch = youtubeWatchUrl(OFFICIAL.youtubeConsultVideoId);
  const embed = youtubeEmbedUrl(OFFICIAL.youtubeConsultVideoId);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <iframe
              src={`${embed}?rel=0`}
              title="Thought about Totality Medispa — customized and comprehensive skin care plans"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-spa-cream sm:text-4xl">
              Dr. Nicole Nadel explains customized treatment plans
            </h2>
            <p className="mt-6 text-stone-400 leading-relaxed">
              Every visit begins with a consultation so we can understand your
              goals, answer questions, and design a plan that fits your anatomy
              and lifestyle—never one-size-fits-all.
            </p>
            <a
              href={watch}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider text-spa-gold underline-offset-4 hover:underline"
            >
              Watch on YouTube
            </a>          </div>
        </div>
      </div>
    </section>
  );
}
