import React from "react";
import MovieCard from "./MovieCard";
import { RecommendedMovieProps } from "@/lib/types";
import { getYearFromString, IMAGE_BASE_URL } from "../_lib/constant";

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
        {moviesData.map((movie) => {
          return (
            <MovieCard
              key={movie.unique_id}
              className="w-[100%]"
              posterImage={`${IMAGE_BASE_URL}${movie.poster_path}`}
              movieName={movie.original_name || movie.original_title || ""}
              movieRating={movie.adult === true ? "R18" : "PG"}
              movieType={movie.media_type}
              movieYear={getYearFromString(
                movie.release_date || movie.first_air_date || "",
              )}
              isRecommended={true}
              movie={movie}
            />
          );
        })}
      </article>
    </section>
  );
}
