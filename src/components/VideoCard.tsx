import type { VideoProject } from "../data/portfolio";
import { IconArrow, IconPlay } from "./SectionHeading";

type VideoCardProps = {
  project: VideoProject;
  onOpen: (project: VideoProject) => void;
};

/**
 * Premium portfolio card.
 * Glass surface, fine border, grain-graded thumbnail, and a set of
 * restrained hover states (image zoom, metadata shift, accent indicator).
 */
export function VideoCard({ project, onOpen }: VideoCardProps) {
  return (
    <article className="group relative flex flex-col">
      {/* Clean card surface with subtle rounded corners and minimal border */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#080808]/08 bg-white p-4 sm:p-5 transition-[border-color,box-shadow,transform] duration-300 hover:border-[#080808]/20 hover:shadow-md">
        {/* thumbnail button */}
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Play ${project.title} (${project.category})`}
          className="relative block w-full cursor-pointer text-left overflow-hidden rounded-xl md:rounded-2xl"
        >
          <div className="relative aspect-video w-full overflow-hidden bg-[#ECE9E2]">
            {/* REPLACE THUMBNAIL — data/portfolio.ts → videos[n].thumbnail */}
            <img
              src={project.thumbnail}
              alt={`${project.title} — ${project.category} thumbnail`}
              loading="lazy"
              decoding="async"
              width={1200}
              height={675}
              className="media-grade absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />

            {/* Subtle bottom gradient for readability */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"
            />

            {/* Badges on thumbnail */}
            <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4">
              <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-wider text-[#080808] backdrop-blur-md">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4">
              <span className="font-mono text-xs font-semibold text-white">
                {project.duration}
              </span>
              <span className="h-2 w-px bg-white/40" />
              <span className="font-mono text-xs text-white/80">
                {project.year}
              </span>
            </div>

            {/* Play affordance — vibrant orange-red on hover */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#080808] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF3D0A] group-hover:text-white">
                <IconPlay className="ml-0.5 h-4 w-4" />
              </span>
            </span>
          </div>
        </button>

        {/* Card Copy */}
        <div className="px-2 pt-5 pb-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-bold tracking-tight text-[#080808] transition-colors duration-200 group-hover:text-[#FF3D0A] sm:text-2xl">
              {project.title}
            </h3>
            <span className="font-mono text-xs font-semibold text-[#8C8980]">
              {project.id}
            </span>
          </div>

          <p className="mt-2.5 max-w-[42ch] text-sm leading-relaxed text-[#5A5852]">
            {project.description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#080808] transition-colors duration-200 group-hover:text-[#FF3D0A]">
            <span>Watch project</span>
            <IconArrow className="arrow h-2.5 w-2.5" />
          </div>
        </div>
      </div>
    </article>
  );
}
