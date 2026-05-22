import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="px-6 sm:px-10">
      <section className="max-w-2xl py-20 sm:py-28">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">About</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300">
          <p>{site.shortBio}</p>
          <p>
            This page is a placeholder. Write a longer bio here — practice, interests,
            collaborations, exhibitions, awards.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-zinc-500">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-zinc-500">Location</dt>
            <dd className="mt-1">{site.location}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
