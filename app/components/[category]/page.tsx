import { notFound } from "next/navigation";
import { categories } from "@/data/designs";
import DesignGrid from "@/components/DesignGrid";

export const generateStaticParams = () =>
  categories.map((c) => ({ category: c.slug }));

export default function Page({ params }: { params: { category: string } }) {
  const c = categories.find((x) => x.slug === params.category);
  if (!c) notFound();

  const isNavbar = c.slug === "navbar";

  return (
    <div className="w-full">
      {/* Category Header */}
      <div className="mb-8 border-b border-line pb-6">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {c.name}
            </h1>
            <p className="mt-1 text-sm text-muted max-w-2xl">
              {c.description}
            </p>
          </div>
          <span className="text-xs text-muted font-medium tabular-nums">
            {c.designs.length} {c.designs.length === 1 ? "design" : "designs"}
          </span>
        </div>
      </div>

      {/* Grid or Horizontal Stack */}
      <DesignGrid designs={c.designs} isNavbarCategory={isNavbar} />
    </div>
  );
}
