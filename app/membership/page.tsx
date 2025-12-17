// app/membership/page.tsx
import React from "react";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  perks: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
};

type MerchItem = {
  name: string;
  description: string;
  price?: string;
  href: string;
  tag?: string;
};

type DonationOption = {
  amount: string;
  description: string;
  href: string;
};

const clubName = "Boston Roundnet"; // <-- change me

const tiers: Tier[] = [
  {
    name: "Community Member",
    price: "$30",
    cadence: "per season",
    description:
      "Best for most players who want access, discounts, and community support.",
    perks: [
      "Member-only Discord role & updates",
      "Discounted entry to leagues & select events",
      "Priority access / early registration (when applicable)",
      "Eligibility for member raffles and giveaways",
      "Supports equipment, permits, and club operations",
    ],
    ctaLabel: "Become a Member",
    ctaHref: "/join", // <-- link to your signup / checkout
    highlight: true,
  },
  {
    name: "Supporter",
    price: "$75",
    cadence: "per season",
    description:
      "For people who want to help fund growth and make events more accessible.",
    perks: [
      "Everything in Community Member",
      "Supporter badge (optional) on Discord",
      "One free or discounted clinic / event (when offered)",
      "Helps subsidize beginner programs and community initiatives",
    ],
    ctaLabel: "Become a Supporter",
    ctaHref: "/join",
  },
];

const merch: MerchItem[] = [
  {
    name: "Club Tee",
    description:
      "Soft cotton tee with the club logo. Great for events and travel.",
    price: "$25",
    href: "/merch", // or your Shopify / Stripe / Google Form link
    tag: "Popular",
  },
  {
    name: "Hoodie",
    description:
      "Warm hoodie for cold-weather tournaments and late-night sessions.",
    price: "$55",
    href: "/merch",
  },
  {
    name: "Hat",
    description: "Breathable cap / trucker hat with embroidered logo.",
    price: "$28",
    href: "/merch",
  },
  {
    name: "Stickers Pack",
    description: "A few logo stickers for bottles, laptops, and gear bins.",
    price: "$6",
    href: "/merch",
    tag: "Easy add-on",
  },
];

const donationOptions: DonationOption[] = [
  {
    amount: "$10",
    description: "Helps cover cones, tape, and small supplies.",
    href: "/donate",
  },
  {
    amount: "$25",
    description: "Offsets one player’s discounted entry (when offered).",
    href: "/donate",
  },
  {
    amount: "$50",
    description: "Contributes to equipment upgrades or replacements.",
    href: "/donate",
  },
  {
    amount: "$100",
    description: "Supports permits, venue fees, and clinic programming.",
    href: "/donate",
  },
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 mt-20">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-14 pb-10">
        <p className="text-sm font-medium text-slate-500">Membership</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Support {clubName}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Membership helps us run consistent events, keep costs accessible,
          maintain equipment, and grow the community. You can also support
          through merch or direct donations.
        </p>

        {/* Quick nav */}
        <div className="mt-6 flex flex-wrap gap-2">
          <JumpPill href="#perks" label="Membership perks" />
          <JumpPill href="#merch" label="Merch" />
          <JumpPill href="#donate" label="Donation page" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-12">
          {/* Membership perks */}
          <CardSection id="perks" title="Membership perks">
            <div className="grid gap-4 md:grid-cols-2">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={[
                    "rounded-3xl border p-6 shadow-sm",
                    t.highlight
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={[
                          "text-lg font-semibold",
                          t.highlight ? "text-white" : "text-slate-900",
                        ].join(" ")}
                      >
                        {t.name}
                      </div>
                      <div
                        className={[
                          "mt-2 text-3xl font-semibold tracking-tight",
                          t.highlight ? "text-white" : "text-slate-900",
                        ].join(" ")}
                      >
                        {t.price}{" "}
                        <span
                          className={[
                            "text-sm font-medium",
                            t.highlight ? "text-white/80" : "text-slate-500",
                          ].join(" ")}
                        >
                          {t.cadence}
                        </span>
                      </div>
                      <p
                        className={[
                          "mt-3 text-sm leading-6",
                          t.highlight ? "text-white/85" : "text-slate-600",
                        ].join(" ")}
                      >
                        {t.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span
                          className={[
                            "mt-2 h-1.5 w-1.5 rounded-full",
                            t.highlight ? "bg-white/70" : "bg-slate-400",
                          ].join(" ")}
                        />
                        <span
                          className={
                            t.highlight ? "text-white/90" : "text-slate-700"
                          }
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href={t.ctaHref}
                      className={[
                        "inline-flex w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition",
                        t.highlight
                          ? "bg-white text-slate-900 hover:bg-slate-100"
                          : "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100",
                      ].join(" ")}
                    >
                      {t.ctaLabel}
                    </a>
                    <p
                      className={[
                        "mt-3 text-xs leading-5",
                        t.highlight ? "text-white/70" : "text-slate-500",
                      ].join(" ")}
                    >
                      Note: perks may vary by season/event availability. We’ll
                      always communicate changes clearly.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-base font-semibold text-slate-900">
                What your support funds
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Permits/venue fees, nets/balls/cones, league admin, clinic
                programming, and occasional subsidies to keep entry affordable.
              </p>
            </div>
          </CardSection>

          {/* Merch */}
          <CardSection id="merch" title="Merch">
            <p className="text-sm leading-6 text-slate-600">
              Merch purchases directly support the club. If you’re not ready for
              membership, merch is an easy way to contribute.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {merch.map((m) => (
                <a
                  key={m.name}
                  href={m.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:bg-slate-50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-slate-900">
                        {m.name}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {m.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {m.tag ? (
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
                          {m.tag}
                        </span>
                      ) : null}
                      {m.price ? (
                        <span className="text-sm font-semibold text-slate-900">
                          {m.price}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4 text-sm font-semibold text-slate-900">
                    Shop merch{" "}
                    <span className="inline-block transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/merch"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Browse Merch
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Bulk / sponsor orders
              </a>
            </div>
          </CardSection>

          {/* Donation page */}
          <CardSection id="donate" title="Donation page">
            <p className="text-sm leading-6 text-slate-600">
              Donations help us keep events affordable, replace worn equipment,
              and run beginner programs. If you’d like your donation earmarked
              (e.g., “beginner clinics”), note it in the donation form.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {donationOptions.map((d) => (
                <a
                  key={d.amount}
                  href={d.href}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:bg-slate-50"
                >
                  <div className="text-2xl font-semibold tracking-tight text-slate-900">
                    {d.amount}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {d.description}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-slate-900">
                    Donate →
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-base font-semibold text-slate-900">
                Other ways to support
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>Volunteer to help run an event or clinic</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>Sponsor a league, tournament, or clinic</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>Provide equipment or venue partnerships</span>
                </li>
              </ul>
            </div>
          </CardSection>

          {/* Footer CTA */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-2xl font-semibold tracking-tight text-slate-900">
              Ready to join?
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Membership is the simplest way to support the club and unlock
              perks for the season.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/join"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Become a Member
              </a>
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Shared small components (keep in this file) */

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
