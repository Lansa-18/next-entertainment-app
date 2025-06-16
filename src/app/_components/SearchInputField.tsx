"use client";

import Image from "next/image";
import React from "react";
import iconSearch from "@/public/assets/icon-search.svg";
import { SearchInputFieldProps } from "@/lib/types";

export default function SearchInputField({
  placeHolderText,
  value,
  onChange,
}: SearchInputFieldProps) {
  return (
    <div className="flex items-center gap-6">
      <label className="cursor-pointer" htmlFor="search">
        <Image src={iconSearch} alt="search-icon" width={32} height={32} />
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="search"
        className="w-full py-4 bg-inherit text-[2.4rem] text-white caret-primary-red outline-none custom-850:placeholder:text-[2rem] land-phone:placeholder:text-[1.6rem] placeholder:text-white placeholder:opacity-[0.4979] focus:border-b focus:border-light-blue"
        placeholder={placeHolderText}
      />
    </div>
  );
}
