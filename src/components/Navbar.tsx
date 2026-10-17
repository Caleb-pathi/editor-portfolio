import { useEffect, useState } from "react";
import { identity, navLinks, sections } from "../data/portfolio";
import { useActiveSection, useScrollState, scrollToSection } from "../hooks";
import { cn } from "../utils/cn";
import { IconArrow, IconClose } from "./SectionHeading";

/** Stable list of section ids — keeps the IntersectionObserver from re-binding. */
const SECTION_IDS = sections.map((section) => section.id);

export function Navbar() {
  const { scrolled, progress } = useScrollState();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  /* Lock scroll + close on Escape while the mobile menu is open */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      {/* Reading progress — a single purposeful accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] h-px w-full bg-transparent"
      >
        <div
          className="h-full origin-left bg-acid/80"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[65] transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-[#080808]/08 bg-[#F5F4F1]/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-18 items-center justify-between md:h-20"
        >
          {/* Wordmark inspired by reference: clean geometric badge + stacked title */}
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="group flex items-center gap-3"
            aria-label={`${identity.name} — home`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#080808] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-white" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2.2" fill="#FF3D0A" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.625rem] font-mono uppercase tracking-wider text-ash sm:text-[0.6875rem]">
                Video Editor
              </span>
              <span className="font-display text-[1.0625rem] font-bold leading-none tracking-tight text-[#080808] md:text-[1.15rem]">
                {identity.name}
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-active={active === link.href.slice(1)}
                  onClick={(e) => go(e, link.href)}
                  className="link-line text-sm font-medium text-[#5A5852] transition-colors duration-200 hover:text-[#080808] data-[active=true]:font-semibold data-[active=true]:text-[#080808]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Prominent rounded orange-red pill CTA matching reference Second Nature button */}
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="btn btn-acid hidden px-5 py-2 text-xs font-semibold sm:inline-flex md:text-sm"
            >
              <span>Work With Me</span>
            </a>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#080808]/15 text-[#080808] md:hidden"
            >
              {open ? (
                <IconClose />
              ) : (
                <span className="flex flex-col gap-1">
                  <span className="block h-0.5 w-4 bg-[#080808]" />
                  <span className="block h-0.5 w-4 bg-[#080808]" />
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[64] flex flex-col justify-between bg-ink/95 backdrop-blur-2xl transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="shell relative flex flex-1 flex-col justify-center pt-20">
          <p className="type-meta text-ash-dim">Menu</p>
          <ul className="mt-8 space-y-1">
            {sections.map((section, i) => (
              <li
                key={section.id}
                className="border-b border-bone/[0.07] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: open ? "none" : "translateY(14px)",
                  opacity: open ? 1 : 0,
                  transitionDelay: `${100 + i * 55}ms`,
                }}
              >
                <a
                  href={`#${section.id}`}
                  onClick={(e) => go(e, `#${section.id}`)}
                  className="flex items-baseline gap-4 py-4"
                  tabIndex={open ? 0 : -1}
                >
                  <span className="type-meta text-acid">{section.index}</span>
                  <span className="type-display text-[2.15rem]">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="shell relative pb-10">
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            tabIndex={open ? 0 : -1}
            className="btn w-full"
          >
            <span>Let&apos;s work</span>
            <IconArrow className="arrow" />
          </a>
          <p className="type-meta mt-6 text-ash-dim">{identity.location}</p>
        </div>
      </div>
    </>
  );
}
