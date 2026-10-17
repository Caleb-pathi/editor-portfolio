import { capabilities, softwareTools } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { IconArrow } from "./SectionHeading";

/* --------------------------------------------------------------------------
   CAPABILITIES & SOFTWARE I USE — Reorganized into two distinct editorial sections:
   - Section A: Capabilities (What I do: Video Editing, Motion Design, Sound Design)
   - Section B: Software I Use (The tools I use: Adobe After Effects, Adobe Premiere Pro, Adobe Photoshop)
   -------------------------------------------------------------------------- */

export function Skills() {
  return (
    <div className="border-t border-[#080808]/08 py-20 md:py-28 lg:py-36">
      <div className="shell">
        {/* ── Section A: Capabilities ──────────────────────────────── */}
        <section aria-label="Capabilities">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="type-meta font-semibold text-[#FF3D0A]">Capabilities</span>
              <span className="h-2.5 w-px bg-[#080808]/20" aria-hidden="true" />
              <span className="type-meta text-[#5A5852]">
                {String(capabilities.length).padStart(2, "0")} Disciplines
              </span>
            </div>
            <span className="type-meta text-[#8C8980]">Hover to expand</span>
          </Reveal>

          <ul className="mt-8 border-t border-[#080808]/09">
            {capabilities.map((cap, i) => (
              <Reveal as="li" key={cap.name} delay={i * 40} variant="x">
                <div className="group relative grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-b border-[#080808]/07 py-4.5 transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[3rem_1fr_auto] sm:gap-x-6 sm:py-5 md:grid-cols-[3.5rem_minmax(0,22rem)_1fr_auto]">
                  {/* Vibrant orange-red indicator line */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 top-0 h-full w-0 bg-[#FF3D0A] transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[3px] sm:-left-6"
                  />

                  <span className="font-mono text-xs font-semibold text-[#8C8980] transition-colors duration-300 group-hover:text-[#FF3D0A]">
                    {cap.code}
                  </span>

                  <h3 className="font-display text-xl font-bold tracking-tight text-[#080808] transition-[transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:text-[#FF3D0A] sm:text-2xl md:text-3xl">
                    {cap.name}
                  </h3>

                  <p className="col-start-2 mt-2 max-w-[42ch] text-sm leading-relaxed text-[#5A5852] transition-colors duration-300 group-hover:text-[#080808] sm:col-start-3 sm:mt-0 sm:max-w-[34ch]">
                    {cap.note}
                  </p>

                  <IconArrow className="hidden h-3 w-3 self-center text-[#8C8980] opacity-0 transition-[opacity,transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#FF3D0A] group-hover:opacity-100 sm:block" />
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ── Section B: Software I Use ───────────────────────────── */}
        <section aria-label="Software I Use" className="mt-16 md:mt-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="type-meta font-semibold text-[#FF3D0A]">Software I Use</span>
              <span className="h-2.5 w-px bg-[#080808]/20" aria-hidden="true" />
              <span className="type-meta text-[#5A5852]">
                {String(softwareTools.length).padStart(2, "0")} Applications
              </span>
            </div>
            <span className="type-meta text-[#8C8980]">Production Stack</span>
          </Reveal>

          <ul className="mt-8 border-t border-[#080808]/09">
            {softwareTools.map((tool, i) => (
              <Reveal as="li" key={tool.name} delay={i * 40} variant="x">
                <div className="group relative grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-b border-[#080808]/07 py-4.5 transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[3rem_1fr_auto] sm:gap-x-6 sm:py-5 md:grid-cols-[3.5rem_minmax(0,22rem)_1fr_auto]">
                  {/* Vibrant orange-red indicator line */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 top-0 h-full w-0 bg-[#FF3D0A] transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[3px] sm:-left-6"
                  />

                  <span className="font-mono text-xs font-semibold text-[#8C8980] transition-colors duration-300 group-hover:text-[#FF3D0A]">
                    {tool.code}
                  </span>

                  <h3 className="font-display text-xl font-bold tracking-tight text-[#080808] transition-[transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:text-[#FF3D0A] sm:text-2xl md:text-3xl">
                    {tool.name}
                  </h3>

                  <p className="col-start-2 mt-2 max-w-[42ch] text-sm leading-relaxed text-[#5A5852] transition-colors duration-300 group-hover:text-[#080808] sm:col-start-3 sm:mt-0 sm:max-w-[34ch]">
                    {tool.note}
                  </p>

                  <IconArrow className="hidden h-3 w-3 self-center text-[#8C8980] opacity-0 transition-[opacity,transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#FF3D0A] group-hover:opacity-100 sm:block" />
                </div>
              </Reveal>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
