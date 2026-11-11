"use client";
import { useAccess } from "@/hooks/useAccess";
export default function PremiumGate({ isPremium, children }: { isPremium: boolean; children: React.ReactNode }) {
  const { hasFullAccess } = useAccess();
  if (isPremium && !hasFullAccess) return <div className="rounded-xl border border-line p-6 text-sm text-muted">Subscribe to unlock this prompt.</div>;
  return <>{children}</>;
}
