"use client";

import { UnifiedMediaItem } from "@/lib/types";
import { createContext, useContext, useState } from "react";

interface BookmarkedMoviesContextProp {
  bookmarkedMovies: UnifiedMediaItem[];
  setBookmarkedMovies: React.Dispatch<React.SetStateAction<UnifiedMediaItem[]>>;
  isBookmarked: boolean;
  setIsBookmarked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface BookmarkedMoviesProviderProp {
  children: React.ReactNode;
}

const BookmarkedMoviesContext = createContext<
  BookmarkedMoviesContextProp | undefined
>(undefined);

function BookmarkedMoviesProvider({ children }: BookmarkedMoviesProviderProp) {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<UnifiedMediaItem[]>(
    [],
  );
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <BookmarkedMoviesContext.Provider
      value={{
        bookmarkedMovies,
        setBookmarkedMovies,
        isBookmarked,
        setIsBookmarked,
      }}
    >
      {children}
    </BookmarkedMoviesContext.Provider>
  );
}

function useBookmarkedMovies() {
  const context = useContext(BookmarkedMoviesContext);

  if (context === undefined)
    throw new Error("Context was used outside the provider");

  return context;
}

export { useBookmarkedMovies, BookmarkedMoviesProvider };
