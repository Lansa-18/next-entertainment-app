import { Metadata } from "next";
import { getPopularMovies } from "../../_lib/api";
import PageWrapper from "../../_components/PageWrapper";
import MoviesPage from "../../pages/MoviesPage";

export const metadata: Metadata = {
  title: "Movies",
};

export default async function Page() {
  const movies1 = await getPopularMovies("movie", 1);
  const movies2 = await getPopularMovies("movie", 3);
  const movies3 = await getPopularMovies("movie", 4);
  const moviesArr = [...movies1, ...movies2, ...movies3];

  return (
    <PageWrapper>
      <MoviesPage movies={moviesArr} />
    </PageWrapper>
  );
}
