import { identity } from "../data/portfolio";

/* --------------------------------------------------------------------------
   FOOTER — minimal three-part bar
   -------------------------------------------------------------------------- */

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative border-t border-[#080808]/08 bg-[#ECE9E2]/50">
      <div className="shell">
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
          <p className="font-mono text-xs font-semibold text-[#080808]">
            &copy; {year} {identity.name}
          </p>

          <p className="type-meta order-3 text-[#8C8980] md:order-none">
            {identity.roleSplit[0]} <span className="text-[#080808]/30">+</span>{" "}
            {identity.roleSplit[1]}
          </p>

          <a
            href="#top"
            className="group flex items-center gap-2.5 self-start md:self-auto"
            aria-label="Back to top"
          >
            <span className="type-meta font-semibold text-[#5A5852] transition-colors duration-200 group-hover:text-[#080808]">
              Back to top
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#080808]/15 bg-white text-[#080808] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:border-[#FF3D0A] group-hover:bg-[#FF3D0A] group-hover:text-white shadow-xs">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-3 w-3"
              >
                <path
                  d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#080808]/08 py-6 sm:flex-row sm:items-center">
          <p className="type-meta text-[#8C8980]">Designed with intention.</p>
          <p className="type-meta text-[#8C8980]">
            {/* Minimalist editorial portfolio — no noise, no filler. */}
          </p>
        </div>
      </div>
    </footer>
  );
}
