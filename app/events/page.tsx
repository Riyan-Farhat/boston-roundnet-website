// app/events/page.tsx
import React from "react";

type EventItem = {
  title: string;
  date: string; // e.g. "Sat, Jan 10"
  time: string; // e.g. "10:00 AM – 1:00 PM"
  location: string;
  level?: string; // "Beginner", "All Levels", "Competitive"
  href?: string; // link to details / signup
  status?: "Open" | "Waitlist" | "Closed";
  description?: string;
};

type Announcement = {
  title: string;
  date: string; // e.g. "Dec 17, 2025"
  body: string;
  tag?: string; // "Update", "Weather", "Registration"
  href?: string;
};

type Ranking = {
  rank: number;
  name: string;
  points: number;
  tournaments: number;
  lastPlayed: string; // e.g. "Nov 2025"
};

const clubName = "Boston Roundnet"; // <-- change me

// Example data (swap for DB later)
const upcomingSchedule: EventItem[] = [
  {
    title: "Open Play (All Levels)",
    date: "Sat, Jan 10",
    time: "10:00 AM – 1:00 PM",
    location: "Boston Common (Great Lawn)",
    level: "All Levels",
    status: "Open",
    href: "/events/open-play-jan-10",
    description: "Casual play, rotation format, beginners welcome.",
  },
  {
    title: "Beginner Clinic",
    date: "Sun, Jan 18",
    time: "11:00 AM – 12:30 PM",
    location: "Danehy Park, Cambridge",
    level: "Beginner",
    status: "Open",
    href: "/events/beginner-clinic-jan-18",
    description: "Rules, fundamentals, serving, positioning, and live reps.",
  },
  {
    title: "Winter League Week 1",
    date: "Thu, Jan 22",
    time: "6:30 PM – 9:00 PM",
    location: "Indoor Court (TBD)",
    level: "Intermediate+",
    status: "Waitlist",
    href: "/events/winter-league-week-1",
    description: "Structured matches + standings. Limited slots.",
  },
];

const announcements: Announcement[] = [
  {
    title: "Winter league registration is live",
    date: "Dec 17, 2025",
    body: "We’re capping teams to keep matches on time. If you miss a slot, join the waitlist—spots open up.",
    tag: "Registration",
    href: "/membership",
  },
  {
    title: "Open play format update",
    date: "Dec 10, 2025",
    body: "We’ll run a 4-on / 4-off court rotation to maximize reps and keep games moving. Ask an organizer if you’re new.",
    tag: "Update",
  },
  {
    title: "Weather policy reminder",
    date: "Nov 28, 2025",
    body: "We decide by 8:00 AM day-of for morning events. Updates will be posted in Discord Announcements.",
    tag: "Weather",
  },
];

const clubEvents: {
  title: string;
  description: string;
  bullets: string[];
  href?: string;
}[] = [
  {
    title: "Weekly Open Play",
    description:
      "Low-pressure sessions for community building, mixing skill levels, and lots of reps.",
    bullets: [
      "All levels welcome",
      "Bring friends",
      "Club nets & balls provided (when possible)",
    ],
    href: "/events",
  },
  {
    title: "Seasonal Leagues",
    description:
      "Structured weekly matches with standings, balanced divisions, and playoffs.",
    bullets: [
      "Team or individual signup",
      "Standings + match tracking",
      "Indoor options in winter",
    ],
    href: "/membership",
  },
  {
    title: "Clinics & Skills Nights",
    description:
      "Focused training on serving, hitting, defense, strategy, and tournament prep.",
    bullets: [
      "Beginner clinics",
      "Intermediate skill nights",
      "Guest instructors (when available)",
    ],
    href: "/events",
  },
  {
    title: "Tournaments & Travel",
    description:
      "Local tournaments plus coordination for regional/national events.",
    bullets: [
      "Travel interest polls",
      "Carpool + housing coordination",
      "Club representation and support",
    ],
    href: "/community",
  },
];

