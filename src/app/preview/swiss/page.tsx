import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
import { AsymmetricGrid } from "@/components/preview/AsymmetricGrid";
import { PreviewSwitcher } from "@/components/preview/PreviewSwitcher";

export const metadata = { title: "Swiss preview" };

export default function SwissPreview() {
  return (
    <div className="bg-white text-black [font-family:var(--font-tight),ui-sans-serif,system-ui] dark:bg-zinc-950 dark:text-white">
      <PreviewSwitcher active="swiss" />

      <header className="border-b border-zinc-900 px-6 py-10 sm:px-10 dark:border-zinc-100">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-4 sm:gap-x-6">
          <p className="col-span-12 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:col-span-3">
            ※ 001 / Portfolio
          </p>
          <h1 className="col-span-12 text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.04em] sm:col-span-9">
            {site.name.split(" ").map((w, i) => (
              <span key={w} className="block">
                {w}
                {i === 0 && (
                  <span className="ml-3 inline-block align-top text-[0.4em] font-normal tracking-normal text-zinc-500">
                    [b. designer]
                  </span>
                )}
              </span>
            ))}
          </h1>
        </div>
      </header>

      <section className="border-b border-zinc-300 px-6 py-12 sm:px-10 dark:border-zinc-800">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-4 sm:gap-x-6">
          <p className="col-span-12 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:col-span-3">
            ※ About
          </p>
          <p className="col-span-12 text-lg leading-snug tracking-tight sm:col-span-9 sm:text-2xl">
            {site.shortBio}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="mb-10 grid grid-cols-12 items-baseline gap-x-4 border-b border-zinc-900 pb-3 sm:gap-x-6 dark:border-zinc-100">
          <p className="col-span-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            ※ Index
          </p>
          <h2 className="col-span-6 text-base font-medium uppercase tracking-[0.2em]">
            Selected works
          </h2>
          <span className="col-span-3 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            N={projects.length.toString().padStart(2, "0")}
          </span>
        </div>

        <AsymmetricGrid
          projects={projects}
          renderCard={(project, aspectClass) => (
            <Link href={`/work/${project.slug}`} className="group block">
              <div className={`relative w-full overflow-hidden bg-zinc-100 ${aspectClass}`}>
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  unoptimized={project.cover.endsWith(".gif")}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <span className="absolute left-3 top-3 bg-[#e63946] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                  {project.year}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-12 gap-x-2 gap-y-1 border-t border-zinc-900 pt-2 dark:border-zinc-100">
                <p className="col-span-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Title
                </p>
                <h3 className="col-span-10 text-base font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="col-span-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Tags
                </p>
                <p className="col-span-10 font-mono text-[11px] uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                  {project.tags.join(" / ")}
                </p>
              </div>
            </Link>
          )}
        />
      </div>
    </div>
  );
}
