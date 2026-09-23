import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/page-shell";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

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
  {
    name: "IEEE Internet of Things Journal(IoT-J)",
    type: "Journal",
    since: "2026",
    url: "https://ieee-iotj.org/",
  },
  {
    name: "Engineering Applications of Artificial Intelligence (EAAI)",
    type: "Journal",
    since: "2026",
    url: "https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence",
  },
  {
    name: "IEEE Access",
    type: "Journal",
    since: "2026",
    url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6287639",
  },
  {
    name: "IEEE Open Journal of the Communications Society (OJ-COMS)",
    type: "Journal",
    since: "2026",
    url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782661",
  },
  {
    name: "IEEE Transactions on Consumer Electronics (IEEE TCE)",
    type: "Journal",
    since: "2026",
    url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=30",
  },
  {
    name: "IEEE Transactions on Artificial Intelligence (IEEE TAI)",
    type: "Journal",
    since: "2026",
    url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9078688",
  },
  {
    name: "Journal of Computational and Cognitive Engineering (JCCE)",
    type: "Journal",
    since: "2025",
    url: "https://ojs.bonviewpress.com/index.php/JCCE",
  },
  {
    name: "CVIP 2026",
    type: "Conference",
    since: "2026",
    url: "https://cvip2026.nitc.ac.in/",
  }
];

const tpc = [
  {
    name: "Session Chair - 2nd ICTIST 2026",
    role: "Track: Adversarial Biometrics in the Advanced AI Era",
    url: "https://aieys.com/ICTIST%202ND/special_session/special_session_adversarial_biometrics.html",
  },
  {
    name: "2nd ICTIST 2026",
    role: "Junior Program Committee",
    url: "https://aieys.com/ICTIST%202ND/Organizers.html#:~:text=Gourab%20Das%2C%20AI%20Explain%20You%20Science",
  },
];

const memberships = [
  {
    name: "Member - IEEE CTSoc Machine learning, Deep learning and AI in CE (MDA) Technical Committee (TC)",
    year: "Since 2026",
  },
  {
    name: "Member - Technical Community on Computer Communications (TCCC)",
    year: "Since 2026",
  },
  {
    name: "Student Member, European Association for Biometrics (EAB)",
    year: "Since 2026",
  },
  {
    name: "Member, Internet Society (ID – 2327705)",
    year: "Since 2025",
  },
  {
    name: "Member, International Association of Engineers (IAENG) (ID – 392155)",
    year: "Since 2024",
  },
];

const positions = [
  {
    name: "Public Relations Head, PiXelation - Photography Club",
    org: "ARSD College, University of Delhi, India",
    year: "2022–2023",
  },
];

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-5", className)}>
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

      <div className="grid gap-14">
        <Section title="Reviewer">
          <div className="flex flex-wrap gap-3">
            {reviewer.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border border-l-4 border-l-accent bg-card px-4 py-2 text-sm font-medium transition-all hover:bg-accent/15 hover:shadow-sm hover:shadow-accent/10"
              >
                <span>{r.name}</span>
                <ExternalLink className="size-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Section>

        <Section title="Conference Program Committees">
          <div className="flex flex-wrap gap-3">
            {tpc.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-full border border-border border-l-4 border-l-accent bg-card px-4 py-2 text-center text-sm font-medium transition-all hover:bg-accent/15 hover:shadow-sm hover:shadow-accent/10"
              >
                <span className="inline-flex items-center gap-2">
                  <span>{t.name}</span>
                  <ExternalLink className="size-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
                </span>
                <span className="text-xs text-muted-foreground">{t.role}</span>
              </a>
            ))}
          </div>
        </Section>

        <div className="grid gap-14 md:grid-cols-2">
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
      </div>
    </PageShell>
  );
}
