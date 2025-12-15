import React from "react";
import { FlipWords } from "../ui/flip-words";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Hero = () => {
  const words = ["Committed", "Competitive", "Compassionate", "Driven"];
  return (
    <div className="h-[40rem] flex justify-center px-4 flex-col ml-135 mt-10">
      <div className="text-left">
        <div
          className={`${dmSans.className} text-7xl text-black leading-tight`}
        >
          A Home for{" "}
          <span className="inline-block w-[10ch] text-left whitespace-nowrap">
            <FlipWords words={words} />
          </span>
          <br />
          Roundnet Players
        </div>

        <div className="mt-6 max-w-3xl text-xs md:text-lg lg:text-xl text-slate-600">
          <span>A season-long, community-driven club built around </span>
          <span className="font-semibold text-slate-800">
            consistent play, structured competition, and collective improvement.
          </span>
        </div>
      </div>
      <div className="mt-10 flex gap-4">
        <Link
          href="/about"
          className="rounded-xl bg-custom-navy px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          How the club works
        </Link>

        <Link
          href="/membership"
          className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-custom-navy hover:bg-slate-50"
        >
          View membership
        </Link>
      </div>
    </div>
  );
};

export default Hero;
