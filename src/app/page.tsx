import { projects } from "@/content/projects";
import { site } from "@/lib/site";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="px-6 sm:px-10">
      <section className="max-w-3xl py-20 sm:py-28">
        <h1 className="text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          {site.name}
          <span className="block text-zinc-500">{site.tagline}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
          {site.shortBio}
        </p>
      </section>

      <section className="grid grid-cols-1 gap-x-6 gap-y-12 pb-20 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
