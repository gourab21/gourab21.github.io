import type { ComponentType, SVGProps } from "react";

import { Github, Linkedin, Youtube, Twitter, Cpu } from "lucide-react";
import {
  SiGooglescholar,
  SiSemanticscholar,
  SiResearchgate,
  SiOrcid,
  SiScopus,
} from "react-icons/si";

import { TbWorldSearch } from "react-icons/tb";

export type ProfileLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const profileLinks: ProfileLink[] = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=XTZqxZgAAAAJ&hl=en",
    Icon: SiGooglescholar,
  },
  {
    label: "Semantic Scholar",
    href: "https://www.semanticscholar.org/author/Gourab-Das/2346520902",
    Icon: SiSemanticscholar,
  },
  {
    label: "Web of Science",
    href: "https://www.webofscience.com/wos/author/record/PMS-5478-2026",
    Icon: TbWorldSearch,
  },
  {
    label: "Scopus",
    href: "https://www.scopus.com/authid/detail.uri?authorId=59531593900",
    Icon: SiScopus,
  },
  {
    label: "IEEE Xplore",
    href: "https://ieeexplore.ieee.org/author/37088839368",
    Icon: Cpu,
  },
  { label: "ORCID", href: "https://orcid.org/0009-0009-6804-7255", Icon: SiOrcid },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Gourab-Das-18",
    Icon: SiResearchgate,
  },
  { label: "GitHub", href: "https://github.com/gourab21", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gourab21/", Icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@gourabdas2128", Icon: Youtube },
  { label: "X (Twitter)", href: "https://x.com/gourabdas2128", Icon: Twitter },
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
