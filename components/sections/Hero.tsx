import React from "react";
import { FlipWords } from "../ui/flip-words";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Hero = () => {
  const words = ["Committed", "Competitive", "Compassionate", "Driven"];

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 opacity-95"
      style={{
        backgroundImage: "url('/br-team.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50 opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center items-center">
        <div className="flex flex-row items-center gap-x-10 text-left">
          <Image
            src="/br-logo.png"
            alt="br-logo"
            width={200}
            height={20}
            priority
          />
          <div
            className={`${dmSans.className} text-7xl leading-tight text-white`}
          >
            A Home for{" "}
            <span className="inline-block w-[10ch] whitespace-nowrap text-left">
              <FlipWords words={words} />
            </span>
            <br />
            Roundnet Players
          </div>
        </div>
        <div>
          <div className="mt-6 text-xs md:text-lg lg:text-xl text-slate-200">
            A season-long, community-driven club built around{" "}
            <div className="font-semibold text-white inline">
              consistent play, structured competition, and collective
              improvement.
            </div>
          </div>

          <div className="mt-10 flex gap-4 justify-center">
            <Link
              href="/about"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-custom-navy transition hover:brightness-95"
            >
              How the club works
            </Link>

            <Link
              href="/members"
              className="rounded-xl bg-custom-navy px-6 py-3 text-sm font-semibold text-white hover:text-gray-200"
            >
              Meet the team members
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
