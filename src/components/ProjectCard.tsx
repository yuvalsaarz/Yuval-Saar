import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          unoptimized={project.cover.endsWith(".gif")}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium tracking-tight">{project.title}</h3>
        <span className="text-sm text-zinc-500">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-500">{project.tags.join(" · ")}</p>
    </Link>
  );
}
