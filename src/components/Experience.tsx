import { metrics } from "../data/portfolio";
import { Reveal } from "./Reveal";

/* --------------------------------------------------------------------------
   EXPERIENCE / STATISTICS
   Retains verified metrics: 40+ Projects Edited and 04 Years Creating.
   -------------------------------------------------------------------------- */

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-[#080808]/08 py-16 md:py-24"
    >
      <div className="shell">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 sm:gap-16 max-w-xl">
            {metrics.map((metric, i) => (
              <div key={metric.label} className="group relative">
                {i > 0 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 sm:-left-8 top-1 h-[calc(100%-0.5rem)] w-px bg-[#080808]/08"
                  />
                ) : null}
                <p className="font-display text-4xl font-extrabold tracking-tight text-[#080808] sm:text-5xl md:text-6xl">
                  {metric.value}
                </p>
                <p className="type-meta mt-3 text-[#5A5852]">{metric.label}</p>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-0.5 w-6 bg-[#080808]/15 transition-[width,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12 group-hover:bg-[#FF3D0A]"
                />
              </div>
            ))}
          </div>
          <p className="type-meta mt-8 text-[#8C8980]">
            Verified project milestones and creative analytics.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
