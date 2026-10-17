import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  aside?: ReactNode;
  className?: string;
};

/**
 * Consistent editorial section header:
 * hairline → meta index/label → oversized display title → optional subtitle
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  aside,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("relative", className)}>
      {/* Clean thin hairline divider */}
      <Reveal className="mb-6 flex items-center gap-3 md:mb-8" variant="scale">
        <span aria-hidden="true" className="type-meta leading-none text-[#080808]/25">
          +
        </span>
        <span className="rule block h-px flex-1 bg-[#080808]/10" aria-hidden="true" />
        <span aria-hidden="true" className="type-meta leading-none text-[#080808]/25">
          +
        </span>
      </Reveal>

      <Reveal className="flex items-center gap-3" delay={60}>
        <span className="type-meta font-semibold text-[#FF3D0A]">{index}</span>
        <span className="h-2.5 w-px bg-[#080808]/20" aria-hidden="true" />
        <span className="type-meta text-[#5A5852]">{eyebrow}</span>
        {aside ? (
          <div className="ml-auto hidden items-center gap-3 md:flex">{aside}</div>
        ) : null}
      </Reveal>

      <Reveal delay={120}>
        <h2 className="type-display mt-5 text-[clamp(2.5rem,6.8vw,5.75rem)] font-extrabold tracking-[-0.035em] text-[#080808] leading-[1.04]">
          {title}
        </h2>
      </Reveal>

      {subtitle ? (
        <Reveal delay={200}>
          <p className="mt-6 max-w-[48ch] text-[1rem] leading-relaxed text-[#5A5852] md:max-w-[56ch] md:text-[1.125rem]">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Shared glyphs                                                       */
/* ------------------------------------------------------------------ */

export function IconArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-3 w-3", className)}
    >
      <path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconDiagonal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-3 w-3", className)}
    >
      <path
        d="M3.5 12.5 12.5 3.5M5.5 3.5h7v7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconPlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 4.6v14.8L20 12 8 4.6Z" />
    </svg>
  );
}

export function IconClose({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
