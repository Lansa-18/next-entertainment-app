import { Metadata } from "next";
import HomePage from "../pages/HomePage";
import PageWrapper from "../_components/PageWrapper";
import { getPopularMovies, getTrendingMovies } from "../_lib/api";
import { auth } from "../_lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default async function Page() {
  const trendingMovie = await getTrendingMovies("movie");
  const trendingTvSeries = await getTrendingMovies("tv");
  const trendingData = [...trendingMovie, ...trendingTvSeries].slice(0, 13);

  const movie1 = await getPopularMovies("movie", 2);
  const tv1 = await getPopularMovies("tv", 2);
  const movieAndSeries = [...movie1, ...tv1];

  const session = await auth();
  const user = session?.user
    ? {
        ...session.user,
        name: session.user.name ?? "",
        email: session.user.email ?? "",
        image: session.user.image ?? "",
      }
    : null;

  if (!user) {
    redirect("/login");
  }

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
