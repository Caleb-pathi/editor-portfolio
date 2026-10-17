import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../hooks";
import { cn } from "../utils/cn";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  /** ms — applied through a CSS variable so no inline transition is needed */
  delay?: number;
  variant?: "up" | "x" | "scale";
  as?: ElementType;
};

const variantClass = {
  up: "reveal",
  x: "reveal-x",
  scale: "reveal-scale",
} as const;

/**
 * Scroll reveal wrapper. Adds `.is-in` once the element enters the viewport.
 * Disabled automatically for `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn(visible && "is-in", variantClass[variant], className)}
      style={delay ? ({ "--rd": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
