import React from "react";
import MovieCard from "./MovieCard";
import { RecommendedMovieProps } from "@/lib/types";

export default function RecommendedMovies({
  moviesData = [],
  isRecommended,
}: RecommendedMovieProps) {
  if (!Array.isArray(moviesData) || !moviesData.length) {
    return (
      <section className="mt-[4rem] w-full">
        <h2 className="text-[3.2rem] font-normal tracking-[-0.5px]">
          Recommended for you
        </h2>
        <p className="text-light-blue">No movies available</p>
      </section>
    );
  }

  return (
    <section
      className={`${isRecommended ? "mt-[4rem]" : ""} w-full border-primary-red`}
    >
      {isRecommended && (
        <h2 className="text-[3.2rem] font-normal tracking-[-0.5px]">
          Recommended for you
        </h2>
      )}

      <article className="grid grid-cols-4 justify-between gap-[4rem] py-[3.2rem]">
        {moviesData.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            className="w-[100%]"
            posterImage={movie.Poster}
            movieName={movie.Title}
            movieRating={movie.Rated}
            movieType={movie.Type}
            movieYear={movie.Year}
            isRecommended={true}
          />
        ))}
      </article>
    </section>
  );
}
