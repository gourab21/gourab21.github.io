import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Play } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { PageShell } from "@/components/page-shell";
import U_PAL from "@/assets/u_pal.jpg";
import IIT_KGP_PM from "@/assets/iit_kgp.jpg";
import Newspaper from "@/assets/newspaper.jpg";
import rkmveri from "@/assets/rkmveri.jpg";
import stxaviers from "@/assets/stxaviers.jpg";
import pixelation from "@/assets/pixelation.jpg";
import galleryBanner from "@/assets/linkedin.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Notes — Gourab Das" },
      { name: "description", content: "Photos from fieldwork, conferences, and short blog notes." },
      { property: "og:title", content: "Gallery & Notes — Gourab Das" },
      { property: "og:description", content: "A mixed gallery of photographs and short essays." },
    ],
  }),
  component: GalleryPage,
});

type Item =
  | { kind: "photo"; id: string; src: string; caption: string; span?: "wide" | "tall" }
  | {
      kind: "video";
      id: string;
      videoId: string;
      /** Start time in seconds (optional) */
      start?: number;
      caption: string;
      span?: "wide" | "tall";
    }
  | {
      kind: "note";
      id: string;
      title: string;
      date: string;
      excerpt: string;
      body: string;
      span?: "wide" | "tall";
    };

const items: Item[] = [
  {
    kind: "photo",
    id: "ph-2",
    src: IIT_KGP_PM,
    caption: "Research Internship at IIT KGP under Prof. Pabitra Mitra.",
    span: "tall",
  },
  {
    kind: "photo",
    id: "ph-1",
    src: U_PAL,
    caption:
      "With Prof. Umapada Pal Sir, Dr. Pavan Kumar C Sir & Prof. Raghavendra Ramachandra Sir.",
  },
  {
    kind: "photo",
    id: "ph-3",
    src: Newspaper,
    caption: "Published in Uttarbanga Samgbad after XII Results.",
  },
  {
    kind: "photo",
    id: "ph-3",
    src: rkmveri,
    caption:
      "1st Position - The Turing Show (Coding Contest) at Perceptron (Tech Fest) @ RKMVERI, Belur Math, India ",
  },
  {
    kind: "photo",
    id: "ph-4",
    src: stxaviers,
    caption:
      "1st Position - CodePlay (Coding Contest) at eXabyte @ St.Xaviers College, Kolkata, India ",
  },
  {
    kind: "photo",
    id: "ph-3",
    src: pixelation,
    caption:
      "PR Head of Pixelation - Photography Society of ARSD COllege, University of Delhi, India(2022-2023).",
  },

  {
    kind: "video",
    id: "vid-1",
    videoId: "Sergu3o4wD8",
    caption: "Welcoming the Freshers 2026",
  },
  {
    kind: "video",
    id: "vid-2",
    videoId: "OCcE2ebP9hw",
    start: 635,
    caption: "Debate in RKMV Deoghar",
  },

  // {
  //   kind: "photo",
  //   id: "ph-2",
  //   src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  //   caption: "Whiteboard sketches, Adaptive Systems Lab",
  // },
  // {
  //   kind: "note",
  //   id: "note-2",
  //   title: '"The bottleneck is the topology."',
  //   date: "July 2024",
  //   excerpt: "A one-line summary of the paper I keep meaning to write.",
  //   body: "I keep coming back to this. The bottleneck in modern distributed learning is no longer compute — it's the topology of communication itself. There is a paper here, and I have not written it yet.",
  // },
  // {
  //   kind: "photo",
  //   id: "ph-3",
  //   src: "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?w=1200&q=80",
  //   caption: "NeurIPS 2023 poster session",
  //   span: "tall",
  // },
  // {
  //   kind: "photo",
  //   id: "ph-4",
  //   src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
  //   caption: "Keynote at DistributedML workshop",
  // },
  // {
  //   kind: "note",
  //   id: "note-3",
  //   title: "On mentoring first-year PhDs",
  //   date: "May 2024",
  //   excerpt: "Three small habits that changed how I advise.",
  //   body: "Advising is mostly about listening. I've started ending every meeting by asking 'what are you worried about that we didn't discuss?' — and it changes everything. The second habit: writing back a 3-line summary within an hour. The third: never solving the problem in the first meeting.",
  // },
  // {
  //   kind: "photo",
  //   id: "ph-5",
  //   src: "@/assets/das2026forgeries_p.png",
  //   caption: "Late night, empty office",
  //   span: "wide",
  // },
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
      <div className="gallery-heading-image">
        <img src={galleryBanner} alt="Gourab Das gallery" />
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) =>
          it.kind === "photo" ? (
            <button
              key={it.id}
              onClick={() => setActive(it)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-strong text-left transition-transform duration-300 hover:-translate-y-1 ${spanClass(it.span)}`}
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
          ) : it.kind === "video" ? (
            <button
              key={it.id}
              onClick={() => setActive(it)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-strong text-left transition-transform duration-300 hover:-translate-y-1 ${spanClass(it.span)}`}
            >
              <img
                src={`https://img.youtube.com/vi/${it.videoId}/hqdefault.jpg`}
                alt={it.caption}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                  <Play className="size-6 fill-black text-black" />
                </span>
              </div>
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
          ),
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="gallery-lightbox relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-card"
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
                <div className="gallery-zoom">
                  <TransformWrapper initialScale={1} minScale={0.6} maxScale={5} centerOnInit>
                    <TransformComponent
                      wrapperClass="!w-full !h-[min(72vh,760px)]"
                      contentClass="!w-full !h-full !flex !items-center !justify-center"
                    >
                      <img
                        src={active.src}
                        alt={active.caption}
                        className="max-h-[min(70vh,740px)] max-w-full object-contain"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
                <p className="gallery-caption p-4 font-serif text-sm text-muted-foreground">
                  {active.caption}
                </p>
              </>
            ) : active.kind === "video" ? (
              <>
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1${
                      active.start ? `&start=${active.start}` : ""
                    }`}
                    title={active.caption}
                    className="size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
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
