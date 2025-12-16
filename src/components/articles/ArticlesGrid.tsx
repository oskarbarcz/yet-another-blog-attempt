import type { ReactNode } from "react";

export default function ArticlesGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
