"use client";

import { SideNavigationProp } from "@/lib/types";
import logo from "@/public/assets/logo.svg";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkArray = [
  {
    alt: "home-icon",
    href: "/",
    d: "M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z",
  },
  {
    alt: "movies-icon",
    href: "/movies",
    d: "M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z",
  },
  {
    alt: "tv-series-icon",
    href: "/tv-series",
    d: "M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z",
  },
  {
    alt: "bookmark-icon",
    href: "/bookmarks",
    d: "M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z",
  },
];

export default function SideNavigation({
  avatarImage,
  isAuthorized,
}: SideNavigationProp) {
  const pathName = usePathname();

  return (
    <aside className="flex h-[92vh] min-w-[80px] flex-col items-center justify-between rounded-[2rem] bg-dark-blue px-8 py-8 tab-port:h-auto tab-port:flex-row custom-500:gap-10">
      <div className="flex flex-col items-center gap-[7.5rem] tab-port:basis-[61%] tab-port:flex-row tab-port:justify-between phone:basis-[75%] phone:gap-0">
        <Image
          className="phone:w-10"
          src={logo}
          alt="logo-icon"
          width={32}
          height={25.6}
        />

        <ul className="flex flex-col gap-[3.75rem] tab-port:flex-row phone:gap-[2rem] custom-390:gap-[2.5rem]">
          {LinkArray.map((link) => (
            <li key={link.alt}>
              <Link href={link.href}>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <title>home-icon</title>
                  <path
                    d={link.d}
                    className={`transition-all duration-300 ${pathName === link.href ? "fill-white" : "fill-light-blue hover:fill-primary-red"}`}
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-10 tab-port:flex-row  custom-500:gap-4">
        <Image
          className="cursor-pointer rounded-full phone:w-11"
          src={avatarImage || "/assets/image-avatar.png"}
          alt="avatar-icon"
          width={40}
          height={40}
        />

        {isAuthorized && (
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="cursor-pointer text-light-blue transition-colors duration-200 hover:text-primary-red phone:w-11"
            title="Sign out"
          >
            <LogOut size={20} />
          </button>
        )}
      </div>
    </aside>
  );
}
