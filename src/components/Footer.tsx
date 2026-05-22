import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-zinc-200 px-6 py-10 text-sm text-zinc-500 sm:px-10 dark:border-zinc-800 dark:text-zinc-500">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <p>
          <a href={`mailto:${site.email}`} className="hover:text-zinc-950 dark:hover:text-zinc-50">
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
