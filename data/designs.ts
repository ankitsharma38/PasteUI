export type Design = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  prompt: string;
  code?: string;
  isPremium: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  designs: Design[];
};

const BASE_RULE =
  "Build with React and Tailwind CSS. Modern, fully responsive, keyboard accessible with visible focus rings, and clean design hierarchy.";

const d = (
  id: string,
  title: string,
  description: string,
  tags: string[],
  prompt: string,
  code?: string,
  isPremium = false
): Design => ({
  id,
  title,
  description,
  tags,
  prompt: `${prompt} ${BASE_RULE}`,
  code,
  isPremium,
});

export const categories: Category[] = [
  {
    slug: "navbar",
    name: "Navbar",
    description:
      "Full-width navigation bars, floating pills, centered logos, and mobile-ready drawers.",
    designs: [
      d(
        "nav-sticky-top",
        "Sticky Top Nav with Mobile Drawer",
        "Classic header with logo, navigation links, primary CTA, and responsive slide-down menu.",
        ["sticky", "responsive", "essential"],
        "Create a sticky top navigation bar with Tailwind CSS: a translucent blurred bar (bg-white/80 dark:bg-zinc-900/80 backdrop-blur, border-b border-zinc-200 dark:border-zinc-800). Left: brand logo with icon mark and wordmark. Center: horizontal nav links that hover cleanly. Right: 'Sign in' link and solid emerald 'Get started' button. Include a mobile hamburger button that expands a responsive menu drawer on small screens.",
        `<header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/85">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    <a href="#" className="flex items-center gap-2.5 font-bold text-zinc-900 dark:text-zinc-100">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white font-extrabold text-sm">P</span>
      <span>Nimbus<span className="text-emerald-500">UI</span></span>
    </a>
    <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-400">
      <a href="#" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">Products</a>
      <a href="#" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">Solutions</a>
      <a href="#" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">Pricing</a>
      <a href="#" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">Docs</a>
    </nav>
    <div className="hidden items-center gap-4 md:flex">
      <a href="#" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Sign in</a>
      <a href="#" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-emerald-700">Get started</a>
    </div>
  </div>
</header>`
      ),
      d(
        "nav-floating-pill",
        "Floating Island Pill Nav",
        "Detached modern capsule bar with soft shadow, active pill indicator, and quick actions.",
        ["pill", "floating", "modern"],
        "Create a floating navbar pill, centered, max-width 780px, 20px from top edge. Clean rounded-full container with subtle border and backdrop blur. Logo on left, navigation links in center with subtle active state pill, and a dark/accent CTA button on right.",
        `<div className="w-full flex justify-center py-4 px-4">
  <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-zinc-200/80 bg-white/90 px-6 py-2.5 shadow-lg shadow-zinc-900/5 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90">
    <div className="flex items-center gap-2">
      <div className="h-6 w-6 rounded-full bg-emerald-500" />
      <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Pulse</span>
    </div>
    <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
      <a href="#" className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-900 font-semibold dark:bg-zinc-800 dark:text-zinc-100">Overview</a>
      <a href="#" className="rounded-full px-3 py-1.5 hover:text-zinc-900 dark:hover:text-zinc-100">Features</a>
      <a href="#" className="rounded-full px-3 py-1.5 hover:text-zinc-900 dark:hover:text-zinc-100">Pricing</a>
      <a href="#" className="rounded-full px-3 py-1.5 hover:text-zinc-900 dark:hover:text-zinc-100">Changelog</a>
    </div>
    <a href="#" className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-emerald-600 dark:hover:bg-emerald-500">
      Try Free
    </a>
  </nav>
</div>`
      ),
      d(
        "nav-centered-split",
        "Centered Brand with Split Nav",
        "Balanced split-navigation layout with brand logo centered in the middle of links.",
        ["centered", "minimal", "editorial"],
        "Create a navbar with the brand logo centered in the middle of the navigation bar, two links on each side with subtle hover underline indicators, and a clean action button on the far right.",
        `<header className="w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
      <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Store</a>
      <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Collections</a>
    </div>
    <a href="#" className="text-lg font-serif font-bold tracking-wider text-zinc-900 dark:text-zinc-100 uppercase">
      Atelier
    </a>
    <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
      <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">About</a>
      <a href="#" className="rounded-lg border border-zinc-300 px-3.5 py-1.5 text-xs font-semibold text-zinc-900 transition-colors hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500">Bag (0)</a>
    </div>
  </div>
</header>`
      ),
      d(
        "nav-announcement",
        "Nav with Top Announcement Banner",
        "Header featuring a dismissible announcement banner above a clean modern navigation bar.",
        ["announcement", "banner", "marketing"],
        "Create a navigation header with a top banner announcement: 'New v2.0 is live!' with a small badge and text link. Below the banner, render a clean navbar with search trigger, navigation links, and primary CTA button.",
        `<div className="w-full border-b border-zinc-200 dark:border-zinc-800">
  <div className="flex items-center justify-center gap-2 bg-emerald-600 px-4 py-2 text-xs font-medium text-white">
    <span className="rounded-full bg-white/20 px-2 py-0.5 font-bold">NEW</span>
    <span>v2.0 is now live — experience the fastest UI prompt library.</span>
    <a href="#" className="underline font-semibold ml-1">Explore →</a>
  </div>
  <header className="flex h-16 items-center justify-between bg-white px-6 dark:bg-zinc-900">
    <div className="flex items-center gap-8">
      <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Velocity</span>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Platform</a>
        <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Enterprise</a>
        <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Pricing</a>
      </nav>
    </div>
    <div className="flex items-center gap-3">
      <button className="text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-md px-2.5 py-1.5">Search ⌘K</button>
      <button className="rounded-lg bg-zinc-900 dark:bg-zinc-100 px-3.5 py-1.5 text-xs font-medium text-white dark:text-zinc-900">Start Free</button>
    </div>
  </header>
</div>`
      ),
    ],
  },
  {
    slug: "hero",
    name: "Hero Section",
    description:
      "High-converting hero layouts, split screens, interactive previews, and centered headlines.",
    designs: [
      d(
        "hero-left",
        "Left Aligned with Interactive Badges",
        "Bold headline with tight letter-spacing, supporting copy, primary & secondary buttons, and proof badges.",
        ["left-aligned", "conversion", "saas"],
        "Create a left-aligned SaaS hero section. 56px bold headline with negative tracking, crisp value proposition subtext under 60 characters per line, a solid emerald CTA with hover lift, secondary outline button, and trust indicators below.",
        `<section className="w-full py-12 md:py-20 px-6">
  <div className="mx-auto max-w-4xl">
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
      Ready for Production
    </div>
    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.08]">
      Design at the speed of <span className="text-emerald-600 dark:text-emerald-400">thought</span>.
    </h1>
    <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
      Curated layout prompts and Tailwind CSS components designed for vibe coders. Turn natural language into clean, accessible web components in seconds.
    </p>
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <a href="#" className="rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-emerald-600/30 transition-all">
        Explore Components →
      </a>
      <a href="#" className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all">
        Copy Prompt Template
      </a>
    </div>
  </div>
</section>`
      ),
      d(
        "hero-split",
        "Split Layout with Live Code Preview",
        "Two-column hero with sales copy on the left and a framed mock UI editor window on the right.",
        ["split", "preview", "saas"],
        "Create a two-column hero: left column holds headline, paragraph, and CTA. Right column features a sleek rounded container with window control dots and interactive card preview.",
        `<section className="w-full py-12 px-6">
  <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
    <div className="lg:col-span-7">
      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Framework Agnostic</span>
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
        Ship your interface before the sprint ends.
      </h2>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 max-w-lg">
        Stop writing boilerplates from scratch. Pick pre-tested design prompts, paste into Cursor or v0, and preview output immediately.
      </p>
      <div className="mt-6 flex gap-3">
        <button className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">Start Building</button>
        <button className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium">Read Docs</button>
      </div>
    </div>
    <div className="lg:col-span-5">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4 shadow-xl">
        <div className="flex items-center gap-1.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
          <div className="h-3 w-3 rounded-full bg-rose-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-mono text-zinc-400">PreviewComponent.tsx</span>
        </div>
        <div className="mt-4 rounded-xl bg-white dark:bg-zinc-800 p-5 shadow-sm border border-zinc-100 dark:border-zinc-700/50">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center">99%</div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Speed Score</p>
              <p className="text-xs text-zinc-500">Optimized Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
      ),
      d(
        "hero-center",
        "Centered Launchpad Hero",
        "Centered headline with release pill tag, dual CTA, and clean spacing.",
        ["centered", "minimal"],
        "Create a centered launchpad hero section with a top release pill tag, 54px bold heading, centered paragraph, and action buttons.",
        `<section className="w-full py-16 px-6 text-center">
  <div className="mx-auto max-w-3xl">
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 px-4 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-6">
      <span>✨ PasteUI Release v2.0</span>
      <span className="text-emerald-500">→</span>
    </div>
    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
      The prompt library built for <br className="hidden sm:block" />
      <span className="text-emerald-600 dark:text-emerald-400">modern web developers</span>
    </h1>
    <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
      Copy rich layout prompts with built-in accessibility, responsive guidelines, and Tailwind design tokens.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <button className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">Get Started Free</button>
      <button className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-medium">Browse Prompts</button>
    </div>
  </div>
</section>`
      ),
      d(
        "hero-terminal",
        "Developer CLI Launch Hero",
        "Terminal-inspired hero layout with simulated bash prompt, 1-click command copy, and feature proof pills.",
        ["terminal", "developer", "cli", "interactive"],
        "Create a developer-focused CLI hero section. Top eyebrow pill with monospace status. High-contrast bold headline 'Code the frontend with deterministic prompts'. Below the copy, embed an interactive terminal window with copyable install command, simulated terminal output, and quick action tags.",
        `<section className="w-full py-12 px-6">
  <div className="mx-auto max-w-4xl text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 mb-4">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      <span>v2.1 · CLI & AI prompt templates</span>
    </div>
    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
      Developer studio for <span className="text-emerald-600 dark:text-emerald-400">AI prompts</span>
    </h1>
    <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
      Stop fixing hallucinated CSS. Copy deterministic prompts engineered with exact layout constraints and accessible states.
    </p>
  </div>
</section>`
      ),
    ],
  },
  {
    slug: "pricing",
    name: "Pricing",
    description:
      "Modern tier matrices, interactive billing toggles, feature checklists, and highlighted popular plans.",
    designs: [
      d(
        "pricing-tier",
        "Interactive Tier Card with Billing Toggle",
        "SaaS pricing tier card with monthly/annual toggle, savings badge, feature checklist, and prominent CTA.",
        ["pricing", "toggle", "saas", "interactive"],
        "Create an interactive SaaS pricing tier card with a monthly vs annual toggle button. Include a price display with tabular numbers, 'Billed annually - save 20%' chip, 4-item feature checklist with emerald checkmarks, and a solid CTA button with hover micro-interaction.",
        `<div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Pro Developer</h3>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">For teams building with AI coders</p>
    </div>
    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">Popular</span>
  </div>
  <div className="mt-4 flex items-baseline gap-1">
    <span className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">$29</span>
    <span className="text-xs text-zinc-500 dark:text-zinc-400">/ user / month</span>
  </div>
  <ul className="mt-6 space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300">
    <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Unlimited prompt copying</li>
    <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Full Tailwind JSX source</li>
    <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Dark & light mode verified</li>
    <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Cursor & Claude rules integration</li>
  </ul>
  <button className="mt-6 w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors">Start 14-day trial</button>
</div>`
      ),
      d(
        "pricing-comparison",
        "Minimalist Starter vs Pro Duo",
        "Two-tier side-by-side pricing layout with free tier and highlighted pro tier.",
        ["pricing", "duo", "minimal"],
        "Create a two-card pricing comparison: a free starter plan with outline border and a highlighted Pro plan with dark/emerald background, contrasting buttons, and clear usage limits.",
        `<div className="grid gap-4 sm:grid-cols-2 w-full max-w-2xl">
  <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Community</p>
    <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">$0</p>
    <p className="mt-1 text-xs text-zinc-500">Free forever for personal projects</p>
    <button className="mt-4 w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 text-xs font-medium text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">Get Started</button>
  </div>
  <div className="rounded-xl border border-emerald-500 bg-emerald-950/20 p-5 dark:bg-emerald-950/40">
    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Team Plan</p>
    <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">$49</p>
    <p className="mt-1 text-xs text-zinc-500">Unlimited seats & full prompt repo</p>
    <button className="mt-4 w-full rounded-lg bg-emerald-600 py-2 text-xs font-semibold text-white hover:bg-emerald-700">Upgrade Now</button>
  </div>
</div>`
      ),
    ],
  },
  {
    slug: "card",
    name: "Cards & Bento",
    description:
      "Stat cards, feature bento boxes, user profiles, and interactive cards.",
    designs: [
      d(
        "card-stat",
        "Metric Trend Card",
        "Financial metric card with positive growth chip, tabular numbers, and secondary details.",
        ["stat", "metric", "dashboard"],
        "Create a clean metric stat card with white/dark background, subtle border, small uppercase label, 36px bold tabular-nums value, and an emerald positive growth percentage pill with an arrow icon.",
        `<div className="w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all hover:border-emerald-500/50">
  <div className="flex items-center justify-between">
    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Monthly Revenue</p>
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
      ↑ 18.4%
    </span>
  </div>
  <p className="mt-3 text-3xl font-extrabold tracking-tight tabular-nums text-zinc-900 dark:text-zinc-100">$48,290.00</p>
  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Compared to $40,780 last month</p>
</div>`
      ),
      d(
        "card-bento",
        "Interactive 3-Tile Bento Grid",
        "Asymmetrical bento grid specimen with live stat pill, code chip, and feature spotlight tile.",
        ["bento", "grid", "modern", "interactive"],
        "Create an interactive bento grid component with 3 tiles: Tile 1: primary feature with live pulsing status indicator. Tile 2: compact speed score stat with circular progress. Tile 3: syntax code block with click-to-copy.",
        `<div className="grid gap-3 sm:grid-cols-3 w-full max-w-2xl">
  <div className="sm:col-span-2 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
    <span className="text-xs font-mono font-semibold text-emerald-600">01 / SPEED</span>
    <h4 className="mt-2 text-base font-bold text-zinc-900 dark:text-zinc-100">Zero Runtime Overhead</h4>
    <p className="mt-1 text-xs text-zinc-500 leading-relaxed">Pure Tailwind utilities compile to minimal CSS.</p>
  </div>
  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-800/50">
    <span className="text-2xl font-bold font-mono text-emerald-600">0ms</span>
    <p className="mt-1 text-xs text-zinc-500">Layout shift score</p>
  </div>
</div>`
      ),
      d(
        "card-basic",
        "Feature Value Card",
        "Icon tile, clean heading, paragraph description, and hover border highlight.",
        ["feature", "bento", "minimal"],
        "Create an aesthetic feature card: icon container with emerald gradient, 18px semibold title, 14px description text, and a hover effect that sharpens the border and illuminates the card.",
        `<div className="group w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
    ⚡
  </div>
  <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">Zero Configuration</h3>
  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
    Every prompt includes complete layout constraints, accessible states, and standard Tailwind CSS classes.
  </p>
  <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline">
    Learn more →
  </div>
</div>`
      ),
      d(
        "card-testimonial",
        "Social Proof Customer Quote Card",
        "Customer testimonial card with 5-star rating, quote prose, user avatar, and verified company tag.",
        ["testimonial", "social-proof", "rating"],
        "Create a verified customer quote card: 5 star rating icons, authentic customer quote under 100 characters, author name, job role, and verified company badge.",
        `<div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
  <div className="flex text-amber-400 text-xs gap-1">★★★★★</div>
  <p className="mt-3 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
    &quot;PasteUI cut our Cursor prompt iteration time in half. Components actually render cleanly on the first try.&quot;
  </p>
  <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-3 dark:border-zinc-800">
    <div className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">JD</div>
    <div>
      <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Jane Doe</p>
      <p className="text-[10px] text-zinc-500">Staff Frontend Engineer</p>
    </div>
  </div>
</div>`
      ),
      d(
        "card-profile",
        "User Profile Badge Card",
        "Avatar, verified status badge, role details, and quick action buttons.",
        ["profile", "user", "social"],
        "Create a profile card with an avatar tile, user name, role badge, bio text, and dual actions: primary 'Follow' button and outline 'Message' button.",
        `<div className="w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 text-center shadow-sm">
  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-md">
    AS
  </div>
  <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-100">Ankit Sharma</h3>
  <p className="text-xs text-zinc-500 dark:text-zinc-400">Full-Stack Engineer & Designer</p>
  <div className="mt-4 flex items-center justify-center gap-2">
    <button className="rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-xs font-semibold text-white dark:text-zinc-900 hover:opacity-90">Follow</button>
    <button className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-400">Message</button>
  </div>
</div>`
      ),
    ],
  },
  {
    slug: "button",
    name: "Buttons & CTAs",
    description:
      "Solid, outline, ghost, animated shimmer, magnetic action, and pill button states.",
    designs: [
      d(
        "btn-set",
        "Component Button Matrix",
        "Solid emerald, dark ink, outline, and ghost variants with responsive states.",
        ["buttons", "variants", "ui"],
        "Create a versatile button kit: solid emerald (#10b981), high-contrast ink, clean outline border, and subtle ghost button with focus rings and active states.",
        `<div className="flex flex-wrap items-center gap-3 p-4">
  <button className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors">Solid Primary</button>
  <button className="rounded-xl bg-zinc-900 dark:bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 hover:opacity-90 transition-opacity">Dark Ink</button>
  <button className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-5 py-2.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">Outline</button>
  <button className="rounded-xl px-5 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">Ghost</button>
</div>`
      ),
      d(
        "btn-shimmer",
        "Animated Shimmer Glow Button",
        "High-taste button with subtle passing light gradient shimmer and smooth hover scale.",
        ["shimmer", "animation", "framer", "micro-interaction"],
        "Create an animated shimmer CTA button: dark backdrop with an emerald-hued border, subtle sweeping light reflection gradient, white semibold text, and smooth hover scale micro-animation.",
        `<div className="p-4 flex items-center justify-center">
  <button className="relative inline-flex h-11 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400">
    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#047857_0%,#34d399_50%,#047857_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-zinc-950 px-6 py-1 text-xs font-semibold text-zinc-100 backdrop-blur-3xl hover:bg-zinc-900 transition-colors">
      Generate UI Component ⚡
    </span>
  </button>
</div>`
      ),
      d(
        "btn-icon",
        "Buttons with Micro-Interactions",
        "Buttons with directional arrows that slide on hover and icon-only variants.",
        ["interactive", "icons", "micro-animations"],
        "Create button variants with SVG icons: leading icon, trailing icon that translates 3px right on hover, and an icon-only square button with accessible label.",
        `<div className="flex flex-wrap items-center gap-3 p-4">
  <button className="group flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-all">
    <span>Continue</span>
    <span className="transition-transform group-hover:translate-x-1">→</span>
  </button>
  <button className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-400">
    <span>＋</span>
    <span>Add Project</span>
  </button>
</div>`
      ),
      d(
        "btn-pill",
        "Pill Size Scale",
        "Three-tier pill button sizes (sm, md, lg) with smooth rounded-full styling.",
        ["pills", "sizes", "scales"],
        "Create pill buttons (rounded-full) in three standard heights (32px, 40px, 48px) with proportional text and padding.",
        `<div className="flex flex-wrap items-center gap-3 p-4">
  <button className="rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-semibold text-white hover:bg-emerald-700">Small Pill</button>
  <button className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Medium Pill</button>
  <button className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-6 py-2.5 text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700">Large Pill</button>
</div>`
      ),
    ],
  },
  {
    slug: "modal",
    name: "Modals & Dialogs",
    description:
      "Accessible command palettes (⌘K), alert dialogs, confirmation prompts, and slide-in panels.",
    designs: [
      d(
        "dialog-command",
        "Interactive Command Palette (⌘K)",
        "Keyboard-driven search dialog with category sections, instant filter, and keyboard shortcuts.",
        ["modal", "command", "keyboard", "dialog"],
        "Create an accessible Command Palette (⌘K) dialog. Dark/light backdrop with backdrop-blur, search input at top with magnifying glass, section headings ('Components', 'Navigation', 'Actions'), keyboard navigation highlights, and footer shortcut legend.",
        `<div className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-2xl overflow-hidden dark:border-zinc-800 dark:bg-zinc-900">
  <div className="flex items-center border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
    <span className="text-zinc-400 mr-2.5 text-sm">🔍</span>
    <input type="text" placeholder="Type a command or search UI..." className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100" />
    <span className="rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800">ESC</span>
  </div>
  <div className="p-2 space-y-1 text-xs">
    <div className="px-2 py-1 text-[10px] font-semibold text-zinc-400 uppercase">Recent Components</div>
    <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-700 dark:text-emerald-300">
      <span>Sticky Top Nav</span>
      <span className="font-mono text-[10px]">↵</span>
    </div>
    <div className="flex items-center justify-between rounded-lg px-3 py-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800">
      <span>Interactive Pricing Tier</span>
      <span className="font-mono text-[10px]">↵</span>
    </div>
  </div>
</div>`
      ),
    ],
  },
  {
    slug: "footer",
    name: "Footers",
    description:
      "Multi-column SaaS footers, minimalist developer bars, newsletter inputs, and status badges.",
    designs: [
      d(
        "footer-columns",
        "Multi-Column Developer Footer",
        "Comprehensive 4-column footer with brand statement, links, newsletter form, and system status indicator.",
        ["footer", "links", "newsletter", "columns"],
        "Create a comprehensive 4-column footer: Column 1 holds brand mark, tagline, and green operational status badge. Columns 2 and 3 hold product and resource links. Column 4 holds a compact newsletter signup form.",
        `<footer className="w-full border-t border-zinc-200 bg-zinc-50 py-12 px-6 dark:border-zinc-800 dark:bg-zinc-950">
  <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <span className="font-bold text-zinc-900 dark:text-zinc-100">PasteUI</span>
      <p className="mt-2 text-xs text-zinc-500 leading-relaxed">Prompt-first UI patterns and verified Tailwind JSX.</p>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        All systems operational
      </div>
    </div>
    <div>
      <p className="text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100">Library</p>
      <ul className="mt-3 space-y-2 text-xs text-zinc-500">
        <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Navbars</a></li>
        <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Hero Sections</a></li>
        <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Pricing Tables</a></li>
      </ul>
    </div>
    <div>
      <p className="text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100">Ecosystem</p>
      <ul className="mt-3 space-y-2 text-xs text-zinc-500">
        <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Cursor Rules</a></li>
        <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Claude Prompting</a></li>
        <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Tailwind 3 & 4</a></li>
      </ul>
    </div>
    <div>
      <p className="text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100">Stay Updated</p>
      <p className="mt-1 text-xs text-zinc-500">Get new prompts every Friday.</p>
      <div className="mt-3 flex gap-1.5">
        <input type="email" placeholder="you@domain.com" className="w-full rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs dark:border-zinc-700 dark:bg-zinc-900" />
        <button className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">Join</button>
      </div>
    </div>
  </div>
</footer>`
      ),
    ],
  },
  {
    slug: "typography",
    name: "Typography",
    description:
      "Serif pairing, grotesk bold headings, and monospace technical codes.",
    designs: [
      d(
        "type-serif",
        "Editorial Serif & Clean Sans",
        "High-end editorial pair with serif display font and legible system sans body.",
        ["editorial", "serif", "reading"],
        "Create an editorial typography specimen pairing Georgia/Source Serif for headlines with clean system UI sans for body text. Perfect line-height and contrast.",
        `<div className="w-full max-w-md p-6">
  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
    The architecture of quiet clarity
  </h2>
  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
    Good software interfaces are felt before they are noticed. Every line, spacer, and character weight works together to eliminate user friction.
  </p>
</div>`
      ),
      d(
        "type-mono",
        "Developer Monospace Code Block",
        "Code display card with syntax styling, copy action, and monospace accents.",
        ["code", "mono", "developer"],
        "Create a developer code typography specimen with inline code chips and a dark-bordered command window with copy action.",
        `<div className="w-full max-w-md rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 p-4 text-zinc-100 font-mono text-xs shadow-lg">
  <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-zinc-800">
    <span>terminal</span>
    <span className="text-[10px]">bash</span>
  </div>
  <p className="mt-3 text-emerald-400">$ npx create-pasteui-app@latest</p>
  <p className="text-zinc-400">✓ Dependencies verified</p>
  <p className="text-zinc-400">✓ Tailwind CSS initialized</p>
  <p className="mt-2 text-zinc-200 font-bold">Ready to paste prompts!</p>
</div>`
      ),
    ],
  },
];
