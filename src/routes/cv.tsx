import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeading } from "@/components/page-shell";
import { Download } from "lucide-react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — G Das" },
      {
        name: "description",
        content:
          "Curriculum vitae: research experience, education, awards, workshops, and references.",
      },
      { property: "og:title", content: "CV — Gourab Das" },
      { property: "og:description", content: "Full academic curriculum vitae." },
    ],
  }),
  component: CvPage,
});

type Entry = {
  title: string;
  org: string;
  url?: string;
  period: string;
  detail?: React.ReactNode;
};

const research: Entry[] = [
  {
    title: "Junior Research Scientist",
    org: "AI Explain You Science (AIEYS)",
    url: "https://aieys.com/people/Gourab%20Das.html",
    period: "Jan'26 - Present",
    detail: (
      <>
        Working on <strong>"Safe & Secure UAV Communication."</strong>
      </>
    ),
  },
  {
    title: "Research Itern & Master's Thesis",
    org: "Indian Institute of Informmation Technology, Dharwad",
    url: "https://www.iiitdwd.ac.in",
    period: "Dec'25 - Apr'26",
    detail: (
      <>
        Researched on ID Card Presentation & Digital Injection Attack & Detection.
        <br />
        Worked under the supervision of -{" "}
        <a
          href="https://scholar.google.com/citations?user=OIYIrmIAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-accent"
        >
          Prof. Raghavendra Ramachandra, NTNU, Norway
        </a>{" "}
        and{" "}
        <a
          href="https://pavankumarphd.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-accent"
        >
          Dr. Pavan Kumar C, IIIT Dharwad
        </a>
      </>
    ),
  },
  {
    title: "IASc-INSA-NASI Summer Research Fellowship 2025",
    org: "Indian Academy of Sciences, Bangalore @ IIIT, Dharwad",
    period: "Sep - Nov 2025",
    url: "https://www.ias.ac.in/",
    detail: (
      <>
        Performed research on <strong>"ID Card Forgery Detection"</strong> under the guidance of{" "}
        <a
          href="https://pavankumarphd.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Dr. Pavan Kumar C
        </a>
        , Assistant Professor, Department of CSE, IIIT Dharwad.
      </>
    ),
  },
  {
    title: "Research Internship",
    org: "Dept. of CSE, Indian Institute of Technology, Kharagpur",
    period: "May - July 2025",
    detail: (
      <>
        Performed research on <strong>"Plant Genotype Prediction from Phenotype"</strong> under the
        guidance of{" "}
        <a
          href="https://scholar.google.co.in/citations?hl=en&user=5bXSZPYAAAAJ&view_op=list_works"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          Prof. Pabitra Mitra
        </a>
        , Professor, Department of CSE, IIT Kharagpur.
      </>
    ),
  },
];

const education: Entry[] = [
  {
    title: "M.Sc - Computer Science",
    org: "Ramakrishna Mission Vidyamandira, Belur Math, India",
    period: "2024 - 2026",
    detail:
      "Thesis: A Flip in the Script: Exploiting Generative Instability for Semantic Multilingual Document Authentication.",
    url: "https://vidyamandira.ac.in/",
  },
  {
    title: "B.Sc - Computer Science",
    org: "ARSD College, University of Delhi, India",
    period: "2020 – 2023",
    detail: "Graduated with distinction.",
    url: "https://www.arsdcollege.ac.in/",
  },
  {
    title: "10 + 2 - Science",
    org: "Ramakrishna Mission Vidyapith, Deoghar, India",
    period: "2018 – 2020",
    detail: "Completed undergraduate studies with distinction.",
    url: "https://www.rkmvdeoghar.org/",
  },
];

const awards = [
  {
    title: "Best Paper Award – Information Security Track",
    year: "2025",
    org: "7th ICRCICN, Kalyani, India",
  },
  {
    title: "Research Excellence Award & Young Researcher Award",
    year: "2025",
    org: "3rd ICETI 2025",
  },
  {
    title: "1st Position - Codeplay",
    year: "2025",
    org: "St. Xavier's College, Kolkata, India",
  },
  {
    title: "1st Position - The Turing Show",
    year: "2025",
    org: "RKMVERI, Belur Math, India",
  },
  {
    title: "UGC NET JRF & Assistant Professor Qualified",
    year: "Dec 2024",
    org: "National Testing Agency (UGC NET), India",
  },
  {
    title: "Sanjeev Arora Memorial Prize & Meritorious Student Award",
    year: "2023",
    org: "Atma Ram Sanatan Dharma College, University of Delhi, India",
  },
  {
    title: "Best Leadership Award in 10+2",
    year: "2020",
    org: "Ramakrishna Mission Vidyapith, Deoghar, India",
  },
];

const workshops = [
  { title: "Problem Solving (6 Star - Gold level) – HackerRank", year: "2025" },
  {
    title: "Supervised Machine Learning: Regression and Classification DeepLearning.AI - Coursera",
    year: "2025",
  },
  {
    title:
      "Next Generation Communication Technologies Using MATLAB Tools - Indian Institute of Information Technology Una",
    year: "2025",
  },
  { title: "Cryptography I -   Stanford University - Coursera", year: "2024" },
];

const references = [
  {
    name: "Swami Divyasudhananda",
    org: "BoG, CBSE, Govt. of India & Principal, RKMV Deoghar",
    email: "divyasudhananda@gmail.com",
    role: "10 + 2 School Principal & Mentor",
  },
  {
    name: "Prof. Raghavendra Ramachandra",
    org: "SAFE Center, NTNU, Norway",
    email: "raghavendra.ramachandra@ntnu.no",
    role: "Master's Thesis Supervisor & Research Mentor",
  },
  {
    name: "Dr. Pavan Kumar C",
    org: "Department of CSE, IIIT Dharwad, India",
    email: "pavan@iiitdwd.ac.in",
    role: "Master's Thesis Supervisor & Research Mentor",
  },
];

function Timeline({ items }: { items: Entry[] }) {
  return (
    <div className="space-y-6">
      {items.map((e) => (
        <div
          key={`${e.title}-${e.period}`}
          className="grid gap-1 border-l-2 border-border pl-5 sm:grid-cols-[160px_1fr] sm:gap-6 sm:pl-0 sm:border-l-0"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{e.period}</p>
          <div>
            <p className="text-base font-bold">{e.title}</p>
            <p className="text-base italic text-foreground font-[Times_New_Roman]">
              {e.url ? (
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {e.org}
                </a>
              ) : (
                e.org
              )}
            </p>{" "}
            {e.detail && (
              <p className="mt-1 font-serif text-sm text-muted-foreground">{e.detail}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
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
          description="Researcher, IIIT Dharwad, India."
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
              <li
                key={w.title}
                className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0"
              >
                <span className="text-sm">{w.title}</span>
                <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                  {w.year}
                </span>
              </li>
            ))}
          </ul>
        </Section>
        <Section id="references" title="References">
          <div className="grid gap-4 sm:grid-cols-3">
            {references.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-sm font-bold">{r.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.org}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{r.role}</p>
                <a
                  href={`mailto:${r.email}`}
                  className="mt-1 block text-xs font-semibold text-accent hover:underline"
                >
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
