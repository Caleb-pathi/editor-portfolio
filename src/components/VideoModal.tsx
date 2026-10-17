import { useEffect, useRef } from "react";
import type { VideoProject } from "../data/portfolio";
import { useLockBodyScroll } from "../hooks";
import { IconClose } from "./SectionHeading";

type VideoModalProps = {
  project: VideoProject | null;
  onClose: () => void;
};

/**
 * Premium video modal.
 * · dark overlay + page blur
 * · iframe is mounted only while open (so embeds stay lazy)
 * · ESC to close, backdrop click to close, background scroll locked
 * · focus is moved in on open and restored to the trigger on close
 */
export function VideoModal({ project, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = Boolean(project);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    const raf = window.requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(raf);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-0 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — video player`}
    >
      {/* overlay */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        tabIndex={-1}
        className="modal-overlay absolute inset-0 cursor-default bg-[#080808]/80 backdrop-blur-md"
      />

      <div className="modal-panel relative flex h-full w-full max-w-5xl flex-col sm:h-auto sm:w-[92vw]">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 pb-4">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#FF3D0A]">{project.id}</span>
              <span className="h-2.5 w-px bg-white/20" />
              <span className="font-mono text-xs text-white/80">{project.category}</span>
            </div>
            <h3 className="font-display mt-1.5 truncate text-xl font-bold tracking-tight text-white sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="group flex h-10 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-xs font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#080808]"
          >
            <IconClose className="transition-transform duration-300 group-hover:rotate-90" />
            <span>Close</span>
            <kbd className="ml-1 hidden rounded-sm bg-white/20 px-1.5 py-0.5 text-[0.625rem] font-mono sm:inline-block">
              Esc
            </kbd>
          </button>
        </div>

        {/* Player card */}
        <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white shadow-2xl">
          <div className="relative aspect-video w-full bg-black">
            {/* ── REPLACE VIDEO URL HERE → data/portfolio.ts → videos[n].videoUrl ── */}
            <iframe
              key={project.id}
              src={project.videoUrl}
              title={`${project.title} — ${project.category}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4 sm:px-7">
            <p className="max-w-[54ch] text-sm leading-relaxed text-[#5A5852]">
              {project.description}
            </p>
            <div className="flex items-center gap-3 font-mono text-xs text-[#8C8980]">
              <span>{project.duration}</span>
              <span className="h-2.5 w-px bg-[#080808]/15" aria-hidden="true" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
