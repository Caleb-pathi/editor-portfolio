import { useEffect, useRef } from "react";
import type { VideoProject } from "../data/portfolio";
import { useLockBodyScroll } from "../hooks";
import { cn } from "../utils/cn";
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

  const isVertical =
    project.aspect === "vertical" ||
    project.videoUrl.includes("/shorts/") ||
    project.category.toLowerCase().includes("short");

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 md:p-10"
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
        className="modal-overlay absolute inset-0 cursor-default bg-[#080808]/85 backdrop-blur-md"
      />

      <div
        className={cn(
          "modal-panel relative flex w-full flex-col my-auto max-h-[96vh] overflow-y-auto transition-all",
          isVertical ? "max-w-[420px]" : "max-w-5xl",
        )}
      >
        {/* Header */}
        <div className="flex items-end justify-between gap-4 pb-3 sm:pb-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-semibold text-[#FF3D0A]">{project.id}</span>
              <span className="h-2.5 w-px bg-white/20" />
              <span className="font-mono text-xs text-white/80 truncate">{project.category}</span>
              {isVertical && (
                <span className="rounded-full bg-[#FF3D0A]/20 px-2 py-0.5 text-[0.625rem] font-mono text-[#FF3D0A] uppercase tracking-wider">
                  9:16
                </span>
              )}
            </div>
            <h3 className="font-display mt-1 truncate text-lg font-bold tracking-tight text-white sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="group flex h-9 sm:h-10 shrink-0 items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 text-xs font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#080808]"
          >
            <IconClose className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:rotate-90" />
            <span>Close</span>
            <kbd className="ml-1 hidden rounded-sm bg-white/20 px-1.5 py-0.5 text-[0.625rem] font-mono sm:inline-block">
              Esc
            </kbd>
          </button>
        </div>

        {/* Player card */}
        <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-white shadow-2xl">
          <div
            className={cn(
              "relative w-full bg-black overflow-hidden",
              isVertical
                ? "aspect-[9/16] max-h-[66vh] sm:max-h-[72vh] mx-auto"
                : "aspect-video",
            )}
          >
            {/* ── VIDEO PLAYER IFRAME ── */}
            <iframe
              key={project.id}
              src={project.videoUrl}
              title={`${project.title} — ${project.category}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6 sm:py-4">
            <p className="max-w-[54ch] text-xs leading-relaxed text-[#5A5852] sm:text-sm">
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
