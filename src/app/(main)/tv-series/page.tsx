import { Metadata } from "next";
import { getPopularMovies } from "../../_lib/api";
import PageWrapper from "../../_components/PageWrapper";
import TvSeriesPage from "../../pages/TvSeriesPage";

export const metadata: Metadata = {
  title: "TV Series",
};

export default async function Page() {
  const series1 = await getPopularMovies("tv", 3);
  const seriesArr = [...series1];

  return (
    <PageWrapper>
      <TvSeriesPage series={seriesArr} />
    </PageWrapper>
  );
}
