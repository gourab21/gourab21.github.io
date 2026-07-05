import { createFileRoute } from "@tanstack/react-router";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  FileText,
  Quote,
  Image as ImageIcon,
  Play,
  Copy,
  Check,
} from "lucide-react";
import { PageShell, PageHeading } from "@/components/page-shell";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { publications, type Publication, type PubType } from "@/Editing/pub";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Gourab Das" },
      {
        name: "description",
        content: "Peer-reviewed publications by Gourab Das, grouped by year.",
      },
      { property: "og:title", content: "Publications — Gourab Das" },
      { property: "og:description", content: "Peer-reviewed publications grouped by year." },
    ],
  }),
  component: PublicationsPage,
});

const typeStyles: Record<PubType, string> = {
  Journal: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  Conference: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Thesis: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Book Chapter": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
};

function PublicationsPage() {
  return (
    <PageShell>
      <PageHeading title="Publications" />
      <div className="space-y-16">
        {Object.entries(publications)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([year, items]) => (
            <div key={year}>
              <div className="mb-6 flex items-baseline gap-4">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-accent">
                  {year}
                </h2>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">
                  {items.length} {items.length === 1 ? "paper" : "papers"}
                </span>
              </div>
              <div className="grid gap-5">
                {items.map((p, i) => (
                  <PublicationCard key={p.title} pub={p} index={i} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </PageShell>
  );
}

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  const [imageOpen, setImageOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [citeOpen, setCiteOpen] = useState(false);
  const [posterOpen, setPosterOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      toast.success("BibTeX copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 animate-fade-in"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "backwards" }}
    >
      <div className="grid gap-0 sm:grid-cols-[15rem_1fr]">
        {/* Image */}
        <div
          className="relative aspect-[3/4] overflow-hidden bg-surface-strong sm:aspect-auto"
          onClick={() => setImageOpen(true)}
        >
          <img
            src={pub.image}
            alt={pub.title}
            width={800}
            height={600}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-col px-6 pt-6 pb-2">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${typeStyles[pub.type]}`}
            >
              {pub.type}
            </span>
            {pub.tag && (
              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-yellow-700 dark:border-yellow-400/20 dark:bg-yellow-400/10 dark:text-yellow-300">
                {pub.tag}
              </span>
            )}
            <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {pub.venue}
            </span>
          </div>

          <h3 className="text-lg font-bold leading-snug text-card-foreground transition-colors duration-300 group-hover:text-accent">
            {pub.title}
          </h3>
          <p className="mt-1.5 text-sm italic text-muted-foreground">{pub.authors}</p>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:text-accent"
            aria-expanded={open}
          >
            {open ? "Hide abstract" : "Show abstract"}
            <ChevronDown
              className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`grid transition-all duration-500 ease-out ${
              open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                {pub.abstract}
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-3">
            <ActionButton icon={FileText} label="Paper" href={pub.link} />
            <ActionButton icon={Quote} label="Cite" onClick={() => setCiteOpen(true)} />
            {pub.poster && (
              <ActionButton icon={ImageIcon} label="Poster" onClick={() => setPosterOpen(true)} />
            )}
            {pub.videoId && (
              <ActionButton icon={Play} label="Video" onClick={() => setVideoOpen(true)} />
            )}
          </div>
        </div>
      </div>

      <Dialog open={imageOpen} onOpenChange={setImageOpen}>
        <DialogContent className="max-w-4xl p-2 sm:p-4">
          <DialogHeader className="sr-only">
            <DialogTitle>{pub.title}</DialogTitle>
            <DialogDescription>Publication image</DialogDescription>
          </DialogHeader>
          <img
            src={pub.image}
            alt={pub.title}
            className="mx-auto max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
          />{" "}
        </DialogContent>
      </Dialog>

      {/* Cite Dialog */}
      <Dialog open={citeOpen} onOpenChange={setCiteOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Cite this publication</DialogTitle>
            <DialogDescription>BibTeX entry — copy to your reference manager.</DialogDescription>
          </DialogHeader>
          <div className="relative">
            <pre className="max-h-80 overflow-auto whitespace-pre-wrap break-all rounded-lg border border-border bg-surface-strong p-4 pr-14 font-mono text-xs leading-relaxed text-foreground">
              {pub.bibtex}
            </pre>
            <button
              onClick={copyBibtex}
              className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-semibold transition-all hover:border-accent hover:text-accent"
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Poster Dialog */}

      {pub.poster && (
        <Dialog open={posterOpen} onOpenChange={setPosterOpen}>
          <DialogContent className="max-w-4xl p-2 sm:p-4">
            <DialogHeader className="sr-only">
              <DialogTitle>{pub.title} — Poster</DialogTitle>
            </DialogHeader>

            <TransformWrapper
              centerOnInit
              centerZoomedOut
              initialScale={1}
              minScale={0.5}
              maxScale={6}
              wheel={{ step: 0.01 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="mb-3 flex justify-end gap-2">
                    <button onClick={() => zoomOut()} className="rounded border px-3 py-1">
                      −
                    </button>

                    <button onClick={() => resetTransform()} className="rounded border px-3 py-1">
                      Reset
                    </button>

                    <button onClick={() => zoomIn()} className="rounded border px-3 py-1">
                      +
                    </button>
                  </div>

                  <div className="flex max-h-[85vh] justify-center overflow-hidden">
                    <TransformComponent
                      wrapperClass="!w-full !h-full"
                      contentClass="flex justify-center"
                    >
                      <img
                        src={pub.poster}
                        alt={`${pub.title} poster`}
                        className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain select-none"
                        draggable={false}
                      />
                    </TransformComponent>
                  </div>
                </>
              )}
            </TransformWrapper>
          </DialogContent>
        </Dialog>
      )}

      {/* Video Dialog */}
      {pub.videoId && (
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-3xl p-2 sm:p-4">
            <DialogHeader className="sr-only">
              <DialogTitle>{pub.title} — Video</DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              {videoOpen && (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${pub.videoId}?autoplay=1`}
                  title={`${pub.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </article>
  );
}

function ActionButton({
  icon: Icon,
  label,
  href,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const cls =
    "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        <Icon className="size-3.5" /> {label}
        <ExternalLink className="size-3 opacity-60" />
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      <Icon className="size-3.5" /> {label}
    </button>
  );
}
