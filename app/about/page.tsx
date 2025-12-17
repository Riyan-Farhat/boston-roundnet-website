// app/about/page.tsx
import React from "react";

type Person = {
  name: string;
  role: string;
  bio?: string;
  links?: { label: string; href: string }[];
};

type FinanceItem = {
  title: string;
  items: string[];
};

type FAQItem = {
  q: string;
  a: string;
};

const clubName = "Boston Roundnet"; // <-- change me
const lastUpdated = "December 17, 2025"; // <-- change me

const goals: string[] = [
  "Build a welcoming community for all skill levels",
  "Develop players through structured and unstructured play",
  "Support competitive growth and local/regional representation",
  "Keep participation accessible and affordable",
  "Run events that are organized, fair, and fun",
];

const initiatives: { title: string; description: string }[] = [
  {
    title: "Weekly Open Play",
    description:
      "Consistent, casual sessions where new and returning players can meet, play, and improve.",
  },
  {
    title: "Leagues & Seasonal Events",
    description:
      "Structured seasons that emphasize balanced competition, learning, and community.",
  },
  {
    title: "Beginner Clinics",
    description:
      "Intro sessions focused on fundamentals, rules, positioning, and confidence-building.",
  },
  {
    title: "Competitive Travel Support",
    description:
      "Coordination and support for teams attending higher-level tournaments and events.",
  },
  {
    title: "Community Partnerships",
    description:
      "Collaborations with local orgs, schools, and sponsors to grow the sport and access.",
  },
];

const organizers: Person[] = [
  {
    name: "Your Name",
    role: "President / Founder",
    bio: "Short bio about what you do and why you help run the club.",
    links: [
      { label: "Email", href: "mailto:hello@yourclub.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
  {
    name: "Organizer Two",
    role: "Events Lead",
    bio: "Runs logistics, scheduling, and event execution.",
  },
  {
    name: "Organizer Three",
    role: "Community & Outreach",
    bio: "Welcomes new members, partnerships, and volunteer coordination.",
  },
  {
    name: "Organizer Four",
    role: "Finance & Operations",
    bio: "Handles budgeting, reimbursements, and transparency reporting.",
  },
];

const finances: FinanceItem[] = [
  {
    title: "Where funds come from",
    items: [
      "Membership dues",
      "Event registration fees",
      "Sponsorships",
      "Donations",
    ],
  },
  {
    title: "How funds are used",
    items: [
      "Permits / venue costs",
      "Equipment (nets, balls, cones, etc.)",
      "Insurance and admin costs",
      "Subsidies for clinics or community initiatives (when possible)",
    ],
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do I need experience to join?",
    a: "No—beginners are welcome. We run sessions for all skill levels and will help you get started.",
  },
  {
    q: "How do I become a member?",
    a: "Join our Discord and check the Events page for upcoming sessions. Membership options are listed on the Membership page.",
  },
  {
    q: "How much does it cost?",
    a: "Costs vary by season and event. We aim to keep pricing accessible and publish details on the Membership page.",
  },
  {
    q: "Do I need my own equipment?",
    a: "Not required for most events—we usually have shared equipment available. If you have a net/ball, feel free to bring it.",
  },
  {
    q: "How can I help organize?",
    a: "We’d love help. Message an organizer on Discord or email us and we’ll plug you into upcoming needs.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 mt-20">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-14 pb-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-slate-500">About</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                {clubName}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                A community-driven club built around consistent events, skill
                development, and competition—while staying welcoming and
                accessible to everyone.
              </p>
            </div>

            <div className="hidden shrink-0 sm:block">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <div className="font-medium text-slate-900">Last updated</div>
                <div>{lastUpdated}</div>
              </div>
            </div>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-2">
            <JumpPill href="#general" label="General" />
            <JumpPill href="#goals" label="Club goals" />
            <JumpPill href="#initiatives" label="Initiatives" />
            <JumpPill href="#organizers" label="Organizers" />
            <JumpPill href="#finances" label="Finances" />
            <JumpPill href="#faq" label="FAQ" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-12">
          {/* General Information */}
          <CardSection id="general" title="General information">
            <div className="space-y-4 text-slate-700">
              <p>
                <span className="font-medium text-slate-900">Who we are:</span>{" "}
                {clubName} is a community-led organization for people who love
                roundnet—whether you’re brand new or actively competing.
              </p>
              <p>
                <span className="font-medium text-slate-900">What we do:</span>{" "}
                We host open play, leagues, clinics, tournaments, and social
                events. We also coordinate travel teams and community
                partnerships.
              </p>
              <p>
                <span className="font-medium text-slate-900">
                  Who it’s for:
                </span>{" "}
                Everyone. We aim to make it easy to show up, meet people, and
                level up.
              </p>
            </div>
          </CardSection>

          {/* Goals */}
          <CardSection id="goals" title="Club goals">
            <div className="grid gap-3 sm:grid-cols-2">
              {goals.map((g) => (
                <ul
                  key={g}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-3 inline-block h-2 w-2 scale-75 rounded-full bg-slate-900" />
                    <span className="leading-7">{g}</span>
                  </div>
                </ul>
              ))}
            </div>
          </CardSection>

          {/* Initiatives */}
          <CardSection id="initiatives" title="Initiatives">
            <div className="grid gap-4 sm:grid-cols-2">
              {initiatives.map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="text-base font-semibold text-slate-900">
                    {it.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {it.description}
                  </p>
                </div>
              ))}
            </div>
          </CardSection>

          {/* Organizers */}
          <CardSection id="organizers" title="Organizers">
            <div className="grid gap-4 sm:grid-cols-2">
              {organizers.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-slate-900">
                        {p.name}
                      </div>
                      <div className="mt-1 text-sm font-medium text-slate-600">
                        {p.role}
                      </div>
                    </div>
                  </div>

                  {p.bio ? (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {p.bio}
                    </p>
                  ) : null}

                  {p.links?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target={
                            l.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            l.href.startsWith("http") ? "noreferrer" : undefined
                          }
                          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </CardSection>

          {/* Finances */}
          <CardSection id="finances" title="Finances">
            <div className="grid gap-4 sm:grid-cols-2">
              {finances.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="text-base font-semibold text-slate-900">
                    {f.title}
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {f.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="leading-6">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Transparency</div>
              <p className="mt-2 leading-6 text-slate-600">
                We aim to share clear summaries of income/expenses periodically
                and use club funds to directly support events, equipment, and
                member experience.
              </p>
            </div>
          </CardSection>

          {/* FAQ */}
          <CardSection id="faq" title="FAQ">
            <div className="space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer list-none select-none text-base font-semibold text-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <span>{item.q}</span>
                      <span className="text-slate-400 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </CardSection>

          {/* Footer CTA */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white">
            <div className="text-2xl font-semibold tracking-tight">
              Want to get involved?
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
              Join the community, come to an event, or reach out if you’d like
              to volunteer or sponsor the club.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                View Events
              </a>
              <a
                href="/membership"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Membership
              </a>
              <a
                href="/community"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Small components */

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
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {title}
          </h2>
        </div>
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
