import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { PageShell } from "@/components/page-shell";
import { ProfileLinkRow } from "@/components/profile-links";
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

type NewsItem = {
  date: string;
  title: string;
  detail?: string;
  href?: string;
};

const news: NewsItem[] = [
  {
    date: "Jun 2026",
    title: "Paper accepted at NeurIPS 2026 on efficient distributed training.",
    detail: "Our work on adaptive gradient compression for large-scale training was accepted at NeurIPS 2026.",
  },
  {
    date: "May 2026",
    title: "Invited talk at IISc Bangalore on human-centered ML systems.",
    detail: "Delivered a talk covering three years of work on interpretable and reliable ML deployments.",
  },
  {
    date: "Apr 2026",
    title: "Received Best Reviewer Award at ACM SIGCOMM 2026.",
  },
  {
    date: "Feb 2026",
    title: "Started collaboration with IIT Bombay on federated systems.",
    detail: "A joint effort exploring privacy-preserving federated analytics across edge clusters.",
  },
  {
    date: "Jan 2026",
    title: "Journal paper accepted in IEEE TPDS.",
    detail: "Extended version of our SC'25 paper with new theoretical analysis and evaluations.",
  },
  {
    date: "Dec 2025",
    title: "Presented at SC 2025 in St. Louis.",
  },
  {
    date: "Nov 2025",
    title: "Selected as TPC member for MLSys 2026.",
  },
  {
    date: "Sep 2025",
    title: "Awarded Prime Minister's Research Fellowship (PMRF).",
    detail: "Recognition for ongoing PhD research on scalable and trustworthy ML systems.",
  },
];

function HomePage() {
  const [allOpen, setAllOpen] = useState(false);
  const [active, setActive] = useState<NewsItem | null>(null);
  const [highlightOpen, setHighlightOpen] = useState(false);
  const recent = news.slice(0, 4);

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
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            Research Scholar, Dept. of CSE, IIIT Dharwad, India
          </div>
        </div>

        <div className="space-y-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">
            Research Scholar
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-[4.25rem]">
            Gourab <span className="text-accent">Das.</span>
          </h1>
          <p className="text-xl font-serif italic text-foreground/80 sm:text-2xl">
            Building systems that actually matter.
          </p>
          <p className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
            Research Scholar in the Department of Computer Science &amp; Electronics at
            IIIT Dharwad, India. My work sits at the intersection of machine learning,
            distributed systems, and human-centered AI — grounded in real-world constraints
            and impact.
          </p>

          <ProfileLinkRow />

          <div className="flex flex-wrap items-center gap-3 pt-2">
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

      <section className="mt-20">
        <button
          type="button"
          onClick={() => setHighlightOpen(true)}
          className="glow-border group block w-full rounded-2xl bg-surface p-6 text-left transition-transform hover:scale-[1.01] sm:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Highlight
            </span>
          </div>
          <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
            Invited Special Session Speaker · IEEE INDICON 2026
          </h3>
          <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground">
            Leading a special session on <strong className="text-foreground">Scalable &amp; Trustworthy ML Systems</strong> at IEEE INDICON 2026. Click to view details.
          </p>
        </button>
      </section>

      <section className="mt-10">

        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Research areas
          </p>
          <p className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Machine Learning · Distributed Systems · Human-Centered AI
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Research spans scalable ML training, reliable distributed infrastructure, and
            interfaces that make AI legible and useful to the people who depend on it.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Latest
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">News &amp; updates</h2>
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

        <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
          {recent.map((n) => (
            <li key={n.title}>
              <button
                type="button"
                onClick={() => setActive(n)}
                className="group flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-surface-strong"
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
      </section>

      <Dialog open={allOpen} onOpenChange={setAllOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
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
                {n.detail && (
                  <p className="mt-1 text-sm text-muted-foreground">{n.detail}</p>
                )}
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
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
          <DialogHeader>
            <DialogTitle>Invited Special Session Speaker</DialogTitle>
            <DialogDescription>IEEE INDICON 2026 · December 2026</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong className="text-foreground">Session:</strong> Scalable &amp; Trustworthy ML Systems for Real-World Deployment.
            </p>
            <p>
              <strong className="text-foreground">Venue:</strong> IEEE INDICON 2026, IIT Bombay, India.
            </p>
            <p className="text-muted-foreground">
              The session brings together researchers working on <strong className="text-foreground">efficient distributed training</strong>, <strong className="text-foreground">federated analytics</strong>, and <strong className="text-foreground">human-centered ML interfaces</strong>. Talks focus on practical deployment lessons from production systems.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://indicon2026.ieeeindia.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground hover:opacity-90"
              >
                Conference site →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold text-foreground hover:border-accent hover:text-accent"
              >
                Call for papers →
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </PageShell>
  );
}
