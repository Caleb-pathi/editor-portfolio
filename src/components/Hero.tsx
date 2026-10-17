import { heroMeta, identity, images, marqueeItems } from "../data/portfolio";
import { scrollToSection, useParallax } from "../hooks";
import { Reveal } from "./Reveal";
import { IconArrow } from "./SectionHeading";

/* --------------------------------------------------------------------------
   HERO — Minimal Editorial Composition with oversized typography & orange-red accents
   -------------------------------------------------------------------------- */

export function Hero() {
  const frameRef = useParallax<HTMLDivElement>(12);

  const onAnchor = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-20 md:pt-24 lg:pt-28">
      <div className="shell relative pb-16 pt-6 md:pb-24 md:pt-10">
        {/* ── Top micro meta bar ───────────────────────────────────── */}
        <Reveal className="flex items-center gap-3 md:gap-5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#FF3D0A]/60" />
            <span className="relative h-2 w-2 rounded-full bg-[#FF3D0A]" />
          </span>
          <span className="type-meta font-semibold text-[#080808]">
            {identity.availability}
          </span>
          <span className="h-px flex-1 bg-[#080808]/10" aria-hidden="true" />
          <span className="type-meta hidden text-[#8C8980] sm:block">
            {identity.location}
          </span>
          <span className="type-meta hidden text-[#8C8980] md:block">2026</span>
        </Reveal>

        {/* ── Oversized Editorial Headline (Sentence Case, tight tracking) ── */}
        <div className="mt-8 md:mt-12">
          <Reveal delay={60}>
            <h1 className="type-display text-[clamp(2.75rem,8.2vw,7.25rem)] font-extrabold tracking-[-0.038em] text-[#080808] leading-[1.02]">
              <span className="block">Editing that makes</span>
              <span className="block text-[#5A5852]">creators impossible</span>
              <span className="block">
                to ignore
                <span className="text-[#FF3D0A]">.</span>
              </span>
            </h1>
          </Reveal>
        </div>

        {/* ── Two-Column Editorial Hero Layout (Hero Introduction + Square Photo Placeholder) ── */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-14 lg:grid-cols-12 lg:gap-14">
          {/* Left column: identity, intro copy, CTAs, and explore indicator */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#FF3D0A] uppercase">
                {identity.name}
              </span>
              <span className="h-3 w-px bg-[#080808]/20" aria-hidden="true" />
              <span className="text-sm font-medium text-[#5A5852]">
                {identity.role}
              </span>
            </div>

            <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-[1.65] font-normal text-[#5A5852] md:text-[1.125rem]">
              {identity.intro}
            </p>

            {/* CTAs matching reference: bold orange-red pill + clean secondary */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#work"
                onClick={(e) => onAnchor(e, "#work")}
                className="btn btn-acid text-center justify-center"
              >
                <span>VIEW SELECTED WORK</span>
                <IconArrow className="arrow" />
              </a>
              <a
                href="#contact"
                onClick={(e) => onAnchor(e, "#contact")}
                className="btn text-center justify-center"
              >
                <span>WORK WITH ME</span>
                <IconArrow className="arrow" />
              </a>
            </div>

            {/* Downward explore indicator + technical metadata */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#080808]/08 pt-6">
              <a
                href="#work"
                onClick={(e) => onAnchor(e, "#work")}
                className="group inline-flex items-center gap-3 text-[#FF3D0A] transition-transform hover:translate-y-1"
                aria-label="Scroll down to work"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 stroke-[#FF3D0A] transition-transform duration-300 group-hover:translate-y-1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <polyline points="19 14 12 21 5 14" />
                </svg>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#080808]/70 group-hover:text-[#FF3D0A]">
                  Explore Work
                </span>
              </a>

              <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-[#8C8980]">
                <span>{heroMeta.format}</span>
                <span className="h-2.5 w-px bg-[#080808]/15" />
                <span>{heroMeta.frameRate}</span>
                <span className="h-2.5 w-px bg-[#080808]/15" />
                <span>{heroMeta.timecode}</span>
              </div>
            </div>
          </div>

          {/* Right column: Square 1:1 photo placeholder beside hero introduction */}
          <div className="lg:col-span-5">
            <Reveal variant="scale" className="relative mx-auto max-w-[440px] w-full lg:ml-auto">
              <div ref={frameRef} className="relative">
                <figure className="relative aspect-square w-full overflow-hidden rounded-2xl md:rounded-3xl border border-[#080808]/08 bg-[#ECE9E2] shadow-sm">
                  {/* REPLACE HERO IMAGE HERE */}
                  <img
                    src={images.hero}
                    alt={`${identity.name} — profile portrait photo placeholder`}
                    loading="eager"
                    decoding="async"
                    width={800}
                    height={800}
                    className="media-grade absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />

                  {/* Refined clean slate HUD overlay with portrait-friendly placement */}
                  <figcaption className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 pointer-events-none">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2 rounded-full bg-[#080808]/80 px-3 py-1.5 backdrop-blur-md text-white">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF3D0A]" />
                        <span className="text-[0.6875rem] font-mono uppercase tracking-wider">
                          REC · 4K
                        </span>
                      </div>
                      <span className="rounded-full bg-white/85 px-3 py-1.5 text-[0.6875rem] font-mono font-medium text-[#080808] backdrop-blur-md shadow-xs">
                        CAM 01
                      </span>
                    </div>

                    <div className="rounded-xl bg-[#080808]/75 p-4 backdrop-blur-md text-white">
                      <span className="text-[0.6875rem] font-mono uppercase tracking-wider text-[#FF3D0A]">
                        {identity.role}
                      </span>
                      <p className="mt-1 font-display text-base font-bold leading-tight tracking-tight">
                        {identity.name}
                      </p>
                    </div>
                  </figcaption>

                  {/* Subtle timeline playhead */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 bg-black/20"
                  >
                    <div className="h-full w-[42%] bg-[#FF3D0A]" />
                  </div>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Kinetic typography marquee band ───────────────────────── */}
      <div
        className="relative overflow-hidden border-y border-[#080808]/08 bg-[#ECE9E2]/60 py-4"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap pr-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-sm font-semibold tracking-tight text-[#080808]/60 md:text-base">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF3D0A]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
