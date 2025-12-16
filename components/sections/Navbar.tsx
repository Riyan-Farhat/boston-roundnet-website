"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Image from "next/image";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const pathname = usePathname();
  const isHero = pathname === "/";

  const nav: NavItem[] = useMemo(
    () => [
      { label: "About", href: "/about" },
      { label: "Socials", href: "/socials" },
      { label: "Announcements", href: "/announcements" },
      { label: "Calendar", href: "/calendar" },
      { label: "FAQ", href: "/faq" },
    ],
    []
  );

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    // border-b-1 border-gray-300
    <header className="fixed top-5 left-0 right-0 z-50">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 scale-120 ${
          isHero ? "text-white" : "text-[#0B275E]"
        }`}
      >
        {/* Left: Brand */}
        <div className="flex items-center gap-3 scale-125">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl px-2 py-1 focus:outline-none focus:ring-0"
          >
            {/* Simple mark (swap for your logo later) */}
            <Image
              src="/br-logo.png"
              alt="br-logo"
              width={30}
              height={30}
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-bold">Boston Roundnet</div>
            </div>
          </Link>
        </div>

        {/* Center: Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-xl px-3 py-2 text-sm font-medium transition",
                isActive(item.href)
                  ? "bg-gray-100"
                  : "hover:bg-gray-100 hover:text-[#0B275E]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="https://discord.gg/Rjdc9fD6"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
          >
            <span>Join Discord</span>
            <Image
              src="/discord-logo.png"
              alt="discord-logo"
              width={20}
              height={20}
              priority
            />
          </Link>

          <Link
            href="/membership"
            className="inline-flex items-center justify-center rounded-xl bg-custom-gold px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#EA850E]/40"
          >
            Become a member
          </Link>
        </div>
      </nav>
    </header>
  );
}
