// app/socials/page.tsx
import React from "react";

type Social = {
  name: string;
  description: string;
  href: string;
  cta: string;
};

const clubName = "Boston Roundnet"; // change if needed

const socials: Social[] = [
  {
    name: "Instagram",
    description:
      "Photos, reels, and stories from events, tournaments, and club life.",
    href: "https://www.instagram.com/boston_roundnet/",
    cta: "Follow on Instagram",
  },
  {
    name: "Discord",
    description:
      "Our primary hub for announcements, scheduling, weather updates, and community chat.",
    href: "https://discord.gg/Rjdc9fD6",
    cta: "Join Discord",
  },
  {
    name: "YouTube",
    description:
      "Match footage, highlights, clinics, and special event recaps.",
    href: "https://www.youtube.com/@BostonRoundnet/videos",
    cta: "Subscribe on YouTube",
  },
  {
    name: "Facebook",
    description: "Event posts and updates for members who prefer Facebook.",
    href: "https://www.facebook.com/groups/698589690316199/",
    cta: "Visit Facebook Page",
  },
];

export default function SocialsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 mt-20">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-14 pb-10">
        <p className="text-sm font-medium text-slate-500">Socials</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Stay Connected
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Follow {clubName} across platforms to stay up to date on events,
          announcements, highlights, and community conversations.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <JumpPill href="#instagram" label="Instagram" />
          <JumpPill href="#discord" label="Discord" />
          <JumpPill href="#youtube" label="YouTube" />
          <JumpPill href="#facebook" label="Facebook" />
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-12">
          {socials.map((s) => (
            <CardSection key={s.name} id={s.name.toLowerCase()} title={s.name}>
              <p className="text-sm leading-6 text-slate-600">
                {s.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {s.cta}
                </a>

                <a
                  href="/events"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  View Events
                </a>
              </div>
            </CardSection>
          ))}

          {/* Footer CTA */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white">
            <div className="text-2xl font-semibold tracking-tight">
              Don’t miss an update
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
              Discord is the fastest way to hear about last-minute changes,
              weather calls, and new events.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://discord.gg/yourinvite"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Join Discord
              </a>
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                View Schedule
              </a>
              <a
                href="/membership"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Membership
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Shared components (keep in this file) */

function CardSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function JumpPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
    >
      {label}
    </a>
  );
}
