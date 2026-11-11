# PasteUI
Next.js 14 (App Router) + TypeScript + Tailwind. Run: `npm install && npm run dev`.
## Add a design
1. Add an entry in `data/designs.ts` (inside a category). 2. Add a preview with the same `id` in `components/previews.tsx`.
## Add a category
Add `{ slug, name, designs: [] }` to `categories` in `data/designs.ts`. Sidebar and routes update automatically.
## Paywall later
Every design has `isPremium`. Wire Clerk/Stripe into `hooks/useAccess.ts`; `PremiumGate` already uses it.
Contact: ankitsharma7805@gmail.com · github.com/ankitsharma38
