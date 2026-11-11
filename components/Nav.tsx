"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, ArrowUpRight, Layers } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { href: "/components", label: "Components" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isComponentsArea = pathname?.startsWith("/components");

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-bg/90 backdrop-blur-md transition-colors">
      <div
        className={`flex h-16 items-center justify-between px-6 ${
          isComponentsArea ? "w-full" : "mx-auto max-w-7xl"
        }`}
      >
        {/* Left: Brand & Tagline */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-card font-mono text-xs font-semibold text-accent-text transition-colors group-hover:border-accent">
              {"</>"}
            </span>
            <span className="text-base font-bold tracking-tight text-ink">
              Paste<span className="text-accent-text">UI</span>
            </span>
          </Link>

          <span className="hidden h-4 w-px bg-line lg:block" aria-hidden="true" />

          <span className="hidden text-xs text-muted lg:inline">
            Prompt-first UI patterns & Tailwind JSX
          </span>
        </div>

        {/* Right: Desktop Links & Utility Controls */}
        <div className="flex items-center gap-2 sm:gap-5">
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/components"
                  ? pathname?.startsWith("/components")
                  : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-subtle text-ink font-semibold"
                      : "text-muted hover:text-ink hover:bg-subtle/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden h-4 w-px bg-line md:block" aria-hidden="true" />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors hover:border-ink/40 hover:text-ink"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-400" aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
          </button>

          <Link
            href="/components"
            className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-lg bg-accent px-3.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Layers size={14} aria-hidden="true" />
            <span>Open Library</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line bg-card text-ink transition-colors hover:bg-subtle md:hidden"
          >
            {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-line bg-card px-6 py-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/components"
                  ? pathname?.startsWith("/components")
                  : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active ? "bg-subtle text-ink font-semibold" : "text-muted hover:text-ink hover:bg-subtle/60"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="text-muted" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 border-t border-line pt-3">
            <Link
              href="/components"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-accent text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              <Layers size={14} aria-hidden="true" />
              <span>Open Component Library</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
