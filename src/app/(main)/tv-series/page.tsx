import { Metadata } from "next";
import { getPopularMovies } from "../../_lib/api";
import PageWrapper from "../../_components/PageWrapper";
import TvSeriesPage from "../../pages/TvSeriesPage";

export const metadata: Metadata = {
  title: "TV Series",
};

export default async function Page() {
  const series1 = await getPopularMovies("tv", 2);
  const series2 = await getPopularMovies("tv", 3);
  const series3 = await getPopularMovies("tv", 4);
  const seriesArr = [...series1, ...series2, ...series3];
  // console.log(seriesArr);

  return (
    <PageWrapper>
      <TvSeriesPage series={seriesArr} />
    </PageWrapper>
  );
}
