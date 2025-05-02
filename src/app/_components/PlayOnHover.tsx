import React from "react";
import iconPlay from "@/public/assets/icon-play.svg";
import Image from "next/image";

export default function PlayOnHover() {
  return (
    <article className="bg-black items-center justify-around cursor-pointer py-[9px] w-[117px] opacity-25 rounded-[28.5px] flex left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border border-primary-red absolute">
      <Image src={iconPlay} alt="play-icon" width={30} height={30} />
      <p className="text-[18px] text-white">Play</p>
    </article>
  );
}
