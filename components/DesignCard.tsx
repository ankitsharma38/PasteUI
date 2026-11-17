"use client";
import { useState, useEffect } from "react";
import {
  Check,
  Copy,
  Maximize2,
  Code2,
  FileText,
  Smartphone,
  Laptop,
  Eye,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Design } from "@/data/designs";
import { previews } from "@/components/previews";
import PremiumGate from "@/components/PremiumGate";

interface DesignCardProps {
  design: Design;
  forceFullWidth?: boolean;
  headingLevel?: "h2" | "h3";
}

export default function DesignCard({
  design,
  forceFullWidth = false,
  headingLevel = "h3",
}: DesignCardProps) {
  const HeadingTag = headingLevel;
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [viewMode, setViewMode] = useState<"preview" | "code" | "prompt">("preview");
  const [viewportWidth, setViewportWidth] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    if (!expanded) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [expanded]);

  const copyPrompt = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      await navigator.clipboard.writeText(design.prompt);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } catch (_) {}
  };

  const copyCode = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!design.code) return;
    try {
      await navigator.clipboard.writeText(design.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (_) {}
  };

  const isNav = design.id.startsWith("nav-");
  const showHorizontal = forceFullWidth || isNav;

  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className={`flex flex-col border border-line bg-card transition-colors rounded-xl overflow-hidden shadow-xs hover:border-line hover:shadow-sm ${
        showHorizontal ? "w-full col-span-full" : "h-full"
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-line px-4 sm:px-5 py-3 bg-card">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <HeadingTag className="font-semibold text-sm text-ink truncate">
            {design.title}
          </HeadingTag>
          <div className="flex items-center gap-1.5 shrink-0">
            {design.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded border border-line bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* View Mode Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div
            role="tablist"
            aria-label={`${design.title} views`}
            className="flex items-center rounded-lg border border-line bg-bg p-0.5 text-xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "preview"}
              onClick={() => setViewMode("preview")}
              className={`cursor-pointer flex items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors ${
                viewMode === "preview"
                  ? "bg-card text-ink font-semibold shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Eye size={12} aria-hidden="true" />
              <span>Preview</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "prompt"}
              onClick={() => setViewMode("prompt")}
              className={`cursor-pointer flex items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors ${
                viewMode === "prompt"
                  ? "bg-card text-ink font-semibold shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              <FileText size={12} aria-hidden="true" />
              <span>Prompt</span>
            </button>
            {design.code && (
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === "code"}
                onClick={() => setViewMode("code")}
                className={`cursor-pointer flex items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors ${
                  viewMode === "code"
                    ? "bg-card text-ink font-semibold shadow-xs"
                    : "text-muted hover:text-ink"
                }`}
              >
                <Code2 size={12} aria-hidden="true" />
                <span>JSX</span>
              </button>
            )}
          </div>

          {viewMode === "preview" && (
            <div className="hidden sm:flex items-center rounded-lg border border-line bg-bg p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setViewportWidth("desktop")}
                title="Desktop view"
                aria-label="Desktop view"
                aria-pressed={viewportWidth === "desktop"}
                className={`cursor-pointer p-1 rounded-md transition-colors ${
                  viewportWidth === "desktop" ? "bg-card text-ink shadow-xs" : "text-muted hover:text-ink"
                }`}
              >
                <Laptop size={13} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setViewportWidth("mobile")}
                title="Mobile view"
                aria-label="Mobile view"
                aria-pressed={viewportWidth === "mobile"}
                className={`cursor-pointer p-1 rounded-md transition-colors ${
                  viewportWidth === "mobile" ? "bg-card text-ink shadow-xs" : "text-muted hover:text-ink"
                }`}
              >
                <Smartphone size={13} aria-hidden="true" />
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label={`Expand ${design.title}`}
            title="Inspect full view"
            className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-bg text-muted hover:border-ink/40 hover:text-ink transition-colors"
          >
            <Maximize2 size={12} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main Canvas with responsiveness & workbench grid */}
      <div className="relative min-h-[220px] flex-1 overflow-x-auto studio-scroll workbench-grid bg-bg p-4 sm:p-6 flex items-center justify-center">
        {viewMode === "preview" && (
          <div
            className={`transition-all duration-200 flex items-center justify-center w-full max-w-full overflow-x-auto studio-scroll ${
              viewportWidth === "mobile"
                ? "max-w-[340px] rounded-2xl border border-line bg-panel p-2 shadow-xs"
                : "max-w-full"
            }`}
          >
            {previews[design.id] || (
              <div className="text-xs text-muted">Preview not available</div>
            )}
          </div>
        )}

        {viewMode === "code" && (
          <div className="w-full relative">
            <button
              type="button"
              onClick={copyCode}
              className="cursor-pointer absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 rounded-md bg-zinc-900 border border-zinc-700 px-2 py-1 text-xs text-zinc-100 hover:border-zinc-500 transition-colors"
            >
              {copiedCode ? (
                <Check size={12} className="text-emerald-400" aria-hidden="true" />
              ) : (
                <Copy size={12} aria-hidden="true" />
              )}
              <span>{copiedCode ? "Copied" : "Copy JSX"}</span>
            </button>
            <pre className="studio-scroll w-full max-h-72 overflow-auto rounded-lg border border-line bg-zinc-950 p-4 font-mono text-xs text-zinc-200 leading-relaxed">
              <code>{design.code}</code>
            </pre>
          </div>
        )}

        {viewMode === "prompt" && (
          <div className="w-full relative">
            <button
              type="button"
              onClick={copyPrompt}
              className="cursor-pointer absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 rounded-md bg-card border border-line px-2 py-1 text-xs font-medium text-ink hover:border-ink/40 transition-colors"
            >
              {copiedPrompt ? (
                <Check size={12} className="text-accent-text" aria-hidden="true" />
              ) : (
                <Copy size={12} aria-hidden="true" />
              )}
              <span>{copiedPrompt ? "Copied" : "Copy Prompt"}</span>
            </button>
            <div className="studio-scroll w-full max-h-72 overflow-auto rounded-lg border border-line bg-card p-4 pr-24 text-xs leading-relaxed text-ink font-mono">
              <p className="whitespace-pre-wrap">{design.prompt}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-line px-4 sm:px-5 py-2.5 bg-card">
        <p className="text-xs text-muted max-w-lg leading-relaxed line-clamp-1 sm:line-clamp-none">
          {design.description}
        </p>

        <PremiumGate isPremium={design.isPremium}>
          <div className="flex items-center gap-2">
            {design.code && (
              <button
                type="button"
                onClick={copyCode}
                className="cursor-pointer inline-flex h-7 items-center gap-1.5 rounded-lg border border-line bg-card px-2.5 text-xs font-medium text-ink hover:border-ink/40 hover:bg-subtle transition-colors"
              >
                {copiedCode ? (
                  <Check size={12} className="text-accent-text" aria-hidden="true" />
                ) : (
                  <Code2 size={12} aria-hidden="true" />
                )}
                <span>{copiedCode ? "Copied JSX" : "Copy JSX"}</span>
              </button>
            )}

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyPrompt}
              className="cursor-pointer inline-flex h-7 items-center gap-1.5 rounded-lg bg-accent px-3 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              {copiedPrompt ? (
                <Check size={12} aria-hidden="true" />
              ) : (
                <Copy size={12} aria-hidden="true" />
              )}
              <span>{copiedPrompt ? "Copied" : "Copy prompt"}</span>
            </motion.button>
          </div>
        </PremiumGate>
      </div>

      {/* Fullscreen Animated Modal with AnimatePresence */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={design.title}
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-line bg-card overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3 bg-panel">
                <div className="flex items-center gap-2.5">
                  <span className="font-semibold text-sm text-ink">{design.title}</span>
                  <span className="hidden sm:inline font-mono text-xs text-muted">
                    Press ESC to close
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {design.code && (
                    <button
                      type="button"
                      onClick={copyCode}
                      className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-2.5 py-1 text-xs font-medium text-ink hover:border-ink/40 transition-colors"
                    >
                      {copiedCode ? (
                        <Check size={12} className="text-accent-text" aria-hidden="true" />
                      ) : (
                        <Code2 size={12} aria-hidden="true" />
                      )}
                      <span>{copiedCode ? "Copied" : "Copy JSX"}</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={copyPrompt}
                    className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
                  >
                    {copiedPrompt ? (
                      <Check size={12} aria-hidden="true" />
                    ) : (
                      <Copy size={12} aria-hidden="true" />
                    )}
                    <span>{copiedPrompt ? "Copied" : "Copy prompt"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    aria-label="Close dialog"
                    className="cursor-pointer p-1.5 rounded-lg text-muted hover:text-ink hover:bg-subtle transition-colors ml-1"
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto studio-scroll workbench-grid flex items-center justify-center min-h-[360px]">
                <div className="w-full max-w-4xl flex items-center justify-center">
                  {previews[design.id]}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
