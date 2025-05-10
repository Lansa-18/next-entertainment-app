import { Metadata } from "next";
import HomePage from "./pages/HomePage";
import { getPopularMovies, getTrendingMovies } from "./_lib/api";
import PageWrapper from "./_components/PageWrapper";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default async function Page() {
  const trendingMovie = await getTrendingMovies("movie");
  const trendingTvSeries = await getTrendingMovies("tv");
  const trendingData = [...trendingMovie, ...trendingTvSeries].slice(0, 15);

  const movie1 = await getPopularMovies("movie", 2);
  const movie2 = await getPopularMovies("movie", 3);
  const tv1 = await getPopularMovies("tv", 2);
  const tv2 = await getPopularMovies("tv", 3);
  const movieAndSeries = [...movie1, ...tv1, ...movie2, ...tv2];

  return (
    <PageWrapper>
      <HomePage movieAndSeries={movieAndSeries} trendingData={trendingData} />
    </PageWrapper>
  );
}
