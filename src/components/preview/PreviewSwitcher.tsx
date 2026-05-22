import Link from "next/link";

export function PreviewSwitcher({ active }: { active: "editorial" | "swiss" }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white/85 px-6 py-3 text-xs backdrop-blur sm:px-10 dark:border-zinc-800 dark:bg-black/85">
      <span className="font-mono uppercase tracking-widest text-zinc-500">
        Design preview
      </span>
      <div className="flex gap-1">
        <Link
          href="/preview/editorial"
          className={`rounded-full px-3 py-1.5 font-mono uppercase tracking-widest transition-colors ${
            active === "editorial"
              ? "bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black"
              : "text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
          }`}
        >
          Editorial
        </Link>
        <Link
          href="/preview/swiss"
          className={`rounded-full px-3 py-1.5 font-mono uppercase tracking-widest transition-colors ${
            active === "swiss"
              ? "bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black"
              : "text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
          }`}
        >
          Swiss
        </Link>
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          ← Current
        </Link>
      </div>
    </div>
  );
}
