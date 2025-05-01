// import Image from "next/image";

import { Metadata } from "next";
import SearchInput from "./_components/SearchInput";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default function Page() {
  return (
    <div className="">
      <SearchInput placeHolderText="Search for movies or TV series" />
    </div>
  );
}
