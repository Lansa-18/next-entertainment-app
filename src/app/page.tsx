import { Metadata } from "next";
import SearchInput from "./_components/SearchInput";
import MovieCard from "./_components/MovieCard";

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

        <div className="flex gap-10">
          <MovieCard
            movieName="Beyond Earth"
            movieRating="PG"
            movieType="Movie"
            movieYear={2019}
          />
        </div>
      </main>
    </div>
  );
}
