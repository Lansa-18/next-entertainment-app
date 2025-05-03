import React from "react";
import iconPlay from "@/public/assets/icon-play.svg";
import Image from "next/image";

export default function PlayOnHover() {
  return (
    <article className="absolute left-1/2 top-1/2 flex w-[117px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-around rounded-[28.5px] border-primary-red bg-white py-[9px] bg-opacity-25">
      <Image src={iconPlay} alt="play-icon" width={30} height={30} />
      <p className="text-[18px] font-normal text-white">Play</p>
    </article>
  );
}
