import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-12 space-y-3">
      {eyebrow && (
        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {description && (
        <p className="max-w-2xl text-lg font-serif text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
