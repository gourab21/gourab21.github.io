import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/page-shell";
import { Download } from "lucide-react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Dr. A. Researcher" },
      { name: "description", content: "Curriculum vitae: research experience, education, awards, workshops, and references." },
      { property: "og:title", content: "CV — Dr. A. Researcher" },
      { property: "og:description", content: "Full academic curriculum vitae." },
    ],
  }),
  component: CvPage,
});

type Entry = { title: string; org: string; period: string; detail?: string };

const research: Entry[] = [
  {
    title: "Assistant Professor",
    org: "Institute of Advanced Computing",
    period: "2023 – Present",
    detail: "Founded the Adaptive Systems Lab. Six PhD students, three postdocs. Focus: distributed learning under constraints.",
  },
  {
    title: "Postdoctoral Researcher",
    org: "MIT CSAIL",
    period: "2020 – 2023",
    detail: "Worked with Prof. J. Smith on scalable federated learning and robust optimization.",
  },
  {
    title: "Visiting Researcher",
    org: "Microsoft Research, Cambridge",
    period: "Summer 2019",
    detail: "Systems for large-scale ML training on heterogeneous accelerators.",
  },
];

const education: Entry[] = [
  { title: "Ph.D., Computer Science", org: "Stanford University", period: "2015 – 2020", detail: "Thesis: Communication-Efficient Learning in Distributed Systems." },
  { title: "M.S., Computer Science", org: "Carnegie Mellon University", period: "2013 – 2015" },
  { title: "B.Tech., Computer Engineering", org: "Indian Institute of Technology, Bombay", period: "2009 – 2013", detail: "Graduated with distinction." },
];

const awards = [
  { title: "NSF CAREER Award", year: "2024" },
  { title: "Best Paper Honorable Mention, CHI", year: "2023" },
  { title: "Rising Star in Data Science", org: "University of Chicago", year: "2022" },
  { title: "Google Research Scholar Award", year: "2022" },
  { title: "Stanford Graduate Fellowship", year: "2015" },
];

const workshops = [
  { title: "Foundations of Trustworthy AI — Simons Institute", year: "2024" },
  { title: "Distributed ML Systems Bootcamp — Berkeley", year: "2023" },
  { title: "Certified: Advanced Kubernetes Operator Design", year: "2022" },
  { title: "Oxford Machine Learning Summer School", year: "2018" },
];

const references = [
  { name: "Prof. Jane Smith", org: "MIT CSAIL", email: "jsmith@mit.edu", role: "Postdoc advisor" },
  { name: "Prof. Robert Lee", org: "Stanford University", email: "rlee@cs.stanford.edu", role: "PhD advisor" },
  { name: "Dr. Priya Nair", org: "Google Research", email: "pnair@google.com", role: "Industry collaborator" },
];

function Timeline({ items }: { items: Entry[] }) {
  return (
    <div className="space-y-6">
      {items.map((e) => (
        <div
          key={`${e.title}-${e.period}`}
          className="grid gap-1 border-l-2 border-border pl-5 sm:grid-cols-[160px_1fr] sm:gap-6 sm:pl-0 sm:border-l-0"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {e.period}
          </p>
          <div>
            <p className="text-base font-bold">{e.title}</p>
            <p className="text-sm text-muted-foreground">{e.org}</p>
            {e.detail && (
              <p className="mt-2 font-serif text-sm text-muted-foreground">{e.detail}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-6">
      <h2 className="border-b border-border pb-3 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function CvPage() {
  return (
    <PageShell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageHeading
          eyebrow="Curriculum Vitae"
          title="Gourab Das"
          description="A detailed record of research, education, honors, and training."
        />

        <a
          href="#"
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:border-accent hover:text-accent"
        >
          <Download className="size-3.5" /> Download PDF
        </a>
      </div>

      <div className="space-y-14">
        <Section id="research" title="Research Experience">
          <Timeline items={research} />
        </Section>
        <Section id="education" title="Education">
          <Timeline items={education} />
        </Section>
        <Section id="awards" title="Awards & Achievements">
          <ul className="grid gap-3 sm:grid-cols-2">
            {awards.map((a) => (
              <li key={a.title} className="rounded-lg border border-border bg-card p-4">
                <p className="text-sm font-bold">{a.title}</p>
                <p className="text-xs text-muted-foreground">
                  {a.org ? `${a.org} · ` : ""}
                  {a.year}
                </p>
              </li>
            ))}
          </ul>
        </Section>
        <Section id="workshops" title="Workshops Attended & Certifications">
          <ul className="space-y-3">
            {workshops.map((w) => (
              <li key={w.title} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0">
                <span className="text-sm">{w.title}</span>
                <span className="shrink-0 text-xs font-semibold text-muted-foreground">{w.year}</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section id="references" title="References">
          <div className="grid gap-4 sm:grid-cols-3">
            {references.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-sm font-bold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.org}</p>
                <p className="mt-2 text-xs text-muted-foreground">{r.role}</p>
                <a href={`mailto:${r.email}`} className="mt-3 block text-xs font-semibold text-accent hover:underline">
                  {r.email}
                </a>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </PageShell>
  );
}
