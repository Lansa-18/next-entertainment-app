"use client";

import { UnifiedMediaItem } from "@/lib/types";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { createContext, useContext, useState } from "react";

interface SearchMoviesProviderProps {
  children: React.ReactNode;
}

interface SearchMoviesContextProp {
  searchedMovies: UnifiedMediaItem[];
  setSearchedMovies: React.Dispatch<React.SetStateAction<UnifiedMediaItem[]>>;
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchParams: ReadonlyURLSearchParams;
}

const SearchMoviesContext = createContext<SearchMoviesContextProp | undefined>(
  undefined,
);

function SearchMoviesProvider({ children }: SearchMoviesProviderProps) {
  const [searchedMovies, setSearchedMovies] = useState<UnifiedMediaItem[]>([]);
  const searchParams = useSearchParams();
  const [searchInputValue, setSearchInputValue] = useState(
    searchParams.get("q") || "",
  );
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SearchMoviesContext.Provider
      value={{
        searchedMovies,
        setSearchedMovies,
        searchInputValue,
        setSearchInputValue,
        isLoading,
        setIsLoading,
        searchParams
      }}
    >
      {children}
    </SearchMoviesContext.Provider>
  );
}

function useSearchMovies() {
  const context = useContext(SearchMoviesContext);

  if (context === undefined)
    throw new Error("Context was used outside the provider");

  return context;
}

export { SearchMoviesProvider, useSearchMovies };
