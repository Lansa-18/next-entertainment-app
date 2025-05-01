import Image from "next/image";
import React from "react";
import iconSearch from "@/public/assets/icon-search.svg";

interface SearchInputProps {
  placeHolderText: string;
}

export default function SearchInput({ placeHolderText }: SearchInputProps) {
  return (
    <div className="flex items-center gap-6 mt-8">
      <label className="cursor-pointer" htmlFor="search">
        <Image src={iconSearch} alt="search-icon" width={32} height={32} />
      </label>
      <input
        id="search"
        className="placeholder:text-white placeholder:opacity-[0.4979] bg-inherit pb-2 caret-primary-red focus:border-b focus:border-light-blue outline-none text-white text-[2.4rem]"
        placeholder={placeHolderText}
      />
    </div>
  );
}
