import React from "react";
import RecommendedMovies from "./RecommendedMovies";
import { SearchResultsProps } from "@/lib/types";

export default function SearchResults({moviesData, searchText}: SearchResultsProps) {
    const length = moviesData.length;
  return (
    <section className="text-white mt-[3.5rem]">
      <h2 className="text-[3.2rem] font-normal tracking-[-0.5px] leading-normal">Found {length} results for {`"${searchText}"`}</h2>

      <div className="w-full">
        <RecommendedMovies isRecommended={false} moviesData={moviesData} />
      </div>
    </section>
  );
}
