import { Metadata } from "next";
import HomePage from "../pages/HomePage";
import PageWrapper from "../_components/PageWrapper";
import { getPopularMovies, getTrendingMovies } from "../_lib/api";
import { auth } from "../_lib/auth";

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

  const session = await auth();
  const user = session?.user;
  console.log(user);

  return (
    <PageWrapper>
      <HomePage
        user={user}
        movieAndSeries={movieAndSeries}
        trendingData={trendingData}
      />
    </PageWrapper>
  );
}
