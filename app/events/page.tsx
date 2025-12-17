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
          <CardSection id="schedule" title="Schedule">
            <div className="flex flex-col gap-4">
              {upcomingSchedule.map((e) => (
                <div
                  key={`${e.title}-${e.date}-${e.time}`}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="text-base font-semibold text-slate-900">
                          {e.title}
                        </div>
                        {e.level ? <Badge label={e.level} /> : null}
                        {e.status ? <StatusBadge status={e.status} /> : null}
                      </div>

                      <div className="mt-2 text-sm text-slate-600">
                        <span className="font-medium text-slate-900">
                          {e.date}
                        </span>{" "}
                        • {e.time}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        {e.location}
                      </div>

                      {e.description ? (
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {e.description}
                        </p>
                      ) : null}
                    </div>

                    <div className="shrink-0">
                      <a
                        href={e.href ?? "/events"}
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 sm:w-auto"
                      >
                        View / RSVP
                      </a>
                      <p className="mt-2 text-center text-xs text-slate-500 sm:text-left">
                        Details + location notes
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-base font-semibold text-slate-900">
                  Want reminders?
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Announcements and last-minute changes are posted in Discord.
                  If you’re attending, check the day-of post for weather and
                  field updates.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/community"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                  >
                    Join Discord
                  </a>
                  <a
                    href="/membership"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-transparent px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
                  >
                    Membership
                  </a>
                </div>
              </div>
            </div>
          </CardSection>

          {/* Announcements */}
          <CardSection id="announcements" title="Announcements">
            <div className="grid gap-4 sm:grid-cols-2">
              {announcements.map((a) => (
                <div
                  key={`${a.title}-${a.date}`}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="text-base font-semibold text-slate-900">
                          {a.title}
                        </div>
                        {a.tag ? <Badge label={a.tag} /> : null}
                      </div>
                      <div className="mt-2 text-sm text-slate-500">
                        {a.date}
                      </div>
                    </div>
                    {a.href ? (
                      <a
                        href={a.href}
                        className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                      >
                        Open →
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </CardSection>

          {/* Club events */}
          <CardSection id="club-events" title="Club events">
            <div className="grid gap-4 sm:grid-cols-2">
              {clubEvents.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-base font-semibold text-slate-900">
                    {c.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {c.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <a
                      href={c.href ?? "/events"}
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
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
                    {rankings.map((r) => (
                      <tr key={r.rank} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-slate-900">
                          {r.rank}
                        </td>
                        <td className="px-6 py-4 text-slate-900">{r.name}</td>
                        <td className="px-6 py-4 text-slate-700">{r.points}</td>
                        <td className="px-6 py-4 text-slate-700">
                          {r.tournaments}
                        </td>
                        <td className="px-6 py-4 text-slate-700">
                          {r.lastPlayed}
                        </td>
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
                href="/community"
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
