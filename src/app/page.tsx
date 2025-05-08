import { Metadata } from "next";
// import SearchInput from "./_components/SearchInputField";
// import MovieCard from "./_components/MovieCard";
// import { getMoviesByType } from "@/app/_lib/api";
import HomePage from "./_components/HomePage";
import { getPopularMovies, getTrendingMovies } from "./_lib/api";

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
  const trendingMovie = await getTrendingMovies("movie");
  const trendingTvSeries = await getTrendingMovies("tv");
  const trendingData = [...trendingMovie, ...trendingTvSeries].slice(0, 15);
  const movie1 = await getPopularMovies("movie", 2);
  const movie2 = await getPopularMovies('movie',3);
  const tv1 = await getPopularMovies('tv', 2);
  const tv2 = await getPopularMovies('tv',3);
  const movieAndSeries = [...movie1, ...tv1, ...movie2, ...tv2];

  return (
    <HomePage movieAndSeries={movieAndSeries} trendingData={trendingData} />
  );
}
