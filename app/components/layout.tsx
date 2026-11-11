import Sidebar, { MobileCategoryNav } from "@/components/Sidebar";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-4rem)]">
      {/* Mobile Category Bar */}
      <MobileCategoryNav />

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden w-60 shrink-0 md:block border-r border-line bg-panel">
        <div className="sticky top-16 h-[calc(100vh-4rem)] w-60 overflow-y-auto studio-scroll">
          <Sidebar />
        </div>
      </aside>

      {/* Main component dashboard canvas */}
      <div className="flex-1 min-w-0 bg-bg p-6 lg:p-10">{children}</div>
    </div>
  );
}
