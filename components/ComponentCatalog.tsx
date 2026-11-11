"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { categories } from "@/data/designs";
import DesignGrid from "@/components/DesignGrid";

export default function ComponentCatalog() {
  const [query, setQuery] = useState("");
  const totalDesigns = categories.reduce((acc, c) => acc + c.designs.length, 0);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredDesigns = useMemo(() => {
    if (!normalizedQuery) return [];
    return categories.flatMap((c) =>
      c.designs.filter(
        (d) =>
          d.title.toLowerCase().includes(normalizedQuery) ||
          d.description.toLowerCase().includes(normalizedQuery) ||
          d.tags.some((t) => t.toLowerCase().includes(normalizedQuery)) ||
          c.name.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [normalizedQuery]);

  return (
    <div className="w-full">
      {/* Header + Search Bar */}
      <div className="mb-8 border-b border-line pb-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Components
            </h1>
            <p className="mt-1 text-sm text-muted">
              Select a category or search across {totalDesigns} prompt-ready components.
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search
              size={15}
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search navbars, bento, pill, hero..."
              aria-label="Search components"
              className="h-10 w-full rounded-xl border border-line bg-card pl-9 pr-9 text-sm text-ink placeholder:text-muted focus:border-accent-text focus:outline-none transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="cursor-pointer absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted hover:text-ink"
              >
                <X size={14} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filtered Search Results OR Category Overview Grid */}
      {normalizedQuery ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-mono tabular-nums">
              {filteredDesigns.length} {filteredDesigns.length === 1 ? "result" : "results"} for &quot;{query}&quot;
            </span>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="cursor-pointer text-accent-text hover:underline font-medium"
            >
              Reset filter
            </button>
          </div>

          {filteredDesigns.length > 0 ? (
            <DesignGrid designs={filteredDesigns} />
          ) : (
            <div className="rounded-xl border border-line bg-card p-10 text-center">
              <p className="text-sm font-semibold text-ink">No matching components</p>
              <p className="mt-1 text-xs text-muted">
                Try searching for &quot;sticky&quot;, &quot;hero&quot;, &quot;revenue&quot;, or &quot;pill&quot;.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="cursor-pointer mt-4 rounded-lg border border-line bg-panel px-4 py-2 text-xs font-medium text-ink hover:bg-subtle transition-colors"
              >
                Show all categories
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((c) => {
            const sampleTags = Array.from(
              new Set(c.designs.flatMap((d) => d.tags))
            ).slice(0, 3);
            return (
              <Link
                key={c.slug}
                href={`/components/${c.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-line bg-card p-5 transition-colors hover:border-ink/40 hover:bg-cardHover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-semibold text-base text-ink group-hover:text-accent-text transition-colors">
                      {c.name}
                    </h2>
                    <span className="font-mono text-xs text-muted tabular-nums">
                      {c.designs.length}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{c.description}</p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {sampleTags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted group-hover:text-ink transition-colors">
                    <span>Open</span>
                    <ArrowRight
                      size={12}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

