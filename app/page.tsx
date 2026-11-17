import Link from "next/link";
import { categories } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import HeroWorkbench from "@/components/HeroWorkbench";
import PromptAnatomy from "@/components/PromptAnatomy";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Cpu } from "lucide-react";

export default function Home() {
  const totalDesigns = categories.reduce((acc, c) => acc + c.designs.length, 0);
  const navItem = categories.find((c) => c.slug === "navbar")?.designs[0];
  const pricingItem = categories.find((c) => c.slug === "pricing")?.designs[0];
  const statItem = categories.find((c) => c.slug === "card")?.designs[0];
  const shimmerItem = categories.find((c) => c.slug === "button")?.designs[1];

  return (
    <div className="flex flex-col pb-24">
      {/* 1. First Viewport: Motive, Vision & Interactive Prompt Workbench */}
      <section className="border-b border-line bg-bg pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1 text-xs font-mono font-medium text-muted mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-text" />
                <span>The Prompt-First Design System for AI</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Crafted UI Prompts. <br className="hidden sm:inline" />
                Production Tailwind Code.
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted leading-relaxed">
                Stop debugging hallucinated CSS and broken dark mode contrast. PasteUI gives Cursor, Claude, and v0 pre-tested layout prompts and responsive JSX markup that compile right the first time.
              </p>
            </div>

            {/* Single Action Area (No duplicate buttons) */}
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/components"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-md"
                >
                  <Sparkles size={16} aria-hidden="true" />
                  <span>Explore Library</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href="#motive"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-card px-5 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-subtle"
                >
                  <span>Why Prompt-First?</span>
                </a>
              </div>
              <p className="font-mono text-xs text-muted tabular-nums">
                {totalDesigns} tested patterns across {categories.length} categories
              </p>
            </div>
          </div>

          {/* Interactive Hero Workbench with responsive tabs and live preview */}
          <HeroWorkbench />
        </div>
      </section>

      {/* 2. Motive & Vision: Why AI Coding Needs Deterministic Layout Prompts */}
      <section id="motive" className="border-b border-line bg-panel/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-semibold text-accent-text uppercase tracking-wider">
              Our Vision & Motive
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              Eliminating the trial-and-error loop in AI web development.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed max-w-[65ch]">
              When you prompt an AI with &quot;make a modern navbar&quot;, it guesses breakpoints, uses conflicting margins, ignores mobile viewport bounds, and fails color contrast audits. PasteUI replaces ambiguity with engineered prompt blueprints.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-line bg-card p-6 transition-all hover:border-accent-text/40 hover:shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-text">
                <Cpu size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-bold text-base text-ink">Constraint-Engineered Prompts</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                Every prompt specifies explicit max-widths, flex wrapping rules, and focus rings so your AI assistant writes predictable, bug-free components.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6 transition-all hover:border-accent-text/40 hover:shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-text">
                <Zap size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-bold text-base text-ink">Zero Extra Dependencies</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                Pure standard Tailwind CSS and accessible HTML semantics. No proprietary component library locks, runtime bloat, or brittle packages.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6 transition-all hover:border-accent-text/40 hover:shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-text">
                <ShieldCheck size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-bold text-base text-ink">A11y & Contrast Tested</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                Every sample passes WCAG 4.5:1 contrast standards in both dark and light modes, with keyboard escape keys, modal traps, and skip links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Prompt Anatomy: Typical Prompt vs PasteUI Blueprint */}
      <section className="border-b border-line bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PromptAnatomy />
        </div>
      </section>

      {/* 4. Live Component Samples Showcase */}
      <section className="border-b border-line py-16 sm:py-20 bg-panel/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
          {/* Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-semibold text-accent-text uppercase tracking-wider">
                Production Samples
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Ready-to-paste UI patterns
              </h2>
            </div>
            <Link
              href="/components"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent-text hover:underline"
            >
              <span>View full library ({totalDesigns})</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Featured Full-Width Navigation */}
          {navItem && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span>Featured specimen: Navigation</span>
                <span>Responsive & interactive</span>
              </div>
              <DesignCard design={navItem} forceFullWidth={true} />
            </div>
          )}

          {/* Grid of Highlighted Specimens */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingItem && <DesignCard design={pricingItem} />}
            {statItem && <DesignCard design={statItem} />}
            {shimmerItem && <DesignCard design={shimmerItem} />}
          </div>
        </div>
      </section>

      {/* 5. 3-Step Workflow: How It Works */}
      <section className="border-b border-line py-16 sm:py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-semibold text-accent-text uppercase tracking-wider">
              Simple Workflow
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Three steps from prompt to shipped interface
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-card p-6 text-left">
              <div className="font-mono text-xs font-bold text-accent-text">STEP 01</div>
              <h3 className="mt-3 font-semibold text-base text-ink">Select a Verified Pattern</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                Browse navbars, heroes, pricing tables, cards, and buttons with interactive state previews.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-card p-6 text-left">
              <div className="font-mono text-xs font-bold text-accent-text">STEP 02</div>
              <h3 className="mt-3 font-semibold text-base text-ink">Copy Prompt or Direct JSX</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                Copy the natural language layout prompt to steer Cursor/Claude, or copy pure Tailwind JSX.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-card p-6 text-left">
              <div className="font-mono text-xs font-bold text-accent-text">STEP 03</div>
              <h3 className="mt-3 font-semibold text-base text-ink">Paste and Ship Instantly</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                Watch your AI assistant generate precise, fully accessible, dark-mode ready code without edits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ready to Ship Callout Banner */}
      <section className="py-16 sm:py-20 bg-panel/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
            Build clean, accessible interfaces with AI today.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-xl mx-auto">
            Explore {totalDesigns} responsive, tested UI patterns and start generating production code with confidence.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/components"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-md"
            >
              <Sparkles size={16} aria-hidden="true" />
              <span>Explore All {totalDesigns} Components</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
