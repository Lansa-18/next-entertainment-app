import { Metadata } from "next";
import SearchInput from "../_components/SearchInputField";
import RecommendedMovies from "../_components/RecommendedMovies";
import { getMoviesByType } from "@/app/_lib/api";
import Main from "../_components/Main";

export const metadata: Metadata = {
  title: "Movies",
};

export default async function Page() {
  const movie1 = await getMoviesByType("movie", "anime");
  const movie2 = await getMoviesByType("movie", "marvel");
  const movie3 = await getMoviesByType("movie", "blade");
  const movies = [...movie1, ...movie2, ...movie3];

  return (
    <div className="border-primary-red">
      <SearchInput placeHolderText="Search for movies" />

      <Main>
        <h2 className="text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
          Movies
        </h2>

        <div className="w-full">
          <RecommendedMovies isRecommended={false} moviesData={movies} />
        </div>
      </Main>
    </div>
  );
}
