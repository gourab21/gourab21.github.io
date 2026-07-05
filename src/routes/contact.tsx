import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageShell, PageHeading } from "@/components/page-shell";
import { ProfileLinkRow } from "@/components/profile-links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. A. Researcher" },
      { name: "description", content: "Office address, phone, email, and profile links for Dr. A. Researcher." },
      { property: "og:title", content: "Contact — Dr. A. Researcher" },
      { property: "og:description", content: "Get in touch: address, phone, email, and research profile links." },
    ],
  }),
  component: ContactPage,
});

// Generic embed centered on a well-known landmark; researcher can replace src.
const MAP_SRC =
  "https://www.google.com/maps?q=Institute+of+Advanced+Computing&output=embed";

function ContactPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Reach out for collaborations, invited talks, student mentoring, or media inquiries."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Office
                  </p>
                  <p className="mt-1 font-serif text-base leading-relaxed">
                    Adaptive Systems Lab, Room 402<br />
                    Institute of Advanced Computing<br />
                    128 Research Way, Building 4<br />
                    Cambridge, MA 02139, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Phone
                  </p>
                  <a href="tel:+15550129432" className="mt-1 block text-base font-semibold hover:text-accent">
                    +1 (555) 012-9432
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <a href="mailto:contact@a-researcher.edu" className="mt-1 block text-base font-semibold hover:text-accent">
                    contact@a-researcher.edu
                  </a>
                  <a href="mailto:a.researcher@lab.org" className="block text-sm text-muted-foreground hover:text-accent">
                    a.researcher@lab.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Research profiles
            </p>
            <ProfileLinkRow />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface-strong">
          <iframe
            title="Office location map"
            src={MAP_SRC}
            className="h-full min-h-[420px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </PageShell>
  );
}
