import { contact, identity } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { IconArrow, IconDiagonal } from "./SectionHeading";

/* --------------------------------------------------------------------------
   CONTACT — large interactive CTA
   -------------------------------------------------------------------------- */

const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}`;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#080808]/08 py-20 md:py-28 lg:py-36"
    >
      <div className="shell relative">
        {/* Header */}
        <Reveal className="rule block w-full bg-[#080808]/10" variant="scale" />
        <Reveal delay={60} className="mt-6 flex items-center gap-3">
          <span className="type-meta font-semibold text-[#FF3D0A]">05</span>
          <span className="h-2.5 w-px bg-[#080808]/20" aria-hidden="true" />
          <span className="type-meta text-[#5A5852]">Contact</span>
          <span className="ml-auto flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FF3D0A] animate-pulse" aria-hidden="true" />
            <span className="type-meta text-[#5A5852] font-semibold">{identity.availability}</span>
          </span>
        </Reveal>

        <h2 className="type-display mt-8 text-[clamp(2.75rem,8vw,7rem)] font-extrabold tracking-[-0.038em] text-[#080808] leading-[1.02] md:mt-12">
          <Reveal delay={120} className="block">
            Have something
          </Reveal>
          <Reveal delay={180} className="block">
            <span className="text-[#5A5852]">worth</span> watching
            <span className="text-[#FF3D0A]">?</span>
          </Reveal>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* CTA column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-[38ch] text-[1.125rem] leading-[1.65] font-normal text-[#5A5852] md:text-[1.25rem]">
                {identity.contactSupport}
              </p>
            </Reveal>

            {/* REPLACE EMAIL HERE → data/portfolio.ts → contact.email */}
            <Reveal delay={120} className="mt-8">
              <a
                href={mailto}
                className="group inline-flex items-center gap-4 rounded-full bg-[#FF3D0A] px-8 py-4.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#E03507] hover:shadow-lg hover:shadow-[#FF3D0A]/25 hover:scale-[1.02]"
              >
                <span>Start a project</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <IconArrow className="h-4 w-4" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={180} className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="type-meta text-[#8C8980]">Or write directly:</span>
              <a
                href={mailto}
                className="font-mono text-sm font-semibold text-[#080808] underline decoration-[#FF3D0A] underline-offset-4 transition-colors hover:text-[#FF3D0A]"
              >
                {contact.email}
              </a>
            </Reveal>
          </div>

          {/* Socials column */}
          <div className="lg:col-span-5 lg:pt-2">
            <Reveal className="rule block w-full bg-[#080808]/10" variant="scale" />
            <p className="type-meta mt-6 text-[#8C8980]">Elsewhere</p>

            <ul className="mt-4">
              {/* REPLACE SOCIAL LINK HERE → data/portfolio.ts → contact.socials */}
              {contact.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-4 border-b border-[#080808]/08 py-4.5 transition-[padding] duration-300 hover:pl-2"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="font-display text-base font-bold text-[#080808] transition-colors duration-200 group-hover:text-[#FF3D0A] md:text-lg">
                        {social.label}
                      </span>
                      <span className="font-mono text-xs text-[#8C8980]">{social.handle}</span>
                    </span>
                    <IconDiagonal className="h-3.5 w-3.5 shrink-0 text-[#8C8980] transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF3D0A]" />
                  </a>
                </li>
              ))}
            </ul>

            <Reveal delay={140} className="mt-8">
              <div className="flex items-center justify-between gap-4 rounded-full border border-[#080808]/10 bg-white px-5 py-3 shadow-xs">
                <span className="type-meta text-[#5A5852]">Response time</span>
                <span className="font-mono text-xs font-semibold text-[#080808]">Within 24 hours</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
