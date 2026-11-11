import Link from "next/link";
import { categories } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import HeroWorkbench from "@/components/HeroWorkbench";
import PromptAnatomy from "@/components/PromptAnatomy";
import { ArrowRight, Layers } from "lucide-react";

export default function Home() {
  const totalDesigns = categories.reduce((acc, c) => acc + c.designs.length, 0);
  const navItem = categories.find((c) => c.slug === "navbar")?.designs[1];
  const heroItem = categories.find((c) => c.slug === "hero")?.designs[0];
  const statItem = categories.find((c) => c.slug === "card")?.designs[0];
  const btnItem = categories.find((c) => c.slug === "button")?.designs[0];

  return (
    <div className="flex flex-col pb-24">
      {/* 1. First Viewport: Focused Header + Interactive Prompt Workbench */}
      <section className="border-b border-line bg-bg pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Copy the prompt. Ship the UI.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                Curated layout prompts and responsive Tailwind CSS components built for AI coding tools. Inspect live states, verify dark mode contrast, and paste directly into Cursor, Claude, or v0.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/components"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  <Layers size={16} aria-hidden="true" />
                  <span>Browse All Components</span>
                </Link>
                <Link
                  href="/components/navbar"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-card px-5 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-subtle"
                >
                  <span>Live Navbars</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
              <p className="font-mono text-xs text-muted tabular-nums">
                {totalDesigns} interactive patterns across {categories.length} categories
              </p>
            </div>
          </div>

          <HeroWorkbench />
        </div>
      </section>

      {/* 2. Prompt Anatomy & Constraint Engineering */}
      <section className="border-b border-line bg-panel/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <PromptAnatomy />
        </div>
      </section>

      {/* 3. Live Component Showcase */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* Navigation Bar Showcase */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Full-width navigation patterns
                </h2>
                <p className="text-sm text-muted mt-1">
                  Test active pill states, responsive mobile drawers, and viewport widths before copying.
                </p>
              </div>
              <Link
                href="/components/navbar"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline"
              >
                <span>All {categories.find((c) => c.slug === "navbar")?.designs.length} navbars</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {navItem && <DesignCard design={navItem} forceFullWidth={true} />}
          </div>

          {/* Hero & Bento Showcase */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Hero headers and metric cards
                </h2>
                <p className="text-sm text-muted mt-1">
                  Switch between rendered output, constraint prompt, and raw Tailwind JSX inside any card.
                </p>
              </div>
              <Link
                href="/components"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline"
              >
                <span>Open full catalog</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {heroItem && <DesignCard design={heroItem} />}
              {statItem && <DesignCard design={statItem} />}
            </div>
          </div>

          {/* Buttons Matrix */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Buttons and interactive actions
                </h2>
                <p className="text-sm text-muted mt-1">
                  Solid, ink, outline, and ghost action sets with verified contrast and focus states.
                </p>
              </div>
              <Link
                href="/components/button"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline"
              >
                <span>Explore buttons</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {btnItem && <DesignCard design={btnItem} forceFullWidth={true} />}
          </div>
        </div>
      </section>

      {/* 4. Component Directory Index */}
      <section className="pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Component Directory
              </h2>
              <p className="text-sm text-muted mt-1">
                Jump directly into any category in the sandbox dashboard.
              </p>
            </div>
            <Link
              href="/components"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline"
            >
              <span>Launch sandbox</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-px bg-line border border-line rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const sampleTags = Array.from(
                new Set(c.designs.flatMap((d) => d.tags))
              ).slice(0, 3);
              return (
                <Link
                  key={c.slug}
                  href={`/components/${c.slug}`}
                  className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-cardHover"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-ink group-hover:text-accent-text transition-colors">
                        {c.name}
                      </h3>
                      <span className="font-mono text-xs font-medium text-muted tabular-nums">
                        {c.designs.length} {c.designs.length === 1 ? "layout" : "layouts"}
                      </span>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-line">
                    <div className="flex flex-wrap gap-1.5">
                      {sampleTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="text-muted group-hover:text-accent-text group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </Link>
              );
            })}

            {/* Last tile: Request or Browse All */}
            <Link
              href="/contact"
              className="group flex flex-col justify-between bg-panel p-6 transition-colors hover:bg-subtle"
            >
              <div>
                <h3 className="text-base font-bold text-ink group-hover:text-accent-text transition-colors">
                  Request a Pattern
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted">
                  Need a specific layout prompt—pricing grids, command palettes, or multi-step forms? Send a request.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-line">
                <span className="text-xs font-semibold text-accent-text">
                  Suggest a component
                </span>
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="text-accent-text group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
