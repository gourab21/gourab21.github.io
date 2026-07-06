import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/gd2.png";
import { PageShell } from "@/components/page-shell";
import { ProfileLinkRow } from "@/components/profile-links";
import { news, highlight, type NewsItem } from "@/Editing/news";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  component: HomePage,
});

import { ReactNode } from "react";

function HomePage() {
  const [allOpen, setAllOpen] = useState(false);
  const [active, setActive] = useState<NewsItem | null>(null);
  const [highlightOpen, setHighlightOpen] = useState(false);
  // const recent = news.slice(0, 4);

  return (
    <PageShell>
      <section className="grid gap-10 md:grid-cols-[minmax(0,1fr)_1.6fr] md:gap-14 md:items-start">
        <div className="w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface-strong shadow-sm">
            <img
              src={portrait}
              alt="Portrait of Gourab Das"
              width={800}
              height={1000}
              className="aspect-[4/4.7] w-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            Researcher, Dept. of CSE, IIIT Dharwad, India.
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-[4.25rem]">
            Gourab <span className="text-accent">Das.</span>
          </h1>
          <p className="text-xl font-serif italic text-foreground/80 sm:text-2xl">
            Building systems that actually matter.
          </p>
          <p className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
            I am a Researcher in the Department of CSE at
            <a
              href="https://www.iiitdwd.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              {" "}
              IIIT Dharwad
            </a>
            , India. An Alumni of
            <a
              href="https://rkmvdeoghar.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              {" "}
              RKMV Deoghar
            </a>
            ,
            <a
              href="https://arsdcollege.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              {" "}
              ARSD College{" "}
            </a>
            - University of Delhi, &
            <a
              href="https://www.vidyamandira.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              {" "}
              RKM Vidyamandira
            </a>
            , Belur Math, India. My work sits at the intersection of Machine Learning, Safe & Secure
            Biometrics, & Forgery Detection.
          </p>

          <ProfileLinkRow />

          <div className="flex flex-wrap items-center gap-3 pt-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              Contact me
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Read publications
            </Link>
          </div>
        </div>
      </section>

      {highlight.title && (
        <section className="mt-20">
          <button
            type="button"
            onClick={() => setHighlightOpen(true)}
            className="glow-border group block w-full rounded-2xl bg-surface px-6 py-4 text-left transition-transform hover:scale-[1.01] sm:px-8 sm:py-5"
          >
            <div className="flex items-start gap-1">
              <span
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--badge-bg)",
                  color: "var(--badge-text)",
                }}
              >
                <span
                  className="size-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--badge-dot)" }}
                />
                {highlight.badge}
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{highlight.title}</h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground">
              {highlight.subtitle}
            </p>
          </button>
        </section>
      )}
      <section className="mt-10">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Research areas
          </p>
          <p className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Forgery Detection · ID Cards · Biometrics · UAV Communication
          </p>
          <p className="mt-4 text-2xl text-sm leading-relaxed text-muted-foreground">
            My Research interests cover a wide range of topics in the field of Machine Learning,
            Computer Vision, Cryptography, and Secure Communications. My Present Work focuses on the
            development of robust and efficient algorithms for forgery detection, ID Card
            authentication, and biometric recognition. Additionally, I am also interested in
            exploring the domain of Authentication & Safe and Secure Communications in UAVs. My
            target is to create systems for the real-world that are not only accurate but also
            reliable and secure, ensuring the safety and privacy of users in various applications.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Latest
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              News &amp; updates
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setAllOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View all
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        <div className="rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="max-h-[280px] overflow-y-auto">
            <ul className="divide-y divide-border">
              {news.map((n) => (
                <li key={n.title}>
                  <button
                    type="button"
                    onClick={() => setActive(n)}
                    className="group flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-strong"
                  >
                    <span className="mt-0.5 shrink-0 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {n.date}
                    </span>
                    <span className="flex-1 text-sm leading-relaxed text-foreground group-hover:text-accent">
                      {n.title}
                    </span>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Dialog open={allOpen} onOpenChange={setAllOpen}>
        <DialogContent className="max-h-[85vh] w-[95vw] sm:max-w-3xl lg:max-w-5xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>All news &amp; updates</DialogTitle>
            <DialogDescription>A complete log of recent milestones.</DialogDescription>
          </DialogHeader>
          <ul className="divide-y divide-border">
            {news.map((n) => (
              <li key={n.title} className="py-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {n.date}
                </p>
                <p className="mt-1 text-sm text-foreground">{n.title}</p>
                {n.detail && <p className="mt-1 text-sm text-muted-foreground">{n.detail}</p>}
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="w-[95vw] sm:max-w-2xl lg:max-w-4xl">
          {" "}
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-base">{active.title}</DialogTitle>
                <DialogDescription>{active.date}</DialogDescription>
              </DialogHeader>
              {active.detail && (
                <p className="text-sm leading-relaxed text-muted-foreground">{active.detail}</p>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={highlightOpen} onOpenChange={setHighlightOpen}>
        <DialogContent className="max-w-3xl">
          {" "}
          <DialogHeader>
            <DialogTitle>{highlight.title}</DialogTitle>
            <DialogDescription>{highlight.date}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed">{highlight.detail}</div>
          <div className="flex flex-wrap gap-2 pt-2">
            {highlight.primaryButtonText && highlight.primaryButtonHref && (
              <a
                href={highlight.primaryButtonHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground hover:opacity-90"
              >
                {highlight.primaryButtonText} →
              </a>
            )}

            {highlight.secondaryButtonText && highlight.secondaryButtonHref && (
              <a
                href={highlight.secondaryButtonHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold text-foreground hover:border-accent hover:text-accent"
              >
                {highlight.secondaryButtonText} →
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
