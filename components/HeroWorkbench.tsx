"use client";
import { useState } from "react";
import { Check, Copy, Code2, Eye, Laptop, Smartphone, Terminal } from "lucide-react";
import { categories } from "@/data/designs";
import { previews } from "@/components/previews";

const PRESET_IDS = ["nav-sticky-top", "hero-split", "card-stat", "type-mono"] as const;

export default function HeroWorkbench() {
  const allDesigns = categories.flatMap((c) =>
    c.designs.map((d) => ({ ...d, categoryName: c.name, categorySlug: c.slug }))
  );
  const presets = PRESET_IDS.map((id) => allDesigns.find((d) => d.id === id)).filter(
    (d): d is NonNullable<typeof d> => Boolean(d)
  );

  const [selectedId, setSelectedId] = useState<string>(presets[0]?.id ?? "nav-sticky-top");
  const [stageMode, setStageMode] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const active = presets.find((p) => p.id === selectedId) ?? presets[0];
  if (!active) return null;

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(active.prompt);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } catch (_) {}
  };

  const copyCode = async () => {
    if (!active.code) return;
    try {
      await navigator.clipboard.writeText(active.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (_) {}
  };

  return (
    <div className="animate-surface-reveal rounded-2xl border border-line bg-card overflow-hidden">
      {/* Top Studio Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-panel px-4 sm:px-5 py-3">
        {/* Component Preset Switcher */}
        <div
          role="tablist"
          aria-label="Workbench component presets"
          className="flex flex-wrap items-center gap-1.5"
        >
          {presets.map((preset) => {
            const isSelected = preset.id === active.id;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={isSelected}
                key={preset.id}
                onClick={() => setSelectedId(preset.id)}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-card text-ink font-semibold border border-line"
                    : "text-muted hover:text-ink hover:bg-subtle/60 border border-transparent"
                }`}
              >
                {preset.title.replace(" with Mobile Drawer", "")}
              </button>
            );
          })}
        </div>

        {/* Stage Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-line bg-bg p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setStageMode("preview")}
              className={`cursor-pointer flex items-center gap-1 rounded-md px-2.5 py-1 text-xs transition-colors ${
                stageMode === "preview"
                  ? "bg-card text-ink font-semibold"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Eye size={12} aria-hidden="true" />
              <span>Preview</span>
            </button>
            {active.code && (
              <button
                type="button"
                onClick={() => setStageMode("code")}
                className={`cursor-pointer flex items-center gap-1 rounded-md px-2.5 py-1 text-xs transition-colors ${
                  stageMode === "code"
                    ? "bg-card text-ink font-semibold"
                    : "text-muted hover:text-ink"
                }`}
              >
                <Code2 size={12} aria-hidden="true" />
                <span>JSX</span>
              </button>
            )}
          </div>

          {stageMode === "preview" && (
            <div className="hidden sm:flex items-center rounded-lg border border-line bg-bg p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                aria-label="Desktop preview"
                aria-pressed={viewport === "desktop"}
                className={`cursor-pointer rounded-md p-1.5 transition-colors ${
                  viewport === "desktop" ? "bg-card text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <Laptop size={13} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                aria-label="Mobile preview"
                aria-pressed={viewport === "mobile"}
                className={`cursor-pointer rounded-md p-1.5 transition-colors ${
                  viewport === "mobile" ? "bg-card text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <Smartphone size={13} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Split Studio Body: Prompt Spec (Left) + Live Preview/Code Stage (Right) */}
      <div className="grid lg:grid-cols-12">
        {/* Left: Prompt Blueprint Pane */}
        <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-line bg-card p-5">
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-line">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted">
                <Terminal size={13} className="text-accent-text" aria-hidden="true" />
                <span>prompt.md</span>
              </div>
              <span className="rounded border border-line bg-subtle px-2 py-0.5 font-mono text-xs text-muted">
                {active.categoryName}
              </span>
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-ink whitespace-pre-wrap">
              {active.prompt}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {active.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {active.code && (
                <button
                  type="button"
                  onClick={copyCode}
                  className="cursor-pointer inline-flex h-8 items-center gap-1.5 rounded-lg border border-line bg-card px-2.5 text-xs font-medium text-ink hover:border-ink/40 hover:bg-subtle transition-colors"
                >
                  {copiedCode ? (
                    <Check size={12} className="text-accent-text" aria-hidden="true" />
                  ) : (
                    <Code2 size={12} aria-hidden="true" />
                  )}
                  <span>{copiedCode ? "Copied JSX" : "JSX"}</span>
                </button>
              )}

              <button
                type="button"
                onClick={copyPrompt}
                className="cursor-pointer inline-flex h-8 items-center gap-1.5 rounded-lg bg-accent px-3 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                {copiedPrompt ? (
                  <Check size={13} aria-hidden="true" />
                ) : (
                  <Copy size={13} aria-hidden="true" />
                )}
                <span>{copiedPrompt ? "Copied prompt" : "Copy prompt"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Interactive Render Stage */}
        <div className="lg:col-span-7 flex flex-col justify-between workbench-grid bg-bg p-5 sm:p-8 min-h-[300px]">
          <div className="flex-1 flex items-center justify-center">
            {stageMode === "preview" ? (
              <div
                className={`transition-all duration-200 flex items-center justify-center ${
                  viewport === "mobile"
                    ? "w-full max-w-[360px] rounded-2xl border border-line bg-panel p-2.5"
                    : "w-full"
                }`}
              >
                {previews[active.id]}
              </div>
            ) : (
              <div className="w-full relative">
                <pre className="studio-scroll w-full max-h-72 overflow-auto rounded-xl border border-line bg-zinc-950 p-4 font-mono text-xs text-zinc-200 leading-relaxed">
                  <code>{active.code}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted">
            <span>Interactive preview · {viewport === "mobile" ? "360px frame" : "Fluid container"}</span>
            <span>Dark & light verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

