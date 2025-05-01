import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import iconNavMovies from "@/public/assets/icon-nav-movies.svg";
import iconNavBookmark from "@/public/assets/icon-nav-bookmark.svg";
import iconNavHome from "@/public/assets/icon-nav-home.svg";
import iconNavTvSeries from "@/public/assets/icon-nav-tv-series.svg";
import imageAvatar from "@/public/assets/image-avatar.png";

const LinkArray = [
  {
    alt: "home-icon",
    src: iconNavHome,
    href: "/",
  },
  {
    alt: "movies-icon",
    src: iconNavMovies,
    href: "/movies",
  },
  {
    alt: "tv-series-icon",
    src: iconNavTvSeries,
    href: "/tv-series",
  },
  {
    alt: "bookmark-icon",
    src: iconNavBookmark,
    href: "/bookmarks",
  },
];

export default function SideNavigation() {
  return (
    <aside className=" flex flex-col my-[3.2rem] justify-between ml-[3.2rem] items-center bg-dark-blue px-8 rounded-[2rem] py-8 border-primary-red">
      <div className="flex flex-col items-center gap-[7.5rem]">
        <Image src={logo} alt="logo-icon" width={32} height={25.6} />

        <ul className="flex flex-col gap-[3.75rem]">
          {LinkArray.map((link) => (
            <li key={link.alt}>
              <Link href={link.href}>
                <Image src={link.src} alt={link.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Image src={imageAvatar} alt="avatar-icon" width={40} height={40} />
    </aside>
  );
}