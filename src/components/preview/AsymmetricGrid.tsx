import type { Project } from "@/content/projects";
import type { ReactNode } from "react";

const SPANS = [
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-6",
];

const ASPECTS = [
  "aspect-[16/9]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[16/9]",
  "aspect-[4/3]",
  "aspect-[4/3]",
];

export function AsymmetricGrid({
  projects,
  renderCard,
}: {
  projects: Project[];
  renderCard: (project: Project, aspectClass: string) => ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
      {projects.map((project, i) => (
        <div key={project.slug} className={SPANS[i % SPANS.length]}>
          {renderCard(project, ASPECTS[i % ASPECTS.length])}
        </div>
      ))}
    </div>
  );
}
