"use client";

import { HomepageProps, Movie } from "@/lib/types";
import { Metadata } from "next";
import { useState } from "react";
import Main from "./Main";
import MovieCarousel from "./MovieCarousel";
import RecommendedMovies from "./RecommendedMovies";
import SearchContainer from "./SearchContainer";
import SearchResults from "./SearchResults";
import Spinner from "./Spinner";
// import SearchInput from "./_components/SearchInputField";
// import MovieCard from "./_components/MovieCard";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default function HomePage({
  trendingData,
  movieAndSeries,
}: HomepageProps) {
  const [searchMovies, setSearchMovies] = useState<Movie[] | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="max-w-full border-primary-red">
      <SearchContainer
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSearchMovies={setSearchMovies}
        typeOfMovie="movie"
        placeholder="Search for movies or TV series"
      />

      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : searchMovies ? (
        <SearchResults moviesData={searchMovies} />
      ) : (
        <Main>
          <h2 className="mb-[2.5rem] text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
            Trending
          </h2>

          <div className="max-w-full overflow-x-hidden">
            <MovieCarousel moviesData={trendingData} />
          </div>

          <div className="w-full">
            <RecommendedMovies
              isRecommended={true}
              moviesData={movieAndSeries}
            />
          </div>
        </Main>
      )}

      {/* <Main>
        <h2 className="mb-[2.5rem] text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
          Trending
        </h2>

        <div className="max-w-full overflow-x-hidden">
          <MovieCarousel moviesData={trendingData} />
        </div>

        <div className="w-full">
          <RecommendedMovies isRecommended={true} moviesData={movieAndSeries} />
        </div>
      </Main> */}
    </div>
  );
}
