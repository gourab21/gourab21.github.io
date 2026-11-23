import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/gd2.png";
import { PageShell } from "@/components/page-shell";
import { ProfileLinkRow } from "@/components/profile-links";
import CircularCarousel from "@/components/CircularCarousel";
import { news, highlight, type NewsItem } from "@/Editing/news";
import { publications } from "@/Editing/pub";
import type { Publication } from "@/Editing/pub";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({ component: HomePage });

type Interest = { title: string; detail: string };

function HomePage() {
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);
  const [activeInterest, setActiveInterest] = useState<Interest | null>(null);
  const [activePublication, setActivePublication] = useState<Publication | null>(null);
  const [highlightOpen, setHighlightOpen] = useState(false);

  const featured = useMemo(
    () =>
      Object.entries(publications)
        .sort(([a], [b]) => Number(b) - Number(a))
        .flatMap(([year, items]) => items.map((pub) => ({ ...pub, year })))
        .slice(0, 6),
    [],
  );

  const interests: Interest[] = [
    {
      title: "Identity Document Forgery Detection",
      detail:
        "My primary research interest is detecting forged or manipulated identity documents. This includes examining document fields, scripts, visual evidence, and AI-generated alterations to build more reliable identity verification.",
    },
    {
      title: "Adversarial Biometrics and Safe Detection",
      detail:
        "I study threats to biometric systems, including presentation attacks and adversarial manipulation, with an emphasis on detection methods that are robust, safe, and dependable in real-world use.",
    },
    {
      title: "Image Processing and Computer Vision",
      detail:
        "I use image processing and computer vision to analyse visual patterns, identify inconsistencies, and support the detection of manipulation in biometric and identity-document data.",
    },
    {
      title: "UAV and IoT Communication Systems",
      detail:
        "My complementary research interests include secure communication for unmanned aerial vehicles and IoT networks, including lightweight authentication, resilient data exchange, and trustworthy coordination under resource constraints.",
    },
  ];

  return (
    <PageShell>
      <section className="hero-grid">
        <div className="hero-portrait-column">
          <div className="hero-visual" aria-label="Portrait of Gourab Das">
            <div className="visual-core">
              <img src={portrait} alt="Gourab Das" />
            </div>
          </div>
        </div>
        <div className="hero-copy">
          <h1 className="hero-name">
            Gourab <span>Das.</span>
          </h1>
          <p className="hero-subtitle">
            Building trust in a <span>synthetic</span> world.
          </p>
          <p className="hero-lede max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
            I am a PhD Scholar in the Department of CSE at{" "}
            <a
              href="https://www.iiitdwd.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              IIIT Dharwad
            </a>
            , India under the supervision of{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=OIYIrmIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              Prof. Raghavendra Ramachandra
            </a>{" "}
            &{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=OIYIrmIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              Dr. Pavan Kumar C
            </a>
            . An Alumni of{" "}
            <a
              href="https://rkmvdeoghar.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              RKMV Deoghar
            </a>
            ,{" "}
            <a
              href="https://arsdcollege.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              ARSD College
            </a>{" "}
            - University of Delhi, &{" "}
            <a
              href="https://www.vidyamandira.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              RKM Vidyamandira
            </a>
            , Belur Math, India. My work centers on the development of safe and secure biometric
            technologies, with a strong emphasis on detecting and preventing forgery.
          </p>
          <div className="hero-profile-links">
            <ProfileLinkRow variant="chip" />
          </div>
        </div>
      </section>

      {highlight.title && (
        <button
          id="home-research-highlight"
          type="button"
          className="home-highlight"
          onClick={() => setHighlightOpen(true)}
        >
          <span className="home-highlight-copy">
            <strong>{highlight.title}</strong>
            <span className="home-highlight-summary">{highlight.subtitle}</span>
          </span>
          <span className="feature-open" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </button>
      )}

      <section className="content-section home-interests" id="research-interests">
        <div className="section-heading">
          <h2>Research Interests</h2>
        </div>
        <div className="interest-grid">
          {interests.map((item) => (
            <button
              type="button"
              key={item.title}
              className="interest-card"
              onClick={() => setActiveInterest(item)}
            >
              <span className="interest-card-copy">
                <strong>{item.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section
        id="featured-publications"
        className="content-section publication-orbit-section"
        aria-label="Selected publications"
      >
        <div className="section-heading compact">
          <h2>Selected publications</h2>
          <Link to="/publications" className="button-quiet">
            All research <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="publication-carousel-stage">
          <CircularCarousel
            items={featured.map((pub) => ({
              src: pub.image,
              alt: pub.title,
              title: pub.title,
              subtitle: `${pub.year} · ${pub.venue}`,
            }))}
            preset="orbit"
            intro="rise"
            cardWidth={256}
            aspectRatio={0.75}
            gap={44}
            curve={0}
            tilt={-22}
            perspective={1480}
            autoplay="drift"
            speed={30}
            momentum={0.7}
            captions
            showCount={false}
            onItemClick={(_, index) => setActivePublication(featured[index])}
            className="publication-carousel"
          />
        </div>
      </section>

      <section className="content-section news-section">
        <div className="section-heading compact">
          <h2>News</h2>
          <Link to="/news" className="button-quiet">
            All news <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="home-news-grid">
          {news.slice(0, 4).map((item) => (
            <button
              key={`${item.date}-${item.title}`}
              type="button"
              onClick={() => setActiveNews(item)}
              className="home-news-card"
            >
              <span className="news-date">{item.date}</span>
              <span className="news-title">{item.title}</span>
              <ArrowUpRight className="news-arrow size-4" />
            </button>
          ))}
        </div>
      </section>

      <Dialog open={highlightOpen} onOpenChange={setHighlightOpen}>
        <DialogContent className="max-h-[85vh] w-[95vw] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{highlight.title}</DialogTitle>
            <DialogDescription>{highlight.date ?? "Research highlight"}</DialogDescription>
          </DialogHeader>
          <div className="news-detail">{highlight.detail ?? highlight.subtitle}</div>
        </DialogContent>
      </Dialog>
      <Dialog open={!!activeInterest} onOpenChange={(open) => !open && setActiveInterest(null)}>
        <DialogContent className="max-h-[85vh] w-[95vw] overflow-y-auto sm:max-w-2xl">
          {activeInterest && (
            <>
              <DialogHeader>
                <DialogTitle>{activeInterest.title}</DialogTitle>
                <DialogDescription>Research interest</DialogDescription>
              </DialogHeader>
              <p className="news-detail">{activeInterest.detail}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={!!activePublication}
        onOpenChange={(open) => !open && setActivePublication(null)}
      >
        <DialogContent className="max-h-[88vh] w-[95vw] overflow-y-auto sm:max-w-2xl">
          {activePublication && (
            <>
              <DialogHeader>
                <DialogTitle>{activePublication.title}</DialogTitle>
                <DialogDescription>{activePublication.venue}</DialogDescription>
              </DialogHeader>
              <img src={activePublication.image} alt="" className="publication-dialog-image" />
              <p className="news-detail">{activePublication.abstract}</p>
              <a
                href={activePublication.link}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                View publication <ArrowUpRight className="size-4" />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={!!activeNews} onOpenChange={(open) => !open && setActiveNews(null)}>
        <DialogContent className="max-h-[85vh] w-[95vw] overflow-y-auto sm:max-w-2xl">
          {activeNews && (
            <>
              <DialogHeader>
                <DialogTitle>{activeNews.title}</DialogTitle>
                <DialogDescription>{activeNews.date}</DialogDescription>
              </DialogHeader>
              <div className="news-detail">{activeNews.detail}</div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
