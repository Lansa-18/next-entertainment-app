"use client";

import { UnifiedMediaItem } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { useSearchMovies } from "../_context/SearchMoviesContext";
import SearchContainer from "../_components/SearchContainer";
import Spinner from "../_components/Spinner";
import SearchResults from "../_components/SearchResults";
import Main from "../_components/Main";
import RecommendedMovies from "../_components/RecommendedMovies";
import { useBookmarkedMovies } from "../_context/BookmarkedMoviesContext";

export default function BookmarkPage() {
  const {
    isLoading,
    setIsLoading,
    searchedMovies,
    setSearchedMovies,
    searchInputValue,
  } = useSearchMovies();
  const { bookmarkedMovies } = useBookmarkedMovies();
  const [movies, setMovies] = useState<UnifiedMediaItem[]>([]);

  useEffect(() => {
    setMovies(bookmarkedMovies);
  }, [bookmarkedMovies]);

  const renderContent = () => {
    // Always render SearchContainer
    const searchContainer = (
      <SearchContainer
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSearchMovies={setSearchedMovies}
        typeOfMovie="movie"
        placeholder="Search for Bookmarked Movies"
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

    if (!movies.length) {
      return (
        <div className="pt-8">
          <h2 className="mb-6 text-3xl font-medium">Bookmarked Movies</h2>
          <p className="text-light-blue">
            You haven&apos;t bookmarked any movies yet.
          </p>
        </div>
      );
    }

    // Default state (no search input)
    return (
      <div className="max-w-full">
        {searchContainer}
        <Main>
          <h2 className="text-[3.2rem] font-normal leading-normal tracking-[-0.5px]">
            Bookmarks
          </h2>

          <div className="w-full">
            <RecommendedMovies isRecommended={false} moviesData={movies} />
          </div>
        </Main>
      </div>
    );
  };

  return renderContent();
}
