import { useEffect, useRef, useState } from "react";

/**
 * Elegant custom cursor: a precise dot plus a lagging ring.
 * Rendered only on devices with a fine pointer and when motion is allowed.
 * Positions are written straight to the DOM inside one rAF loop, so React
 * never re-renders on mouse move.
 */
export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let scale = 1;
    let scaleTarget = 1;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      const el = event.target as HTMLElement | null;
      const interactive = el?.closest(
        'a, button, [role="button"], [data-cursor="grow"], input, textarea',
      );
      scaleTarget = interactive ? 1.9 : 1;
    };

    const onLeave = () => {
      scaleTarget = 1;
    };

    const render = () => {
      ring.x += (target.x - ring.x) * 0.16;
      ring.y += (target.y - ring.y) * 0.16;
      scale += (scaleTarget - scale) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onLeave);
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onLeave);
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-8 w-8 rounded-full border border-bone/25 transition-colors duration-500"
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-[5px] w-[5px] rounded-full bg-acid"
      />
    </div>
  );
}
