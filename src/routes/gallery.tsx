import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Notes — Dr. A. Researcher" },
      { name: "description", content: "Photos from fieldwork, conferences, and short blog notes." },
      { property: "og:title", content: "Gallery & Notes — Dr. A. Researcher" },
      { property: "og:description", content: "A mixed gallery of photographs and short essays." },
    ],
  }),
  component: GalleryPage,
});

type Item =
  | { kind: "photo"; id: string; src: string; caption: string; span?: "wide" | "tall" }
  | { kind: "note"; id: string; title: string; date: string; excerpt: string; body: string; span?: "wide" | "tall" };

const items: Item[] = [
  {
    kind: "note",
    id: "note-1",
    title: "Notes on Hardware–Software Co-Design",
    date: "August 2024",
    excerpt: "A reflection from the summer research retreat on how compute is no longer the bottleneck.",
    body:
      "This week at the retreat, three teams independently reported the same finding: TPU utilization is being capped not by kernel efficiency but by inter-node communication. The implication is uncomfortable — we've been optimizing the wrong layer for two years. I want to explore what a topology-first training loop looks like.",
    span: "wide",
  },
  {
    kind: "photo",
    id: "ph-1",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    caption: "Server room, summer visit",
  },
  {
    kind: "photo",
    id: "ph-2",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    caption: "Whiteboard sketches, Adaptive Systems Lab",
  },
  {
    kind: "note",
    id: "note-2",
    title: '"The bottleneck is the topology."',
    date: "July 2024",
    excerpt: "A one-line summary of the paper I keep meaning to write.",
    body:
      "I keep coming back to this. The bottleneck in modern distributed learning is no longer compute — it's the topology of communication itself. There is a paper here, and I have not written it yet.",
  },
  {
    kind: "photo",
    id: "ph-3",
    src: "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?w=1200&q=80",
    caption: "NeurIPS 2023 poster session",
    span: "tall",
  },
  {
    kind: "photo",
    id: "ph-4",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    caption: "Keynote at DistributedML workshop",
  },
  {
    kind: "note",
    id: "note-3",
    title: "On mentoring first-year PhDs",
    date: "May 2024",
    excerpt: "Three small habits that changed how I advise.",
    body:
      "Advising is mostly about listening. I've started ending every meeting by asking 'what are you worried about that we didn't discuss?' — and it changes everything. The second habit: writing back a 3-line summary within an hour. The third: never solving the problem in the first meeting.",
  },
  {
    kind: "photo",
    id: "ph-5",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    caption: "Late night, empty office",
    span: "wide",
  },
];

function spanClass(span?: "wide" | "tall") {
  if (span === "wide") return "sm:col-span-2";
  if (span === "tall") return "sm:row-span-2";
  return "";
}

function GalleryPage() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <PageShell>
      <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-surface-strong">
        <img
          src="https://images.unsplash.com/photo-1524169358666-79f22534bc6e?w=2000&q=80"
          alt="Gallery banner"
          className="h-64 w-full object-cover sm:h-80 md:h-96"
        />
      </div>


      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) =>
          it.kind === "photo" ? (
            <button
              key={it.id}
              onClick={() => setActive(it)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-strong text-left ${spanClass(it.span)}`}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs font-semibold text-white">{it.caption}</p>
              </div>
            </button>
          ) : (
            <button
              key={it.id}
              onClick={() => setActive(it)}
              className={`flex flex-col justify-between rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-accent hover:shadow-lg ${spanClass(it.span)}`}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {it.date}
              </span>
              <div>
                <h3 className="text-lg font-bold leading-tight">{it.title}</h3>
                <p className="mt-2 line-clamp-3 font-serif text-sm text-muted-foreground">
                  {it.excerpt}
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Read entry →
              </span>
            </button>
          )
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border border-border bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur hover:bg-background"
            >
              <X className="size-4" />
            </button>
            {active.kind === "photo" ? (
              <>
                <img src={active.src} alt={active.caption} className="w-full object-cover" />
                <p className="p-6 font-serif text-sm text-muted-foreground">{active.caption}</p>
              </>
            ) : (
              <div className="p-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {active.date}
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">{active.title}</h2>
                <p className="mt-6 font-serif text-base leading-relaxed text-muted-foreground">
                  {active.body}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </PageShell>
  );
}
