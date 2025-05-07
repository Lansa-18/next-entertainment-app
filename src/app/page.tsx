import { Metadata } from "next";
// import SearchInput from "./_components/SearchInputField";
// import MovieCard from "./_components/MovieCard";
// import { getMoviesByType } from "@/app/_lib/api";
import HomePage from "./_components/HomePage";
import { getPopularMovies } from "./_lib/api";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default async function Page() {
  // const movies = await getMoviesByType("movie", "sword");
  // const series = await getMoviesByType("series", "vampire");
  // const movieAndSeries = [...movies, ...series];
  // const highlyRated = movieAndSeries.filter((movie) => {
  //   return movie.imdbRating > 7;
  // });
  // const trendingData = highlyRated.slice(0, 6);
  const movies = await getPopularMovies();
  console.log(movies)
  const movieAndSeries = [];
  const trendingData = [];

  return (
    <HomePage movieAndSeries={movieAndSeries} trendingData={trendingData} />
  );
}
