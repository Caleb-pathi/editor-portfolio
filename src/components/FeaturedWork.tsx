import { useState } from "react";
import { featuredWork, videos, type VideoProject } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VideoCard } from "./VideoCard";
import { VideoModal } from "./VideoModal";

export function FeaturedWork() {
  const [active, setActive] = useState<VideoProject | null>(null);

  return (
    <section id="work" className="relative py-20 md:py-28 lg:py-36">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="Selected Work"
          title={
            <>
              Selected <span className="text-[#FF3D0A]">Work</span>
            </>
          }
          subtitle={featuredWork.subheading}
          aside={
            <>
              <span className="type-meta text-[#8C8980]">
                {String(featuredWork.count).padStart(2, "0")} Projects
              </span>
              <span className="h-2.5 w-px bg-[#080808]/15" aria-hidden="true" />
              <span className="type-meta text-[#8C8980]">2025 — 2026</span>
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:mt-16 lg:grid-cols-2 lg:gap-8">
          {videos.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 2) * 90}
              className={i % 2 === 1 ? "lg:mt-12" : undefined}
            >
              <VideoCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
