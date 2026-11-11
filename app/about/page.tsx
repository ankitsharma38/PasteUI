import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export const metadata = { title: "About — PasteUI" };

const principles = [
  {
    title: "Prompts with structural specs",
    desc: "Get explicit architectural instructions that any AI coding assistant (Claude, Cursor, v0, ChatGPT) can tailor directly to your existing design system.",
    icon: <Sparkles className="text-accent-text" size={18} aria-hidden="true" />,
  },
  {
    title: "Accessible and theme-safe",
    desc: "Responsive breakpoints, visible keyboard focus rings, semantic tokens, and WCAG-verified contrast ratios tested across light and dark modes.",
    icon: <ShieldCheck className="text-accent-text" size={18} aria-hidden="true" />,
  },
  {
    title: "Zero setup friction",
    desc: "One-click copy buttons for both natural-language layout prompts and clean, dependency-free Tailwind JSX components.",
    icon: <Zap className="text-accent-text" size={18} aria-hidden="true" />,
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Title Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Crafting prompt-first UI layouts for modern builders.
        </h1>
        <p className="mt-5 max-w-[65ch] text-base sm:text-lg leading-relaxed text-muted">
          AI coding assistants build clean interfaces when given clear layout constraints and interactive state rules. PasteUI provides pre-tested prompts and matching Tailwind CSS markup so you can ship consistent pages in minutes.
        </p>
      </div>

      {/* Principles — clean unboxed hairline grid */}
      <div className="mt-14 grid gap-px bg-line border border-line rounded-2xl overflow-hidden sm:grid-cols-3">
        {principles.map((item) => (
          <div key={item.title} className="bg-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 mb-4">
                {item.icon}
              </div>
              <h2 className="text-base font-bold text-ink">{item.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Target Audience Section */}
      <div className="mt-12 rounded-2xl border border-line bg-panel p-8">
        <h2 className="text-xl font-bold text-ink">Built for speed and clarity</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted max-w-[65ch]">
          Whether you are an independent founder launching an MVP, a frontend engineer working in Cursor, or a designer assembling interactive prototypes, PasteUI gives you dependable starting points with full control.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/components"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-accent px-5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            <span>Explore Component Library</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-line bg-card px-5 text-xs font-medium text-ink hover:border-ink/40 hover:bg-subtle transition-colors"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
