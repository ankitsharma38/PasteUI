"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer when in components dashboard or category routes
  if (pathname?.startsWith("/components")) {
    return null;
  }

  return (
    <footer className="border-t border-line bg-panel/60 transition-colors">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-ink">PasteUI</span>
          <span className="text-xs">© {new Date().getFullYear()} · Curated AI layout prompts & Tailwind JSX.</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <Link href="/components" className="transition-colors hover:text-ink">
            Components
          </Link>
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-ink">
            Contact
          </Link>
          <a
            href="https://github.com/ankitsharma38"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="mailto:ankitsharma7805@gmail.com"
            className="transition-colors hover:text-ink"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
