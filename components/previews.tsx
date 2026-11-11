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
} from "lucide-react";

export function StickyTopNavPreview() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="w-full border border-line bg-card transition-colors">
      <header className="w-full border-b border-line bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-bold text-xs">
              N
            </div>
            <span className="font-bold tracking-tight text-ink text-base">
              Nimbus<span className="text-accent-text">UI</span>
            </span>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {["Products", "Solutions", "Pricing", "Docs"].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setActiveTab(item)}
                className={`cursor-pointer transition-colors py-1 border-b-2 ${
                  activeTab === item
                    ? "text-accent-text font-semibold border-accent-text"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              className="cursor-pointer text-sm font-medium text-muted hover:text-ink px-3 py-1.5 rounded-lg hover:bg-subtle transition-colors"
            >
              Sign in
            </button>
            <button
              type="button"
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              <span>Get started</span>
              <ArrowRight size={14} aria-hidden="true" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden cursor-pointer flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink hover:bg-subtle"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="border-t border-line bg-card px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {["Products", "Solutions", "Pricing", "Docs"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setOpen(false);
                  }}
                  className="cursor-pointer text-left py-2 text-sm font-medium text-ink hover:text-accent-text"
                >
                  {item}
                </button>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
                <button
                  type="button"
                  className="cursor-pointer text-left text-sm font-medium text-muted py-1.5"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="cursor-pointer rounded-lg bg-accent py-2 text-center text-sm font-semibold text-white hover:bg-accent-hover"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="p-5 text-center bg-bg/60">
        <p className="font-mono text-xs font-medium text-muted">
          active_tab: <span className="text-accent-text font-semibold">{activeTab}</span>
        </p>
        <p className="text-xs text-muted mt-1">
          Click any navigation link or toggle the mobile menu button to test live state.
        </p>
      </div>
    </div>
  );
}

export function FloatingPillNavPreview() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-3">
      <nav className="flex w-full max-w-2xl items-center justify-between rounded-full border border-line bg-card px-4 py-2 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
            P
          </div>
          <span className="text-sm font-bold tracking-tight text-ink hidden sm:inline">
            Pulse.io
          </span>
        </div>

        <div className="flex items-center gap-1">
          {["Overview", "Features", "Pricing", "Changelog"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                active === item
                  ? "bg-accent text-white font-semibold"
                  : "text-muted hover:text-ink hover:bg-subtle"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Try Free
        </button>
      </nav>
      <p className="mt-4 font-mono text-xs text-muted">
        active_pill: <span className="text-ink font-semibold">{active}</span>
      </p>
    </div>
  );
}

export function CenteredSplitNavPreview() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="w-full border border-line bg-card overflow-hidden">
      <header className="flex h-16 w-full items-center justify-between border-b border-line px-6 bg-card">
        <div className="flex items-center gap-6 text-sm font-medium text-muted">
          <button type="button" className="cursor-pointer hover:text-ink transition-colors">
            Catalog
          </button>
          <button type="button" className="cursor-pointer hover:text-ink transition-colors">
            Collections
          </button>
        </div>
        <div className="text-base font-serif font-bold tracking-widest text-ink uppercase">
          ATELIER NOIR
        </div>
        <div className="flex items-center gap-5 text-sm font-medium text-muted">
          <button
            type="button"
            className="cursor-pointer hover:text-ink transition-colors hidden sm:inline"
          >
            Editorial
          </button>
          <button
            type="button"
            onClick={() => setCartCount(cartCount + 1)}
            className="cursor-pointer flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink/40 transition-colors"
          >
            <ShoppingBag size={14} className="text-accent-text" aria-hidden="true" />
            <span className="tabular-nums">Bag ({cartCount})</span>
          </button>
        </div>
      </header>
      <div className="p-4 text-center text-xs text-muted bg-subtle/50">
        Click Bag to test state updates.
      </div>
    </div>
  );
}

export function AnnouncementNavPreview() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="w-full border border-line bg-card overflow-hidden">
      {showBanner && (
        <div className="flex items-center justify-between bg-accent px-4 py-2 text-xs font-medium text-white">
          <div className="mx-auto flex items-center gap-2">
            <span className="rounded-full bg-black/30 px-2 py-0.5 font-mono text-xs font-semibold text-white">
              NEW
            </span>
            <span>PasteUI 2.0 interactive prompt workbench is live.</span>
            <span className="inline-flex items-center gap-1 underline font-semibold cursor-pointer">
              Explore <ArrowRight size={12} aria-hidden="true" />
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowBanner(false)}
            aria-label="Dismiss banner"
            className="cursor-pointer text-white/80 hover:text-white"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      )}
      <header className="flex h-16 items-center justify-between px-6 bg-card">
        <div className="flex items-center gap-8">
          <span className="text-base font-bold text-ink">Velocity</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted">
            <span className="hover:text-ink cursor-pointer">Platform</span>
            <span className="hover:text-ink cursor-pointer">Enterprise</span>
            <span className="hover:text-ink cursor-pointer">Resources</span>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-lg border border-line bg-subtle px-2.5 py-1 font-mono text-xs text-muted">
            <Command size={12} aria-hidden="true" />
            <span>K</span>
          </div>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-ink px-4 py-1.5 text-xs font-semibold text-bg hover:opacity-90"
          >
            Launch Console
          </button>
        </div>
      </header>
    </div>
  );
}

export function HeroLeftPreview() {
  return (
    <div className="w-full p-2 sm:p-4">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-accent-text/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-text mb-4">
        <Sparkles size={12} aria-hidden="true" />
        <span>Production Ready UI</span>
      </div>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-tight">
        Build with clarity and precision.
      </p>
      <p className="mt-3 text-sm text-muted max-w-xl leading-relaxed">
        High-performing interface layouts with accessible components, zero layout shifts, and semantic Tailwind utilities.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          Explore Components
        </button>
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
    <div className="w-full p-2 sm:p-3">
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <span className="font-mono text-xs font-semibold text-accent-text">
            Real-Time Sync
          </span>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-ink">
            Ship modern apps faster
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Pre-assembled interactive UI with deterministic prompts and production JSX markup.
          </p>
          <button
            type="button"
            onClick={() => setStatus(status === "Connected" ? "Synced (0ms)" : "Connected")}
            className="cursor-pointer mt-4 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            Toggle Sync
          </button>
        </div>
        <div className="border border-line bg-card p-4">
          <div className="flex items-center justify-between pb-3 border-b border-line text-xs font-mono text-muted">
            <span>AppStatus.tsx</span>
            <span className="text-accent-text font-semibold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent-text" aria-hidden="true" />
              {status}
            </span>
          </div>
          <div className="mt-3 text-xs space-y-2">
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
    </div>
  );
}

export function HeroCenterPreview() {
  return (
    <div className="w-full p-4 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent-text/25 px-3 py-1 text-xs font-semibold text-accent-text">
        <Sparkles size={12} aria-hidden="true" />
        <span>Curated Prompt Library</span>
      </span>
      <p className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
        Copy the prompt. Ship the UI.
      </p>
      <p className="mx-auto mt-3 max-w-md text-xs sm:text-sm text-muted">
        Natural language prompts crafted for AI pair programmers. Designed to generate accessible Tailwind code.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-accent px-5 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          Start Browsing
        </button>
      </div>
    </div>
  );
}

export function CardStatPreview() {
  const [val, setVal] = useState(48290);

  return (
    <div className="w-full max-w-sm rounded-xl border border-line bg-card p-5 transition-colors hover:border-accent-text/50">
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
    </div>
  );
}

export function CardBasicPreview() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full max-w-sm rounded-xl border border-line bg-card p-5 transition-colors hover:border-ink/40 cursor-pointer"
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
    </div>
  );
}

export function CardProfilePreview() {
  const [following, setFollowing] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-xl border border-line bg-card p-5 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white font-bold text-base">
        AS
      </div>
      <p className="mt-3 font-bold text-ink">Ankit Sharma</p>
      <p className="text-xs text-muted">Product Engineer & Creator</p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setFollowing(!following)}
          className={`cursor-pointer flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-colors ${
            following
              ? "bg-subtle text-ink border border-line"
              : "bg-ink text-bg hover:opacity-90"
          }`}
        >
          {following && <Check size={13} aria-hidden="true" />}
          <span>{following ? "Following" : "Follow"}</span>
        </button>
        <button
          type="button"
          className="cursor-pointer flex-1 rounded-lg border border-line py-2 text-xs font-medium text-ink hover:bg-subtle transition-colors"
        >
          Message
        </button>
      </div>
    </div>
  );
}

export function ButtonSetPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        Solid Emerald
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-ink px-4 py-2 text-xs font-semibold text-bg hover:opacity-90 transition-opacity"
      >
        Dark Ink
      </button>
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

export function ButtonIconPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <button
        type="button"
        className="cursor-pointer group flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        <span>Proceed</span>
        <ArrowRight
          size={14}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-medium text-ink hover:border-ink/40 transition-colors"
      >
        <Plus size={14} aria-hidden="true" />
        <span>Add Section</span>
      </button>
    </div>
  );
}

export function ButtonPillPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <button
        type="button"
        className="cursor-pointer rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
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
        className="cursor-pointer rounded-full bg-subtle px-5 py-2 text-sm font-semibold text-ink hover:bg-line transition-colors"
      >
        Large Pill
      </button>
    </div>
  );
}

export function TypographySerifPreview() {
  return (
    <div className="max-w-md p-4">
      <p className="font-serif text-3xl font-bold tracking-tight text-ink leading-tight">
        A quiet study in modern balance.
      </p>
      <p className="mt-3 text-xs leading-relaxed text-muted">
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
    <div className="w-full max-w-md border border-line bg-card p-4 font-mono text-xs">
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
  "card-stat": <CardStatPreview />,
  "card-basic": <CardBasicPreview />,
  "card-profile": <CardProfilePreview />,
  "btn-set": <ButtonSetPreview />,
  "btn-icon": <ButtonIconPreview />,
  "btn-pill": <ButtonPillPreview />,
  "type-serif": <TypographySerifPreview />,
  "type-mono": <TypographyMonoPreview />,
};
