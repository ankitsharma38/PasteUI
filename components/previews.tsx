"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  ShoppingBag,
  Sparkles,
  Command,
  Zap,
  Plus,
  Check,
  Star,
  Search,
  Copy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyTopNavPreview() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="w-full border-b border-line bg-card transition-colors">
      <header className="w-full bg-card">
        <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-accent text-white font-bold text-xs">
              N
            </div>
            <span className="font-bold tracking-tight text-ink text-sm sm:text-base">
              Nimbus<span className="text-accent-text">UI</span>
            </span>
          </div>

          {/* Links with animated tab background */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
            {["Products", "Solutions", "Pricing", "Docs"].map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`relative cursor-pointer px-3 py-1.5 rounded-lg transition-colors text-xs font-medium ${
                    isActive ? "text-accent-text font-semibold" : "text-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="stickyNavPill"
                      className="absolute inset-0 rounded-lg bg-accent/10 border border-accent-text/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              className="cursor-pointer text-xs font-medium text-muted hover:text-ink px-3 py-1.5 rounded-lg hover:bg-subtle transition-colors"
            >
              Sign in
            </button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              <span>Get started</span>
              <ArrowRight size={13} aria-hidden="true" />
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink hover:bg-subtle transition-colors"
          >
            {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-line bg-card px-4 py-3 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {["Products", "Solutions", "Pricing", "Docs"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => {
                      setActiveTab(item);
                      setOpen(false);
                    }}
                    className={`cursor-pointer text-left py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === item
                        ? "bg-accent/10 text-accent-text font-semibold"
                        : "text-ink hover:bg-subtle"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-line pt-2.5">
                  <button
                    type="button"
                    className="cursor-pointer text-left text-xs font-medium text-muted py-1.5 px-3"
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer rounded-lg bg-accent py-2 text-center text-xs font-semibold text-white hover:bg-accent-hover"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="p-3 text-center bg-bg/60">
        <p className="font-mono text-xs font-medium text-muted">
          active_tab: <span className="text-accent-text font-semibold">{activeTab}</span>
        </p>
      </div>
    </div>
  );
}

