import { services } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { IconArrow, SectionHeading } from "./SectionHeading";

/* --------------------------------------------------------------------------
   SERVICES — large editorial rows rather than feature cards
   -------------------------------------------------------------------------- */

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-[#080808]/08 py-20 md:py-28 lg:py-36"
    >
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Services"
          title={
            <>
              What I <span className="text-[#FF3D0A]">Do</span>
            </>
          }
          aside={
            <span className="type-meta text-[#8C8980]">
              {String(services.length).padStart(2, "0")} Disciplines
            </span>
          }
        />

        <ul className="mt-12 md:mt-16">
          {services.map((service, i) => (
            <Reveal as="li" key={service.index} delay={i * 60}>
              <a
                href="#contact"
                className="group relative grid grid-cols-[2.75rem_1fr] items-start gap-x-4 border-t border-[#080808]/09 py-7 outline-none transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[4rem_1fr] sm:gap-x-8 sm:py-9 lg:grid-cols-[5rem_minmax(0,28rem)_minmax(0,1fr)_3.5rem] lg:gap-x-10 lg:py-10"
              >
                {/* Expanding orange-red accent line */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-0.5 w-0 bg-[#FF3D0A] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full group-focus-visible:w-full"
                />

                <span className="font-mono text-xs font-semibold text-[#8C8980] transition-colors duration-300 group-hover:text-[#FF3D0A]">
                  {service.index}
                </span>

                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#080808] transition-[transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:text-[#FF3D0A] sm:text-3xl lg:text-4xl">
                    {service.name}
                  </h3>

                  {/* Tags for mobile */}
                  <div className="mt-3 flex flex-wrap gap-2 lg:hidden">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-3 py-1 font-mono text-[0.6875rem] font-medium text-[#5A5852] border border-[#080808]/08">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-2 mt-4 sm:col-span-1 sm:col-start-2 sm:mt-5 lg:col-span-1 lg:col-start-3 lg:mt-1">
                  <p className="max-w-[46ch] text-sm leading-relaxed text-[#5A5852] md:text-base">
                    {service.description}
                  </p>
                  <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#080808]/10 bg-white px-3 py-1 font-mono text-[0.6875rem] font-medium text-[#5A5852] transition-colors duration-300 group-hover:border-[#FF3D0A]/30 group-hover:text-[#080808]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#080808]/15 bg-white text-[#080808] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:border-[#FF3D0A] group-hover:bg-[#FF3D0A] group-hover:text-white lg:flex">
                  <IconArrow className="h-3 w-3" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 border-t border-[#080808]/08 pt-7">
          <p className="max-w-[52ch] text-sm leading-relaxed text-[#5A5852] md:text-base">
            {/* Not sure which one you need? Most projects blend two or three —
            send the idea and I&apos;ll tell you honestly what it requires. */}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
