"use client";

import { HomepageProps } from "@/lib/types";
import { Metadata } from "next";
import { useSearchMovies } from "../_context/SearchMoviesContext";
import Main from "../_components/Main";
import MovieCarousel from "../_components/MovieCarousel";
import RecommendedMovies from "../_components/RecommendedMovies";
import SearchContainer from "../_components/SearchContainer";
import SearchResults from "../_components/SearchResults";
import Spinner from "../_components/Spinner";

export const metadata: Metadata = {
  title: "All Trending Content",
};

export default function HomePage({
  user,
  trendingData,
  movieAndSeries,
}: HomepageProps) {
  const {
    isLoading,
    setIsLoading,
    searchedMovies,
    setSearchedMovies,
    searchInputValue,
  } = useSearchMovies();

  const renderContent = () => {
    const searchContainer = (
      <article className="flex items-center justify-between land-phone:items-start land-phone:gap-4 land-phone:flex-col-reverse">
        <div className="basis-1/2 land-phone:w-full">
          <SearchContainer
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            onSearchMovies={setSearchedMovies}
            typeOfMovie="movie"
            placeholder="Search for movies or TV series"
          />
        </div>

        <h1 className="text-white text-3xl font-semibold">
          Welcome <span className="text-primary-red">{user.name.split(' ').at(0)} 😎</span>
        </h1>
      </article>
    );

    // Loading state
    if (searchInputValue && isLoading) {
      return (
        <div className="max-w-full">
          {searchContainer}
          <div className="flex min-h-[200px] items-center justify-center">
            <Spinner />
          </div>
        </div>
      );
    }

    // Search results state
    if (searchInputValue && searchedMovies.length > 0) {
      return (
        <div className="max-w-full">
          {searchContainer}
          <SearchResults
            searchText={searchInputValue}
            moviesData={searchedMovies}
          />
        </div>
      );
    }

    // No results state
    if (searchInputValue && !isLoading && searchedMovies.length === 0) {
      return (
        <div className="max-w-full">
          {searchContainer}
          <div className="flex min-h-[200px] items-center justify-center">
            <p className="text-lg text-white">No results found</p>
          </div>
        </div>
      );
    }

    // Default state (no search input)
    return (
      <div className="max-w-full">
        {searchContainer}
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
      </div>
    );
  };

  return renderContent();
}
