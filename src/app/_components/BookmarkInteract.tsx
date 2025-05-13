import React from "react";
import { useBookmarkedMovies } from "../_context/BookmarkedMoviesContext";
import { BookmarkInteractProps } from "@/lib/types";

export default function BookmarkInteract({ movie }: BookmarkInteractProps) {
  const {
    bookmarkedMovies,
    addBookmarkedMovie,
    removeBookmarkedMovie,
    isMovieBookmarked,
  } = useBookmarkedMovies();

  const isBookmarked = isMovieBookmarked(movie.id);
  // const isBookmarked = movie.isBookmarked;
  // const isBookmarked = bookmarkedMovies.some(item => item?.id === movie?.id);

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isBookmarked) {
      removeBookmarkedMovie(movie?.id);
    } else {
      addBookmarkedMovie(movie);
    }

    console.log("The BookmarkedMovie array:", bookmarkedMovies);
  };

  return (
    <div
      onClick={handleToggleBookmark}
      className="group absolute right-10 top-8 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle
          className={`transition-all duration-300 group-hover:fill-white group-hover:opacity-100 ${isMovieBookmarked(movie.id) ? "opacity-1 fill-white" : "fill-[#10141E]"}`}
          cx="16"
          cy="16"
          r="16"
        />
        <path
          className={`${isMovieBookmarked(movie.id) ? "stroke-black" : "stroke-white"} transition-all duration-300 group-hover:stroke-black`}
          d="M11.0576 9.75H20.6094C20.628 9.75 20.6454 9.7514 20.6621 9.75488L20.7109 9.77148L20.7217 9.77539L20.7314 9.7793C20.7986 9.80616 20.8383 9.84044 20.8701 9.88672C20.9028 9.93431 20.917 9.97775 20.917 10.0361V21.9639C20.917 22.0222 20.9028 22.0657 20.8701 22.1133C20.8383 22.1596 20.7986 22.1938 20.7314 22.2207L20.7236 22.2236L20.7158 22.2275C20.7109 22.2296 20.6807 22.2412 20.6094 22.2412C20.5318 22.2412 20.4733 22.225 20.418 22.1885L20.3633 22.1445L16.3574 18.2344L15.833 17.7236L15.3096 18.2344L11.3027 22.1455C11.2158 22.2264 11.144 22.2499 11.0576 22.25C11.0204 22.25 10.9879 22.2428 10.9551 22.2285L10.9453 22.2246L10.9346 22.2207L10.8525 22.1738L10.7959 22.1133C10.7632 22.0657 10.75 22.0222 10.75 21.9639V10.0361C10.75 10.0072 10.7534 9.98191 10.7607 9.95801L10.7959 9.88672C10.8277 9.84029 10.8673 9.80622 10.9346 9.7793L10.9453 9.77539L10.9551 9.77148C10.9715 9.76432 10.9881 9.75835 11.0049 9.75488L11.0576 9.75Z"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

// #10141E
