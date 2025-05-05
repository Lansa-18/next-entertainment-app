import { Metadata } from "next";
import SearchInput from "./_components/SearchInput";
// import MovieCard from "./_components/MovieCard";
import MovieCarousel from "./_components/MovieCarousel";
import RecommendedMovies from "./_components/RecommendedMovies";
import { getMoviesByType } from "@/services/api";
import Main from "./_components/Main";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default async function Page() {
  const movies = await getMoviesByType("movie", "sword");
  const series = await getMoviesByType("series", "vampire");
  const movieAndSeries = [...movies, ...series];
  const highlyRated = movieAndSeries.filter((movie) => {
    return movie.imdbRating > 7;
  });
  const trendingData = highlyRated.slice(0, 6);

  return (
    <div className="max-w-full border-primary-red">
      <SearchInput placeHolderText="Search for movies or TV series" />

      <Main>
        <h2 className="mb-[2.5rem] text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
          Trending
        </h2>

        <div className="max-w-full overflow-x-hidden">
          <MovieCarousel moviesData={trendingData} />
        </div>

        <div className="w-full">
          <RecommendedMovies isRecommended={true} moviesData={movieAndSeries} />
        </div>
      </Main>
    </div>
  );
}
