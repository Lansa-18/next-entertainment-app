"use client";

import { UnifiedMediaItem } from "@/lib/types";
import React from "react";
import { useSearchMovies } from "../_context/SearchMoviesContext";
import SearchContainer from "../_components/SearchContainer";
import Spinner from "../_components/Spinner";
import SearchResults from "../_components/SearchResults";
import Main from "../_components/Main";
import RecommendedMovies from "../_components/RecommendedMovies";

interface TvSeriesPageProps {
  series: UnifiedMediaItem[];
}

export default function TvSeriesPage({ series }: TvSeriesPageProps) {
  const {
    isLoading,
    setIsLoading,
    searchedMovies,
    setSearchedMovies,
    searchInputValue,
  } = useSearchMovies();

  const renderContent = () => {
    // Always render SearchContainer
    const searchContainer = (
      <SearchContainer
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSearchMovies={setSearchedMovies}
        typeOfMovie="movie"
        placeholder="Search for TV series"
      />
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
          <h2 className="text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
            TV Series
          </h2>

          <div className="w-full">
            <RecommendedMovies isRecommended={false} moviesData={series} />
          </div>
        </Main>
      </div>
    );
  };

  return renderContent();
}
