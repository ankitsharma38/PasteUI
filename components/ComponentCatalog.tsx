"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/designs";
import DesignGrid from "@/components/DesignGrid";

export default function ComponentCatalog() {
  const [query, setQuery] = useState("");
  const totalDesigns = categories.reduce((acc, c) => acc + c.designs.length, 0);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredDesigns = useMemo(() => {
    if (!normalizedQuery) return [];
    return categories.flatMap((c) =>
      c.designs.map((d) => ({
        ...d,
        categorySlug: c.slug,
        categoryName: c.name,
      })).filter(
        (d) =>
          d.title.toLowerCase().includes(normalizedQuery) ||
          d.description.toLowerCase().includes(normalizedQuery) ||
          d.tags.some((t) => t.toLowerCase().includes(normalizedQuery)) ||
          d.categoryName.toLowerCase().includes(normalizedQuery)
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
              Component Library
            </h1>
            <p className="mt-1 text-sm text-muted">
              Explore {totalDesigns} prompt-tested components across {categories.length} categories.
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
              placeholder="Search navbars, pricing, bento, hero..."
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
              <p className="text-sm font-semibold text-ink">No matching components found</p>
              <p className="mt-1 text-xs text-muted">
                Try searching for &quot;navbar&quot;, &quot;pricing&quot;, &quot;stat&quot;, &quot;pill&quot;, or &quot;hero&quot;.
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
        <div className="space-y-12">
          {categories.map((c) => {
            const isNavbar = c.slug === "navbar";
            return (
              <section key={c.slug} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-3">
                  <div>
                    <h2 className="text-lg font-bold text-ink sm:text-xl">{c.name}</h2>
                    <p className="text-xs text-muted mt-0.5">{c.description}</p>
                  </div>
                  <Link
                    href={`/components/${c.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-text hover:underline"
                  >
                    <span>View all ({c.designs.length})</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>

                <DesignGrid
                  designs={c.designs}
                  isNavbarCategory={isNavbar}
                  headingLevel="h3"
                />
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