export function FloatingPillNavPreview() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="w-full max-w-full flex flex-col items-center justify-center py-4 px-2">
      <nav className="flex w-full max-w-xl items-center justify-between rounded-full border border-line bg-card px-3 sm:px-4 py-1.5 shadow-xs">
        <div className="flex items-center gap-2 shrink-0">
          <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
            P
          </div>
          <span className="text-xs font-bold tracking-tight text-ink hidden sm:inline">
            Pulse.io
          </span>
        </div>

        <div className="flex items-center gap-0.5 sm:gap-1">
          {["Overview", "Features", "Pricing"].map((item) => {
            const isActive = active === item;
            return (
              <button
                type="button"
                key={item}
                onClick={() => setActive(item)}
                className={`relative cursor-pointer rounded-full px-2.5 sm:px-3 py-1 text-xs font-medium transition-colors ${
                  isActive ? "text-white font-semibold" : "text-muted hover:text-ink hover:bg-subtle"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pillNavIndicator"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer shrink-0 rounded-full bg-ink px-3 sm:px-4 py-1 text-xs font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Try Free
        </motion.button>
      </nav>
      <p className="mt-3 font-mono text-xs text-muted">
        active_pill: <span className="text-ink font-semibold">{active}</span>
      </p>
    </div>
  );
}

export function CenteredSplitNavPreview() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="w-full border-b border-line bg-card overflow-hidden">
      <header className="flex h-14 sm:h-16 w-full items-center justify-between px-4 sm:px-6 bg-card">
        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-muted">
          <button type="button" className="cursor-pointer hover:text-ink transition-colors">
            Catalog
          </button>
          <button type="button" className="cursor-pointer hover:text-ink transition-colors hidden sm:inline">
            Collections
          </button>
        </div>
        <div className="text-xs sm:text-sm font-serif font-bold tracking-widest text-ink uppercase">
          ATELIER NOIR
        </div>
        <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium text-muted">
          <button
            type="button"
            className="cursor-pointer hover:text-ink transition-colors hidden md:inline"
          >
            Editorial
          </button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setCartCount(cartCount + 1)}
            className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-line bg-card px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink/40 transition-colors"
          >
            <ShoppingBag size={13} className="text-accent-text" aria-hidden="true" />
            <span className="tabular-nums">Bag ({cartCount})</span>
          </motion.button>
        </div>
      </header>
      <div className="p-3 text-center text-xs text-muted bg-subtle/50">
        Click Bag to test live item count updates.
      </div>
    </div>
  );
}

export function AnnouncementNavPreview() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="w-full border-b border-line bg-card overflow-hidden">
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex items-center justify-between bg-accent px-3 sm:px-4 py-1.5 text-xs font-medium text-white"
          >
            <div className="mx-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-center">
              <span className="rounded-full bg-black/30 px-2 py-0.5 font-mono text-xs font-semibold text-white">
                NEW
              </span>
              <span className="truncate max-w-[220px] sm:max-w-none text-xs">
                PasteUI 2.0 prompt library is live.
              </span>
              <span className="inline-flex items-center gap-0.5 underline font-semibold cursor-pointer text-xs">
                Explore <ArrowRight size={11} aria-hidden="true" />
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowBanner(false)}
              aria-label="Dismiss banner"
              className="cursor-pointer text-white/80 hover:text-white shrink-0 p-1"
            >
              <X size={13} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 bg-card">
        <div className="flex items-center gap-4 sm:gap-8">
          <span className="text-sm sm:text-base font-bold text-ink">Velocity</span>
          <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-muted">
            <span className="hover:text-ink cursor-pointer">Platform</span>
            <span className="hover:text-ink cursor-pointer">Enterprise</span>
            <span className="hover:text-ink cursor-pointer">Pricing</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 rounded-lg border border-line bg-subtle px-2 py-1 font-mono text-xs text-muted">
            <Command size={11} aria-hidden="true" />
            <span>K</span>
          </div>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-bg hover:opacity-90 transition-opacity"
          >
            Start Free
          </button>
        </div>
      </header>
    </div>
  );
}

export function HeroLeftPreview() {
  return (
    <div className="w-full p-2 sm:p-4 text-left">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-accent-text/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-text mb-3">
        <Sparkles size={12} aria-hidden="true" />
        <span>Production Ready UI</span>
      </div>
      <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-ink leading-tight">
        Build with clarity and precision.
      </p>
      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted max-w-xl leading-relaxed">
        High-performing interface layouts with accessible components, zero layout shifts, and semantic Tailwind utilities.
      </p>
      <div className="mt-4 sm:mt-6 flex flex-wrap gap-2.5">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          Explore Components
        </motion.button>
        <button
          type="button"
          className="cursor-pointer rounded-lg border border-line bg-card px-4 py-2 text-xs font-medium text-ink hover:border-ink/40 transition-colors"
        >
          Documentation
        </button>
      </div>
    </div>
  );
}

export function HeroSplitPreview() {
  const [status, setStatus] = useState("Connected");

  return (
    <div className="w-full p-2 sm:p-3 text-left">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 items-center">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-text">
            Real-Time Sync
          </span>
          <p className="mt-1 text-lg sm:text-xl font-bold text-ink">
            Ship modern apps faster
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            Pre-assembled interactive UI with deterministic prompts and production JSX markup.
          </p>
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => setStatus(status === "Connected" ? "Synced (0ms)" : "Connected")}
            className="cursor-pointer mt-3 rounded-lg bg-accent px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            Toggle State
          </motion.button>
        </div>
        <div className="p-3 border-t md:border-t-0 md:border-l border-line text-xs space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-line text-xs font-mono text-muted">
            <span>AppStatus.tsx</span>
            <span className="text-accent-text font-semibold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent-text" aria-hidden="true" />
              {status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Deployment:</span>
            <span className="font-semibold text-ink">Production</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Latency:</span>
            <span className="font-mono font-semibold text-accent-text tabular-nums">14ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroCenterPreview() {
  return (
    <div className="w-full p-3 sm:p-4 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent-text/25 px-3 py-1 text-xs font-semibold text-accent-text">
        <Sparkles size={12} aria-hidden="true" />
        <span>Curated Prompt Library</span>
      </span>
      <p className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-ink">
        Copy the prompt. Ship the UI.
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-muted">
        Natural language prompts crafted for AI pair programmers. Designed to generate accessible Tailwind code.
      </p>
      <div className="mt-4 sm:mt-6 flex justify-center gap-2.5">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          Start Browsing
        </motion.button>
      </div>
    </div>
  );
}

export function HeroTerminalPreview() {
  const [copied, setCopied] = useState(false);
  const cmd = "npx pasteui add navbar";

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md p-4 text-left font-mono text-xs text-zinc-100 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-zinc-400">terminal</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="cursor-pointer flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-zinc-300">
          <span className="text-emerald-400">$</span> {cmd}
        </p>
        <p className="text-zinc-400">✔ Fetched deterministic prompt</p>
        <p className="text-zinc-400">✔ Verified WCAG 4.5:1 dark mode tokens</p>
        <p className="text-emerald-400 font-semibold">✔ Ready to paste into Cursor / Claude</p>
      </div>
    </div>
  );
}

export function PricingTierPreview() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="w-full max-w-sm p-3 sm:p-4 text-left">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-ink text-base">Pro Developer</p>
          <p className="text-xs text-muted">For builders using Cursor & Claude</p>
        </div>
        <span className="rounded-full bg-accent/10 border border-accent-text/25 px-2.5 py-0.5 text-xs font-semibold text-accent-text">
          Popular
        </span>
      </div>

      {/* Annual / Monthly Toggle */}
      <div className="mt-4 flex items-center justify-between rounded-lg border border-line bg-panel p-1">
        <button
          type="button"
          onClick={() => setAnnual(false)}
          className={`flex-1 rounded-md py-1 text-xs font-medium transition-colors ${
            !annual ? "bg-card text-ink font-semibold shadow-xs" : "text-muted hover:text-ink"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setAnnual(true)}
          className={`flex-1 rounded-md py-1 text-xs font-medium transition-colors flex items-center justify-center gap-1 ${
            annual ? "bg-card text-ink font-semibold shadow-xs" : "text-muted hover:text-ink"
          }`}
        >
          <span>Annual</span>
          <span className="rounded bg-accent/20 px-1 py-0.5 text-xs text-accent-text font-bold">
            -20%
          </span>
        </button>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold tracking-tight tabular-nums text-ink">
          ${annual ? "19" : "24"}
        </span>
        <span className="text-xs text-muted">/ month billed {annual ? "annually" : "monthly"}</span>
      </div>

      <ul className="mt-4 space-y-2 text-xs text-muted border-t border-line pt-3">
        <li className="flex items-center gap-2">
          <Check size={13} className="text-accent-text" /> 25+ prompt-tested components
        </li>
        <li className="flex items-center gap-2">
          <Check size={13} className="text-accent-text" /> Full Tailwind JSX source
        </li>
        <li className="flex items-center gap-2">
          <Check size={13} className="text-accent-text" /> Dark & light WCAG verified
        </li>
      </ul>

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer mt-5 w-full rounded-xl bg-accent py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        Get Pro Access
      </motion.button>
    </div>
  );
}

export function PricingComparisonPreview() {
  return (
    <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line w-full max-w-md text-left">
      <div className="p-4">
        <p className="text-xs font-semibold text-muted">Free Community</p>
        <p className="mt-1 text-2xl font-bold text-ink">$0</p>
        <p className="mt-1 text-xs text-muted">Standard prompts for personal sites</p>
        <button
          type="button"
          className="cursor-pointer mt-3 w-full rounded-lg border border-line bg-card py-1.5 text-xs font-medium text-ink hover:bg-subtle"
        >
          Use Free
        </button>
      </div>
      <div className="p-4 bg-accent/5">
        <p className="text-xs font-semibold text-ink">Pro Studio</p>
        <p className="mt-1 text-2xl font-bold text-ink">$49</p>
        <p className="mt-1 text-xs text-muted">Lifetime access + full updates</p>
        <button
          type="button"
          className="cursor-pointer mt-3 w-full rounded-lg bg-accent py-1.5 text-xs font-semibold text-white hover:bg-accent-hover"
        >
          Buy Once
        </button>
      </div>
    </div>
  );
}

export function CardStatPreview() {
  const [val, setVal] = useState(48290);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="w-full max-w-sm p-4 text-left"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted">Total Monthly Revenue</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-xs font-semibold text-accent-text">
          <TrendingUp size={12} aria-hidden="true" /> +18.4%
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight tabular-nums text-ink">
        ${val.toLocaleString()}
      </p>
      <div className="mt-3 flex items-center justify-between text-xs text-muted border-t border-line pt-3">
        <span className="tabular-nums">Target: $50,000</span>
        <button
          type="button"
          onClick={() => setVal(val + 500)}
          className="cursor-pointer text-accent-text hover:underline font-semibold"
        >
          + Simulate Sale
        </button>
      </div>
    </motion.div>
  );
}

export function CardBentoPreview() {
  return (
    <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line w-full max-w-md text-left border border-line bg-card">
      <div className="sm:col-span-2 p-4">
        <span className="font-mono text-xs font-semibold text-accent-text">01 / SPEED</span>
        <p className="mt-1 font-bold text-ink text-sm">Zero Runtime Bloat</p>
        <p className="mt-1 text-xs text-muted leading-relaxed">
          Pure Tailwind utilities compile straight to CSS without extra bundle weight.
        </p>
      </div>

      <div className="p-4 text-center flex flex-col justify-center">
        <span className="text-2xl font-bold font-mono text-accent-text tabular-nums">0ms</span>
        <p className="text-xs text-muted mt-1">Layout shift</p>
      </div>
    </div>
  );
}

export function CardBasicPreview() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
      className="w-full max-w-sm p-4 cursor-pointer text-left"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-text">
        <Zap size={18} aria-hidden="true" />
      </div>
      <p className="mt-4 font-semibold text-ink text-base">Instant Generation</p>
      <p className="mt-1 text-xs text-muted leading-relaxed">
        Plug and play layout templates that honor responsiveness, accessibility guidelines, and cohesive color schemes.
      </p>
      <p className="mt-4 text-xs font-semibold text-accent-text inline-flex items-center gap-1.5">
        <span>Read documentation</span>
        <ArrowRight
          size={13}
          aria-hidden="true"
          className={`transition-transform duration-150 ${hovered ? "translate-x-1" : ""}`}
        />
      </p>
    </motion.div>
  );
}

