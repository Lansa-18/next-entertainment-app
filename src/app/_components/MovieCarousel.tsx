import React from "react";
import MovieCard from "./MovieCard";
import { MoviesCarouselProps } from "@/lib/types";
import { getYearFromString, IMAGE_BASE_URL } from "../_lib/constant";

export default function MovieCarousel({ moviesData }: MoviesCarouselProps) {
  return (
    <section className="overflow-hidden">
      <article className="scrollbar-hide carousel carousel-center flex max-w-[2000px] space-x-8 overflow-x-auto">
        {moviesData.map((movie, index) => {
          return (
            <MovieCard
              key={movie.id}
              isRecommended={false}
              posterImage={`${IMAGE_BASE_URL}${movie.poster_path}`}
              movieName={movie.original_name || ""}
              movieRating={movie.adult === true ? "R18" : "PG"}
              movieType={movie.media_type}
              movieYear={getYearFromString(movie.release_date || "")}
              className="h-[23rem] w-[47rem]"
              movie={movie}
              priority={index < 2} // Prioritize first 2 visible images
            />
          );
        })}
      </article>
    </section>
  );
}
