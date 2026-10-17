import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../data/portfolio";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { IconArrow, SectionHeading } from "./SectionHeading";

/* --------------------------------------------------------------------------
   TESTIMONIALS — subtle glass cards inside a dependency-free slider.
   Scroll-snap track on small screens, three-up row on desktop.
   -------------------------------------------------------------------------- */

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 20;
    setIndex(Math.round(track.scrollLeft / step));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="relative border-t border-[#080808]/08 py-20 md:py-28 lg:py-36"
    >
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Testimonials"
          title={
            <>
              What People <span className="text-[#FF3D0A]">Say</span>
            </>
          }
          aside={
            <span className="type-meta text-[#8C8980]">
              {String(testimonials.length).padStart(2, "0")} Endorsements
            </span>
          }
        />

        <Reveal className="mt-12 md:mt-16">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:snap-none lg:overflow-visible"
          >
            {/* REPLACE WITH REAL TESTIMONIALS → data/portfolio.ts */}
            {testimonials.map((item, i) => (
              <figure
                key={`${item.author}-${i}`}
                data-card
                className="group relative flex w-[86vw] max-w-[86vw] min-w-0 shrink-0 snap-start flex-col justify-between rounded-2xl md:rounded-3xl border border-[#080808]/08 bg-white p-6 sm:p-7 shadow-xs transition-[border-color,box-shadow] duration-300 hover:border-[#080808]/20 hover:shadow-md sm:w-[54vw] sm:max-w-none lg:w-auto lg:min-w-0 lg:flex-1 lg:p-8"
              >
                {/* Oversized editorial quote mark */}
                <span
                  aria-hidden="true"
                  className="font-display pointer-events-none absolute top-4 right-6 select-none text-[4.5rem] leading-none text-[#080808]/06"
                >
                  &rdquo;
                </span>

                <blockquote className="relative min-w-0 w-full overflow-hidden">
                  <span
                    aria-hidden="true"
                    className="absolute -left-0 top-1 block h-[calc(100%-0.5rem)] w-0.5 bg-[#080808]/15 transition-colors duration-300 group-hover:bg-[#FF3D0A]"
                  />
                  <p className="pl-4 sm:pl-5 text-[0.9375rem] leading-[1.65] font-normal text-[#080808] sm:text-[1.0625rem] break-words whitespace-normal">
                    {item.quote}
                  </p>
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3 border-t border-[#080808]/08 pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F4F1] border border-[#080808]/10 text-xs font-mono font-semibold text-[#080808]"
                  >
                    {item.author.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold tracking-tight text-[#080808]">
                      {item.author}
                    </p>
                    <p className="font-mono text-xs text-[#8C8980]">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Controls — mobile / tablet only */}
          <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial position">
              {testimonials.map((item, i) => (
                <button
                  key={`${item.author}-dot`}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    const track = trackRef.current;
                    const card = track?.querySelector<HTMLElement>("[data-card]");
                    const step = card ? card.offsetWidth + 24 : 0;
                    track?.scrollTo({ left: i * step, behavior: "smooth" });
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-[#FF3D0A]" : "w-3 bg-[#080808]/20",
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2">
              {([-1, 1] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => nudge(dir)}
                  aria-label={dir === -1 ? "Previous testimonial" : "Next testimonial"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#080808]/15 bg-white text-[#080808] transition-colors duration-200 hover:border-[#080808] hover:bg-black/[0.04]"
                >
                  <IconArrow className={cn("h-3 w-3", dir === -1 && "rotate-180")} />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
