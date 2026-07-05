import type { ComponentType, SVGProps } from "react";
import { GraduationCap, Linkedin, Youtube, BookOpen, FlaskConical, Twitter, Github } from "lucide-react";

export type ProfileLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const profileLinks: ProfileLink[] = [
  { label: "Google Scholar", href: "https://scholar.google.com/", Icon: GraduationCap },
  { label: "ORCID", href: "https://orcid.org/", Icon: BookOpen },
  { label: "ResearchGate", href: "https://researchgate.net/", Icon: FlaskConical },
  { label: "GitHub", href: "https://github.com/", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/", Icon: Youtube },
  { label: "X (Twitter)", href: "https://x.com/", Icon: Twitter },
];

export function ProfileLinkRow({ variant = "chip" }: { variant?: "chip" | "icon" }) {
  if (variant === "icon") {
    return (
      <div className="flex flex-wrap gap-2">
        {profileLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {profileLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
        >
          <Icon className="size-3.5" />
          {label}
        </a>
      ))}
    </div>
  );
}
