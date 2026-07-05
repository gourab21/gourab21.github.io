import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/page-shell";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Dr. A. Researcher" },
      { name: "description", content: "Reviewer roles, TPC memberships, professional memberships, and positions held." },
      { property: "og:title", content: "Activities — Dr. A. Researcher" },
      { property: "og:description", content: "Reviewer, TPC memberships, and professional positions." },
    ],
  }),
  component: ActivitiesPage,
});

const reviewer = [
  { name: "IEEE Transactions on Pattern Analysis and Machine Intelligence", type: "Journal", since: "2021" },
  { name: "ACM Transactions on Computer-Human Interaction", type: "Journal", since: "2022" },
  { name: "Journal of Machine Learning Research", type: "Journal", since: "2020" },
  { name: "NeurIPS / ICML / ICLR", type: "Conference", since: "2019" },
  { name: "CVPR / ICCV / ECCV", type: "Conference", since: "2020" },
  { name: "CHI / CSCW", type: "Conference", since: "2021" },
];

const tpc = [
  { name: "AAAI 2025", role: "Area Chair" },
  { name: "NeurIPS 2024", role: "Senior Program Committee" },
  { name: "ICLR 2024", role: "Program Committee" },
  { name: "KDD 2023", role: "Program Committee" },
];

const memberships = [
  { name: "Senior Member, IEEE Computer Society", year: "since 2022" },
  { name: "ACM Distinguished Speaker", year: "2023–present" },
  { name: "AAAI Member", year: "since 2019" },
  { name: "Editorial Board — Journal of Adaptive Systems", year: "2024–present" },
];

const positions = [
  { name: "Director, Adaptive Systems Lab", org: "Institute of Advanced Computing", year: "2023–Present" },
  { name: "Faculty Search Committee Chair", org: "Department of Computer Science", year: "2024" },
  { name: "Workshop Co-Chair, DistributedML", org: "NeurIPS", year: "2023" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function ActivitiesPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Service"
        title="Activities"
        description="Reviewing, program committees, memberships, and positions held."
      />

      <div className="grid gap-14 md:grid-cols-2">
        <Section title="Reviewer">
          <div className="grid gap-3">
            {reviewer.map((r) => (
              <div key={r.name} className="rounded-lg border-l-4 border-accent bg-surface-strong p-4">
                <p className="text-sm font-bold">{r.name}</p>
                <p className="text-xs text-muted-foreground">
                  {r.type} · Reviewer since {r.since}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technical Program Committee">
          <div className="grid gap-3">
            {tpc.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-4">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Memberships">
          <ul className="space-y-3">
            {memberships.map((m) => (
              <li key={m.name} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <span className="font-medium">{m.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{m.year}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Positions Held">
          <ul className="space-y-4">
            {positions.map((p) => (
              <li key={p.name} className="border-l-2 border-border pl-4">
                <p className="text-sm font-bold">{p.name}</p>
                <p className="text-xs text-muted-foreground">
                  {p.org} · {p.year}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </PageShell>
  );
}
