import type { Design } from "@/data/designs";
import DesignCard from "@/components/DesignCard";

export default function DesignGrid({
  designs,
  isNavbarCategory = false,
  headingLevel = "h2",
}: {
  designs: Design[];
  isNavbarCategory?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <div
      className={
        isNavbarCategory
          ? "flex flex-col gap-8 w-full"
          : "grid gap-6 md:grid-cols-2 xl:grid-cols-3 w-full"
      }
    >
      {designs.map((d) => (
        <DesignCard
          key={d.id}
          design={d}
          forceFullWidth={isNavbarCategory || d.id.startsWith("nav-")}
          headingLevel={headingLevel}
        />
      ))}
    </div>
  );
}
