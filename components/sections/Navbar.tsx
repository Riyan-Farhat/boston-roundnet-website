"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/data/navItems";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const pathname = usePathname();
  const isHero = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-5 ${
        isHero
          ? "text-white"
          : "text-[#0B275E] bg-white border-b-1 border-gray-200"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 scale-120 ">
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

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger href={item.link}>
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] grid-cols-2 gap-4 p-4">
                    {item.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subLink.link}
                            className="block space-y-1 rounded-md p-3 hover:bg-accent"
                          >
                            <div className="font-medium leading-none">
                              {subLink.name}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {subLink.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

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
