import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { useTheme } from "./theme-provider";
import SplashCursor from "./SplashCursor";

export function PageShell({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className="site-frame min-h-screen bg-background text-foreground">
      <div className="ambient-grid" aria-hidden="true" />
      <SplashCursor
        colors={
          theme === "dark" ? ["#4f8cff", "#76a9ff", "#f39a48"] : ["#2864df", "#6b9cff", "#e78b3c"]
        }
        rainbow={false}
        colorSpeed={0.18}
        intensity={0.28}
        size={0.62}
        force={0.55}
        swirl={2.5}
        trail={0.42}
        momentum={0.55}
        shading={0.35}
        glow={0.08}
        quality="low"
        clickSplash
        intro={false}
        theme={theme}
        zIndex={0}
      />
      <SiteHeader />
      <main className="page-content relative z-[1] mx-auto min-h-[75vh] max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="page-heading mb-12 max-w-3xl">
      {eyebrow && (
        <p className="eyebrow">
          <span className="status-dot" />
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="status-dot" />
      {children}
    </p>
  );
}

export function PageEndLink({
  to,
  children,
}: {
  to: "/publications" | "/activities" | "/cv" | "/gallery" | "/contact";
  children: ReactNode;
}) {
  return (
    <Link to={to} className="button-quiet mt-8">
      {children}
      <ArrowUpRight className="size-4" />
    </Link>
  );
}
