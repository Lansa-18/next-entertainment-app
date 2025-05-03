import { Metadata } from "next";
import SearchInput from "./_components/SearchInput";
// import MovieCard from "./_components/MovieCard";
import MovieCarousel from "./_components/MovieCarousel";
import RecommendedMovies from "./_components/RecommendedMovies";
import { apikey, getMovies } from "@/services/api";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default async function Page() {
  const movies = await getMovies();
  console.log(apikey)
  
  return (
    <div className="max-w-full border-primary-red">
      <SearchInput placeHolderText="Search for movies or TV series" />

      <main className="mt-[3.4rem] text-white">
        <h2 className="mb-[2.5rem] text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
          Trending
        </h2>

        <div className="max-w-full overflow-x-hidden">
          <MovieCarousel />
        </div>

        <div className="w-full">
          <RecommendedMovies />
        </div>
      </main>
    </div>
  );
}
