import { Metadata } from "next";
import SearchInput from "./_components/SearchInput";
// import MovieCard from "./_components/MovieCard";
import MovieCarousel from "./_components/MovieCarousel";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default function Page() {
  return (
    <div className="">
      <SearchInput placeHolderText="Search for movies or TV series" />

      <main className="text-white mt-[3.4rem]">
        <h2 className="text-[3.2rem] mb-[2.5rem] font-normal leading-normal tracking-[-0.5px]">
          Trending
        </h2>

        <div className="max-w-full overflow-x-hidden">
          <MovieCarousel />
        </div>
      </main>
    </div>
  );
}
