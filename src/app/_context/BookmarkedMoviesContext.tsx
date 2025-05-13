"use client";

import { UnifiedMediaItem } from "@/lib/types";
import { createContext, useContext, useEffect, useState } from "react";

const BOOKMARK_CHANGE_EVENT = "bookmarkChange";

interface BookmarkedMoviesContextProp {
  bookmarkedMovies: UnifiedMediaItem[];
  setBookmarkedMovies: React.Dispatch<React.SetStateAction<UnifiedMediaItem[]>>;
  addBookmarkedMovie: (movie: UnifiedMediaItem) => void;
  removeBookmarkedMovie: (id: number) => void;
  isMovieBookmarked: (id: number) => boolean;
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

  // Loading bookmarkes from localStorage on mount
  useEffect(() => {
    loadBookmarks();

    window.addEventListener(BOOKMARK_CHANGE_EVENT, loadBookmarks);

    return () => {
      window.removeEventListener(BOOKMARK_CHANGE_EVENT, loadBookmarks);
    };
  }, []);

  const loadBookmarks = () => {
    try {
      const savedBookmarks = localStorage.getItem("bookmarked-movies");
      if (savedBookmarks) {
        const parsedBookmarks = JSON.parse(savedBookmarks);
        setBookmarkedMovies(parsedBookmarks);
      }
    } catch (error) {
      console.error("Failed te parse bookmarks from localStorage.", error);
    }
  };

  const addBookmarkedMovie = (movie: UnifiedMediaItem) => {
    setBookmarkedMovies((prev) => {
      if (prev.some((item) => item?.id === movie?.id)) {
        return prev;
      }
      const updatedBookmarks = [...prev, { ...movie, isBookmarked: true }];

      localStorage.setItem(
        "bookmarked-movies",
        JSON.stringify(updatedBookmarks),
      );

      window.dispatchEvent(new Event(BOOKMARK_CHANGE_EVENT));

      return updatedBookmarks;
    });
    console.log(bookmarkedMovies);
  };

  const removeBookmarkedMovie = (id: number) => {
    setBookmarkedMovies((prev) => {
      const updatedBookmarks = prev.filter((item) => item?.id !== id);

      localStorage.setItem(
        "bookmarked-movies",
        JSON.stringify(updatedBookmarks),
      );

      window.dispatchEvent(new Event(BOOKMARK_CHANGE_EVENT));

      return updatedBookmarks;
    });
  };

  const isMovieBookmarked = (id: number) => {
    return bookmarkedMovies.some((item) => item?.id === id);
  };

  return (
    <BookmarkedMoviesContext.Provider
      value={{
        bookmarkedMovies,
        setBookmarkedMovies,
        addBookmarkedMovie,
        removeBookmarkedMovie,
        isMovieBookmarked,
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
