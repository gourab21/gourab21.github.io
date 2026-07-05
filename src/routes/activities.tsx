import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/page-shell";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Gourab Das" },
      {
        name: "description",
        content: "Reviewer roles, TPC memberships, professional memberships, and positions held.",
      },
      { property: "og:title", content: "Activities — Gourab Das" },
      {
        property: "og:description",
        content: "Reviewer, TPC memberships, and professional positions.",
      },
    ],
  }),
  component: ActivitiesPage,
});

const reviewer = [
  { name: "IEEE Transactions on Consumer Electronics (IEEE TCE)", type: "Journal", since: "2025" },
  {
    name: "IEEE Transactions on Artificial Intelligence (IEEE TAI)",
    type: "Journal",
    since: "2025",
  },
  {
    name: "Journal of Computational and Cognitive Engineering (JCCE)",
    type: "Journal",
    since: "2025",
  },
];

const tpc = [
  { name: "2nd ICTIST 2026", role: "Adversarial Biometrics in the Advanced AI Era" },
  { name: "2nd ICTIST 2026", role: "Junior Program Committee" },
];

const memberships = [
  { name: "Student Member, European Association for Biometrics (EAB)", year: "since 2026" },
  { name: "Member, Internet Society (ID – 2327705)", year: "since 2025" },
  { name: "International Association of Engineers (IAENG) ( ID – 392155)", year: "since 2024" },
];

const positions = [
  {
    name: "Public Relations Head, PiXelation - Photography Club",
    org: "ARSD College, University of Delhi, India",
    year: "2022–2023",
  },
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
              <div
                key={r.name}
                className="rounded-lg border-l-4 border-accent bg-surface-strong p-4"
              >
                <p className="text-sm font-bold">{r.name}</p>
                <p className="text-xs text-muted-foreground">
                  {r.type} · Reviewer since {r.since}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Committees & Special Sessions">
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
