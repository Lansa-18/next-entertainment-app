import React from "react";
import MovieCard from "./MovieCard";
import { MoviesCarouselProps } from "@/lib/types";
import { getYearFromString, IMAGE_BASE_URL } from "../_lib/constant";

export default function MovieCarousel({ moviesData }: MoviesCarouselProps) {

  return (
    <div className="carousel carousel-center max-w-full space-x-8 border-primary-red">
      {moviesData.map((movie) => {
        return (
          <div className="carousel-item" key={movie.id}>
            <MovieCard
              isRecommended={false}
              posterImage={`${IMAGE_BASE_URL}${movie.poster_path}`}
              movieName={movie.original_name || ""}
              movieRating={movie.adult === true ? 'R18' : 'PG'}
              movieType={movie.media_type}
              movieYear={getYearFromString(movie.release_date || "")}
              className="h-[23rem] w-[47rem]"
            />
          </div>
        );
      })}
    </div>
  );
}
