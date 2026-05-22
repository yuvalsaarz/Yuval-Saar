import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
import { AsymmetricGrid } from "@/components/preview/AsymmetricGrid";
import { PreviewSwitcher } from "@/components/preview/PreviewSwitcher";

export const metadata = { title: "Editorial preview" };

export default function EditorialPreview() {
  return (
    <div className="bg-[#fbf8f3] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <PreviewSwitcher active="editorial" />

      <header className="px-6 pt-20 pb-16 sm:px-10 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            Portfolio · 2025
          </p>
          <h1 className="mt-8 font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight">
            {site.name},
            <br />
            <em className="font-serif italic text-zinc-600 dark:text-zinc-400">
              visual communication
            </em>
          </h1>
          <p className="mt-10 max-w-2xl font-serif text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-2xl">
            {site.shortBio}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-32 sm:px-10">
        <div className="mb-12 flex items-baseline justify-between border-b border-zinc-300 pb-4 dark:border-zinc-700">
          <h2 className="font-serif text-2xl italic">Selected work</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {projects.length} projects · 2023—2025
          </span>
        </div>

        <AsymmetricGrid
          projects={projects}
          renderCard={(project, aspectClass) => (
            <Link href={`/work/${project.slug}`} className="group block">
              <div className={`relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 ${aspectClass}`}>
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  unoptimized={project.cover.endsWith(".gif")}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-6">
                <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
                <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 font-serif italic text-zinc-500">
                {project.tags.join(" · ")}
              </p>
            </Link>
          )}
        />
      </div>
    </div>
  );
}
