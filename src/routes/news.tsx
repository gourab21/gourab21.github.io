import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { news, type NewsItem } from "@/Editing/news";

export const Route = createFileRoute("/news")({ component: NewsPage });

function NewsPage() {
  const [active, setActive] = useState<NewsItem | null>(null);
  return (
    <PageShell>
      <div className="news-card-grid">
        {news.map((item, i) => (
          <button
            key={`${item.date}-${item.title}`}
            className="news-card"
            onClick={() => setActive(item)}
          >
            <span className="news-card-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="news-card-date">
              <CalendarDays className="size-3.5" />
              {item.date}
            </span>
            <h2>{item.title}</h2>
            <span className="news-card-open">
              Read update <ArrowUpRight className="size-4" />
            </span>
          </button>
        ))}
      </div>
      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[85vh] w-[95vw] overflow-y-auto sm:max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>{active.date}</DialogDescription>
              </DialogHeader>
              <div className="news-detail">{active.detail}</div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
