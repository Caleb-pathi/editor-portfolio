import { useEffect, useRef, useState } from "react";

/* --------------------------------------------------------------------------
   useReveal — one IntersectionObserver per element.
   Adds `.is-in` the first time the element enters the viewport, then stops
   observing. Respects prefers-reduced-motion by never hiding content.
   -------------------------------------------------------------------------- */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string },
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -8% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return { ref, visible };
}

/* --------------------------------------------------------------------------
   useScrollState — cheap scroll listener (single rAF-throttled reader)
   -------------------------------------------------------------------------- */
export function useScrollState() {
  const [state, setState] = useState({ scrolled: false, progress: 0 });

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const next = {
        scrolled: y > 24,
        progress: max > 0 ? Math.min(1, Math.max(0, y / max)) : 0,
      };
      // Only re-render when something actually changed.
      setState((prev) =>
        prev.scrolled === next.scrolled &&
        Math.abs(prev.progress - next.progress) < 0.0005
          ? prev
          : next,
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return state;
}

/* --------------------------------------------------------------------------
   useActiveSection — which section id is currently in view
   -------------------------------------------------------------------------- */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* --------------------------------------------------------------------------
   useLockBodyScroll — used by the video modal
   -------------------------------------------------------------------------- */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [locked]);
}

/* --------------------------------------------------------------------------
   useParallax — subtle translate driven by scroll position
   -------------------------------------------------------------------------- */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  strength = 24,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (rect.bottom < -200 || rect.top > viewport + 200) return;
      const ratio = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      node.style.setProperty(
        "--parallax",
        `${(-ratio * strength).toFixed(2)}px`,
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}

/* --------------------------------------------------------------------------
   useSmoothScrollTo — anchor navigation with fixed-header offset
   -------------------------------------------------------------------------- */
export function scrollToSection(hash: string) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const offset = 64;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: reduce ? Math.max(0, top) : Math.max(0, top),
    behavior: reduce ? "auto" : "smooth",
  });
}
