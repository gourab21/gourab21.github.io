import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageShell, PageHeading } from "@/components/page-shell";
import { ProfileLinkRow } from "@/components/profile-links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gourab Das" },
      { name: "description", content: "Office address, phone, email, and profile links for Gourab Das." },
      { property: "og:title", content: "Contact — Gourab Das" },
      { property: "og:description", content: "Get in touch: address, phone, email, and research profile links." },
    ],
  }),
  component: ContactPage,
});

// Generic embed centered on a well-known landmark; researcher can replace src.
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.676923125775!2d75.02419017458718!3d15.393973757162033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1783076176335!5m2!1sen!2sin";

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
                    Drone & UAV Lab, RD 2<br />
                    &pi; Block, IIIT Dharwad<br />
                    Near Sattur Colony, Dharwad<br />
                    Karnataka 580009, India
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
                  <a href="tel:+917364997118" className="mt-1 block text-base font-semibold hover:text-accent">
                    +91 7364997118
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
                  <a href="mailto:gourabdas2128@gmail.com" className="mt-1 block text-base font-semibold hover:text-accent">
                    gourabdas2128@gmail.com
                  </a>
                  <a href="mailto:gourab.das@iiitdwd.ac.in" className="mt-1 block text-base font-semibold hover:text-accent">
                    gourab.das@iiitdwd.ac.in
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