export function CardTestimonialPreview() {
  return (
    <div className="w-full max-w-sm p-4 text-left">
      <div className="flex text-amber-400 text-xs gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} fill="currentColor" />
        ))}
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-ink">
        &quot;PasteUI completely fixed our broken AI component workflows. The prompts give Cursor the exact bounds it needs.&quot;
      </p>
      <div className="mt-3 flex items-center gap-2.5 border-t border-line pt-2.5">
        <div className="h-7 w-7 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
          JD
        </div>
        <div>
          <p className="text-xs font-semibold text-ink">Jane Doe</p>
          <p className="text-xs text-muted">Staff Frontend Engineer</p>
        </div>
      </div>
    </div>
  );
}

export function CardProfilePreview() {
  const [following, setFollowing] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="w-full max-w-sm p-4 text-center"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white font-bold text-base">
        AS
      </div>
      <p className="mt-3 font-bold text-ink">Ankit Sharma</p>
      <p className="text-xs text-muted">Product Engineer & Creator</p>
      <div className="mt-4 flex gap-2">
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => setFollowing(!following)}
          className={`cursor-pointer flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-colors ${
            following
              ? "bg-subtle text-ink border border-line"
              : "bg-ink text-bg hover:opacity-90"
          }`}
        >
          {following && <Check size={13} aria-hidden="true" />}
          <span>{following ? "Following" : "Follow"}</span>
        </motion.button>
        <button
          type="button"
          className="cursor-pointer flex-1 rounded-lg border border-line py-2 text-xs font-medium text-ink hover:bg-subtle transition-colors"
        >
          Message
        </button>
      </div>
    </motion.div>
  );
}