const rankings: Ranking[] = [
  {
    rank: 1,
    name: "Alex Chen",
    points: 1420,
    tournaments: 6,
    lastPlayed: "Nov 2025",
  },
  {
    rank: 2,
    name: "Riley Park",
    points: 1355,
    tournaments: 5,
    lastPlayed: "Nov 2025",
  },
  {
    rank: 3,
    name: "Jordan Silva",
    points: 1290,
    tournaments: 4,
    lastPlayed: "Oct 2025",
  },
  {
    rank: 4,
    name: "Sam Patel",
    points: 1210,
    tournaments: 4,
    lastPlayed: "Oct 2025",
  },
  {
    rank: 5,
    name: "Taylor Kim",
    points: 1165,
    tournaments: 3,
    lastPlayed: "Sep 2025",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 mt-20">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-14 pb-10">
        <p className="text-sm font-medium text-slate-500">Events</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Play with {clubName}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Find upcoming sessions, read announcements, learn how our events work,
          and track player rankings.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <JumpPill href="#schedule" label="Schedule" />
          <JumpPill href="#announcements" label="Announcements" />
          <JumpPill href="#club-events" label="Club events" />
          <JumpPill href="#rankings" label="Player Rankings" />
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-12">
          {/* Schedule */}
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-6 text-4xl font-bold">Events</h1>

            <div className="relative w-full overflow-hidden rounded-xl border shadow">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=cf3a388c07c11f05909d945fa9cef13cbc810684082f31b119b81fa781b6862f%40group.calendar.google.com&ctz=America%2FNew_York"
                className="h-[600px] w-full"
              />
            </div>
          </div>

          {/* Announcements */}
          <CardSection id="announcements" title="Announcements">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <div className="text-lg font-semibold text-slate-900">
                Announcements coming soon
              </div>
              <p className="mt-2 max-w-xl mx-auto text-sm leading-6 text-slate-600">
                Important updates, registration notices, and weather-related
                information will be posted here once the season begins.
              </p>
              <div className="mt-4 inline-block rounded-full bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700">
                TBD
              </div>
            </div>
          </CardSection>

          {/* Club events */}
          <CardSection id="club-events" title="Club events">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <div className="text-lg font-semibold text-slate-900">
                Club event formats coming soon
              </div>
              <p className="mt-2 max-w-xl mx-auto text-sm leading-6 text-slate-600">
                Details on open play, leagues, clinics, and tournaments will be
                announced once formats, schedules, and locations are finalized.
              </p>
              <div className="mt-4 inline-block rounded-full bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700">
                TBD
              </div>
            </div>
          </CardSection>

          {/* Player Rankings */}
          <CardSection id="rankings" title="Player Rankings">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-base font-semibold text-slate-900">
                    Club rankings
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Example table—swap in your real logic later (ELO, points,
                    league standings, etc.).
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="/rankings"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Full Rankings
                  </a>
                  <a
                    href="/events"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    How scoring works
                  </a>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
                    <tr>
                      <th className="px-6 py-3">Rank</th>
                      <th className="px-6 py-3">Player</th>
                      <th className="px-6 py-3">Points</th>
                      <th className="px-6 py-3">Tournaments</th>
                      <th className="px-6 py-3">Last played</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200">
                    {[1, 2, 3, 4, 5].map((rank) => (
                      <tr key={rank}>
                        <td className="px-6 py-4 font-semibold text-slate-900">
                          {rank}
                        </td>
                        <td className="px-6 py-4 text-slate-400">—</td>
                        <td className="px-6 py-4 text-slate-400">—</td>
                        <td className="px-6 py-4 text-slate-400">—</td>
                        <td className="px-6 py-4 text-slate-400">—</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-slate-200 p-6 text-sm text-slate-600">
                Want to be included? Make sure you’re registered for club events
                and that your name matches across signups.
              </div>
            </div>
          </CardSection>

          {/* Footer CTA */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white">
            <div className="text-2xl font-semibold tracking-tight">
              See you on the field.
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
              Check the schedule, join Discord for announcements, and bring a
              friend.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                View Schedule
              </a>
              <a
                href="https://discord.gg/Rjdc9fD6"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
              >
                Join Discord
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

/** Small shared components (keep in this file) */

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

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
      {label}
    </span>
  );
}

function StatusBadge({ status }: { status: NonNullable<EventItem["status"]> }) {
  const styles =
    status === "Open"
      ? "border-slate-200 bg-white text-slate-700"
      : status === "Waitlist"
      ? "border-slate-200 bg-slate-50 text-slate-700"
      : "border-slate-200 bg-slate-100 text-slate-600";

  return (
    <span
      className={`rounded-full border px-2 py-1 text-xs font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}
