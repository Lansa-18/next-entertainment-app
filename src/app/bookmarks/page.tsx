import { Metadata } from "next";
import SearchInput from "../_components/SearchInput";

export const metadata: Metadata = {
  title: "Bookedmarked",
};

export default function Page() {
  return (
    <div className="">
      <SearchInput placeHolderText="Search for bookedmarked shows" />
    </div>
  );
}
