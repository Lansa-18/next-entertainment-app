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
    <div className="mt-8 flex items-center gap-6">
      <label className="cursor-pointer" htmlFor="search">
        <Image src={iconSearch} alt="search-icon" width={32} height={32} />
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="search"
        className="w-full bg-inherit pb-2 text-[2.4rem] text-white caret-primary-red outline-none placeholder:text-white placeholder:opacity-[0.4979] focus:border-b focus:border-light-blue"
        placeholder={placeHolderText}
      />
    </div>
  );
}
