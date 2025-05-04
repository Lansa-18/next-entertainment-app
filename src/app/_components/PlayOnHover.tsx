import React from "react";
import iconPlay from "@/public/assets/icon-play.svg";
import Image from "next/image";

export default function PlayOnHover() {
  return (
    <article className="absolute inset-0 flex cursor-pointer items-center justify-center">
      <div className="flex w-[117px] items-center justify-around rounded-[28.5px] border-blue-500 bg-white bg-opacity-25 py-[9px]">
        <Image src={iconPlay} alt="play-icon" width={30} height={30} />
        <p className="text-[18px] font-normal text-white">Play</p>
      </div>
    </article>
  );
}
