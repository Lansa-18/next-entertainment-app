import { Metadata } from "next";
import SearchInput from "../_components/SearchInput";
import Main from "../_components/Main";
import RecommendedMovies from "../_components/RecommendedMovies";
import { getMoviesByType } from "@/services/api";

export const metadata: Metadata = {
  title: "TV Series",
};

export default async function Page() {
  const series1 = await getMoviesByType("series", "drama");
  const series2 = await getMoviesByType("series", "fantasy");
  const series3 = await getMoviesByType("series", "love");
  const seriesArr = [...series1, ...series2, ...series3];

  return (
    <div className="">
      <SearchInput placeHolderText="Search for TV series" />

      <Main>
        <h2 className="text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
          TV Series
        </h2>

        <div className="w-full">
          <RecommendedMovies isRecommended={false} moviesData={seriesArr} />
        </div>
      </Main>
    </div>
  );
}
