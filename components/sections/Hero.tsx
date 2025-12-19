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
      className="relative flex min-h-screen items-center justify-center px-4 py-16 sm:py-20"
      style={{
        backgroundImage: "url('/br-team.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50 opacity-60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Logo + Title */}
        <div className="flex w-full flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
          <Image
            src="/br-logo.png"
            alt="br-logo"
            width={160}
            height={160}
            priority
            className="h-auto w-28 sm:w-36 lg:w-[200px]"
          />

          <h1
            className={`${dmSans.className} text-4xl sm:text-5xl lg:text-7xl leading-tight text-white`}
          >
            A Home for{" "}
            <span className="inline-block w-[10ch] whitespace-nowrap align-baseline">
              <FlipWords words={words} />
            </span>
            <br />
            Roundnet Players
          </h1>
        </div>

        {/* Subtext + Buttons */}
        <div className="mt-8 flex w-full flex-col items-center text-center lg:items-start lg:text-left lg:ml-120">
          <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-slate-200">
            A community of individuals passionate about playing roundnet and
            having fun!
          </p>

          <div className="mt-8 flex w-full max-w-xs sm:max-w-xl flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/about"
              className="inline-flex w-full sm:w-auto justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-custom-navy transition hover:brightness-95"
            >
              How the club works
            </Link>

            <Link
              href="/about#organizers"
              className="inline-flex w-full sm:w-auto justify-center rounded-xl bg-custom-navy px-6 py-3 text-sm font-semibold text-white transition hover:text-gray-200"
            >
              Meet the organizers
            </Link>
          </div>
        </div>
      </div>

      {/* Footer credit */}
      <div className="pointer-events-none absolute bottom-3 right-3 text-xs sm:text-sm text-white/80">
        Created by Riyan Farhat 🙂
      </div>
    </section>
  );
};

export default Hero;
