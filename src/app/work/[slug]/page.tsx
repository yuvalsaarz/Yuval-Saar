import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = [
    project.year.toString(),
    project.course,
    project.institution,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="px-6 sm:px-10">
      <header className="max-w-2xl py-16 sm:py-24">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          ← Back to work
        </Link>
        <h1 className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">{meta}</p>
        {project.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6 text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300">
          {project.summary}
        </p>
      </header>

      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          unoptimized={project.cover.endsWith(".gif")}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto mt-12 max-w-2xl whitespace-pre-line text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        {project.description}
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {project.images.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900"
            >
              <Image
                src={src}
                alt=""
                fill
                unoptimized={src.endsWith(".gif")}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {(project.credits?.length || project.links?.length) && (
        <div className="mx-auto mt-16 max-w-2xl space-y-6 border-t border-zinc-200 pt-8 text-sm dark:border-zinc-800">
          {project.credits && project.credits.length > 0 && (
            <div>
              <h2 className="text-zinc-500">Credits</h2>
              <ul className="mt-2 space-y-1">
                {project.credits.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-300 px-4 py-2 hover:border-zinc-950 dark:border-zinc-700 dark:hover:border-zinc-50"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
