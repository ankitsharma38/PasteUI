"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/designs";

export function MobileCategoryNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden border-b border-line bg-panel px-4 py-2.5 overflow-x-auto studio-scroll">
      <nav aria-label="Component categories" className="flex items-center gap-1.5 w-max">
        <Link
          href="/components"
          aria-current={pathname === "/components" ? "page" : undefined}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
            pathname === "/components"
              ? "bg-card text-ink font-semibold border border-line"
              : "text-muted hover:text-ink hover:bg-subtle/60"
          }`}
        >
          All ({categories.reduce((acc, c) => acc + c.designs.length, 0)})
        </Link>
        {categories.map((c) => {
          const active = pathname === `/components/${c.slug}`;
          return (
            <Link
              key={c.slug}
              href={`/components/${c.slug}`}
              aria-current={active ? "page" : undefined}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                active
                  ? "bg-card text-ink font-semibold border border-line"
                  : "text-muted hover:text-ink hover:bg-subtle/60"
              }`}
            >
              {c.name} ({c.designs.length})
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const totalCount = categories.reduce((acc, c) => acc + c.designs.length, 0);

  return (
    <nav aria-label="Component categories" className="flex flex-col gap-1 p-3 text-sm">
      <div className="px-3 py-2 text-xs font-semibold text-muted">
        Categories
      </div>

      <Link
        href="/components"
        aria-current={pathname === "/components" ? "page" : undefined}
        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
          pathname === "/components"
            ? "bg-card border border-line text-ink font-semibold"
            : "text-muted hover:text-ink hover:bg-subtle/60 border border-transparent"
        }`}
      >
        <span>All Components</span>
        <span className="font-mono tabular-nums text-xs text-muted">{totalCount}</span>
      </Link>

      {categories.map((c) => {
        const active = pathname === `/components/${c.slug}`;
        return (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            aria-current={active ? "page" : undefined}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
              active
                ? "bg-card border border-line text-ink font-semibold"
                : "text-muted hover:text-ink hover:bg-subtle/60 border border-transparent"
            }`}
          >
            <span>{c.name}</span>
            <span className="font-mono tabular-nums text-xs text-muted">{c.designs.length}</span>
          </Link>
        );
      })}
    </nav>
  );
}