export function ButtonSetPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 p-3">
      <motion.button
        type="button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        Solid Emerald
      </motion.button>
      <motion.button
        type="button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="cursor-pointer rounded-lg bg-ink px-4 py-2 text-xs font-semibold text-bg hover:opacity-90 transition-opacity"
      >
        Dark Ink
      </motion.button>
      <button
        type="button"
        className="cursor-pointer rounded-lg border border-line bg-card px-4 py-2 text-xs font-semibold text-ink hover:border-ink/50 transition-colors"
      >
        Border Outline
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-lg px-4 py-2 text-xs font-medium text-muted hover:text-ink hover:bg-subtle transition-colors"
      >
        Ghost Action
      </button>
    </div>
  );
}

export function ButtonShimmerPreview() {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.button
        type="button"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="relative inline-flex h-10 overflow-hidden rounded-xl p-[1px] focus:outline-none"
      >
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#047857_0%,#34d399_50%,#047857_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-zinc-950 px-5 py-1 text-xs font-semibold text-zinc-100 backdrop-blur-3xl hover:bg-zinc-900 transition-colors gap-1.5">
          <Sparkles size={12} className="text-emerald-400" />
          <span>Generate Component ⚡</span>
        </span>
      </motion.button>
    </div>
  );
}

export function ButtonIconPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-3">
      <motion.button
        type="button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="cursor-pointer group flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        <span>Proceed</span>
        <ArrowRight
          size={13}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        />
      </motion.button>
      <button
        type="button"
        className="cursor-pointer flex items-center gap-1.5 rounded-xl border border-line bg-card px-4 py-2 text-xs font-medium text-ink hover:border-ink/40 transition-colors"
      >
        <Plus size={13} aria-hidden="true" />
        <span>Add Section</span>
      </button>
    </div>
  );
}

