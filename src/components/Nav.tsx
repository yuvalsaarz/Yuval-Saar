import Link from "next/link";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="flex items-center justify-between px-6 py-6 sm:px-10">
      <Link href="/" className="text-sm font-medium tracking-tight">
        {site.name}
      </Link>
      <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/" className="hover:text-zinc-950 dark:hover:text-zinc-50">
          Work
        </Link>
        <Link href="/about" className="hover:text-zinc-950 dark:hover:text-zinc-50">
          About
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
