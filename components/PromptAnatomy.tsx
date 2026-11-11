"use client";
import { useState } from "react";
import { Check, Copy, AlertTriangle, ShieldCheck } from "lucide-react";

const GENERIC_PROMPT = `Create a modern sticky navigation bar for my SaaS app with a logo, some links, and a button using Tailwind CSS.`;

const PASTEUI_PROMPT = `Create a sticky top navigation bar (h-16, z-50) with Tailwind CSS: translucent blurred surface (bg-white/85 dark:bg-zinc-900/85 backdrop-blur, border-b). Left: brand mark + wordmark. Center: horizontal links hidden below md breakpoint. Right: ghost "Sign in" action and solid emerald "Get started" button with visible focus-visible rings. Below md, render a hamburger button with aria-expanded that toggles a slide-down mobile drawer.`;

export default function PromptAnatomy() {
  const [mode, setMode] = useState<"pasteui" | "generic">("pasteui");
  const [copied, setCopied] = useState(false);

  const activeText = mode === "pasteui" ? PASTEUI_PROMPT : GENERIC_PROMPT;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {}
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 items-start">
      {/* Left: Concrete Engineering Reasoning */}
      <div className="lg:col-span-5">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-tight">
          Why AI-generated UI breaks without layout constraints.
        </h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
          Open-ended prompts force models to guess breakpoints, contrast pairs, and keyboard focus rules. PasteUI encodes deterministic specs directly into plain English.
        </p>

        <dl className="mt-8 divide-y divide-line border-t border-b border-line">
          <div className="py-4">
            <dt className="text-sm font-semibold text-ink">Responsive breakpoint rules</dt>
            <dd className="mt-1 text-xs leading-relaxed text-muted">
              Explicit container max-widths, mobile drawer triggers, and stack thresholds prevent overflow at 375px.
            </dd>
          </div>
          <div className="py-4">
            <dt className="text-sm font-semibold text-ink">Accessible interactive states</dt>
            <dd className="mt-1 text-xs leading-relaxed text-muted">
              Focus-visible rings, ARIA labels, Escape dismissal, and hover transitions written directly into the prompt.
            </dd>
          </div>
          <div className="py-4">
            <dt className="text-sm font-semibold text-ink">Theme-aware surface tokens</dt>
            <dd className="mt-1 text-xs leading-relaxed text-muted">
              Verified light and dark contrast pairs instead of hardcoded hex values.
            </dd>
          </div>
        </dl>
      </div>

      {/* Right: Interactive Prompt Comparison Panel (flat hairline dividers, no nested cards) */}
      <div className="lg:col-span-7 rounded-2xl border border-line bg-card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-panel px-5 py-3">
          <div
            role="tablist"
            aria-label="Prompt comparison"
            className="flex items-center rounded-lg border border-line bg-bg p-0.5 text-xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "pasteui"}
              onClick={() => setMode("pasteui")}
              className={`cursor-pointer flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors ${
                mode === "pasteui"
                  ? "bg-card text-ink font-semibold"
                  : "text-muted hover:text-ink"
              }`}
            >
              <ShieldCheck size={13} className="text-accent-text" aria-hidden="true" />
              <span>PasteUI Spec</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "generic"}
              onClick={() => setMode("generic")}
              className={`cursor-pointer flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors ${
                mode === "generic"
                  ? "bg-card text-ink font-semibold"
                  : "text-muted hover:text-ink"
              }`}
            >
              <AlertTriangle size={13} className="text-amber-500" aria-hidden="true" />
              <span>Typical Prompt</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-3 py-1.5 text-xs font-medium text-ink hover:border-ink/40 transition-colors"
          >
            {copied ? (
              <Check size={12} className="text-accent-text" aria-hidden="true" />
            ) : (
              <Copy size={12} aria-hidden="true" />
            )}
            <span>{copied ? "Copied" : "Copy example"}</span>
          </button>
        </div>

        <div className="p-6 bg-bg/40">
          <p className="max-w-[68ch] font-mono text-xs leading-relaxed text-ink">
            {activeText}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line border-t border-line bg-panel text-xs">
          <div className="px-5 py-3.5">
            <p className="text-muted">Layout Geometry</p>
            <p className="mt-0.5 font-semibold text-ink">
              {mode === "pasteui" ? "h-16, z-50, sticky" : "Unspecified"}
            </p>
          </div>
          <div className="px-5 py-3.5">
            <p className="text-muted">Mobile Behavior</p>
            <p className="mt-0.5 font-semibold text-ink">
              {mode === "pasteui" ? "aria-expanded drawer" : "Often broken"}
            </p>
          </div>
          <div className="px-5 py-3.5">
            <p className="text-muted">Dark & Focus States</p>
            <p className="mt-0.5 font-semibold text-ink">
              {mode === "pasteui" ? "Included explicitly" : "Omitted"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