export function ButtonPillPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 p-3">
      <button
        type="button"
        className="cursor-pointer rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        Small Pill
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        Medium Pill
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-full bg-subtle px-5 py-2 text-xs font-semibold text-ink hover:bg-line transition-colors"
      >
        Large Pill
      </button>
    </div>
  );
}

export function DialogCommandPreview() {
  const [search, setSearch] = useState("");
  const items = [
    { title: "Sticky Top Nav", cat: "Navbar", shortcut: "↵" },
    { title: "Interactive Pricing Tier", cat: "Pricing", shortcut: "↵" },
    { title: "Metric Trend Card", cat: "Cards", shortcut: "↵" },
  ];

  const filtered = items.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-sm text-left">
      <div className="flex items-center border-b border-line px-3 py-2 bg-panel/50">
        <Search size={13} className="text-muted mr-2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search components (⌘K)..."
          className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-muted"
        />
        <span className="rounded border border-line bg-subtle px-1.5 py-0.5 font-mono text-xs text-muted">
          ESC
        </span>
      </div>
      <div className="p-2 space-y-1">
        {filtered.map((item, idx) => (
          <motion.div
            key={item.title}
            whileHover={{ x: 2 }}
            className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs cursor-pointer transition-colors ${
              idx === 0 ? "bg-accent/10 text-accent-text font-medium" : "text-ink hover:bg-subtle"
            }`}
          >
            <span>{item.title}</span>
            <span className="font-mono text-xs text-muted">{item.shortcut}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function FooterColumnsPreview() {
  return (
    <div className="w-full border-t border-line bg-panel/40 p-4 text-left">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div>
          <span className="text-xs font-bold text-ink">PasteUI</span>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            Prompt-first UI system for AI coding.
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-300 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            Operational
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-ink uppercase">Library</p>
          <p className="mt-1 text-xs text-muted hover:text-ink cursor-pointer">Navbars</p>
          <p className="text-xs text-muted hover:text-ink cursor-pointer">Heroes</p>
          <p className="text-xs text-muted hover:text-ink cursor-pointer">Pricing</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="text-xs font-semibold text-ink uppercase">Newsletter</p>
          <div className="mt-1.5 flex gap-1">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Newsletter email"
              className="w-full rounded border border-line px-2 py-1 text-xs bg-bg text-ink placeholder:text-muted"
            />
            <button
              type="button"
              className="rounded bg-accent px-2.5 py-1 text-xs font-semibold text-white"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TypographySerifPreview() {
  return (
    <div className="max-w-md p-3 sm:p-4 text-left">
      <p className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-tight">
        A quiet study in modern balance.
      </p>
      <p className="mt-2 sm:mt-3 text-xs leading-relaxed text-muted">
        Pairing an editorial serif display with clean sans-serif body type ensures maximum legibility while lending warmth and brand character.
      </p>
    </div>
  );
}

export function TypographyMonoPreview() {
  const [copied, setCopied] = useState(false);
  const code = "npm install @pasteui/prompts";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md border border-line bg-card p-4 font-mono text-xs text-left">
      <div className="flex items-center justify-between text-muted pb-2 border-b border-line text-xs">
        <span>bash</span>
        <button
          type="button"
          onClick={handleCopy}
          className="cursor-pointer inline-flex items-center gap-1 text-accent-text hover:underline font-semibold"
        >
          {copied && <Check size={12} aria-hidden="true" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <p className="mt-3 text-accent-text">$ {code}</p>
      <p className="text-muted mt-1 flex items-center gap-1.5">
        <Check size={12} className="text-accent-text" aria-hidden="true" />
        <span>installed 1 package in 0.4s</span>
      </p>
    </div>
  );
}

export const previews: Record<string, React.ReactNode> = {
  "nav-sticky-top": <StickyTopNavPreview />,
  "nav-floating-pill": <FloatingPillNavPreview />,
  "nav-centered-split": <CenteredSplitNavPreview />,
  "nav-announcement": <AnnouncementNavPreview />,
  "hero-left": <HeroLeftPreview />,
  "hero-split": <HeroSplitPreview />,
  "hero-center": <HeroCenterPreview />,
  "hero-terminal": <HeroTerminalPreview />,
  "pricing-tier": <PricingTierPreview />,
  "pricing-comparison": <PricingComparisonPreview />,
  "card-stat": <CardStatPreview />,
  "card-bento": <CardBentoPreview />,
  "card-basic": <CardBasicPreview />,
  "card-testimonial": <CardTestimonialPreview />,
  "card-profile": <CardProfilePreview />,
  "btn-set": <ButtonSetPreview />,
  "btn-shimmer": <ButtonShimmerPreview />,
  "btn-icon": <ButtonIconPreview />,
  "btn-pill": <ButtonPillPreview />,
  "dialog-command": <DialogCommandPreview />,
  "footer-columns": <FooterColumnsPreview />,
  "type-serif": <TypographySerifPreview />,
  "type-mono": <TypographyMonoPreview />,
};
