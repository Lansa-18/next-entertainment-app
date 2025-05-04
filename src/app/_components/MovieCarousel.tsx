"use client";

import React from "react";
import MovieCard from "./MovieCard";
import { MoviesCarouselProps } from "@/lib/types";

export default function MovieCarousel({ moviesData }: MoviesCarouselProps) {
  console.log(moviesData);
  return (
    <div className="carousel carousel-center max-w-full space-x-8 border-primary-red">
      {moviesData.map((movie) => (
        <div className="carousel-item" key={movie.imdbID}>
          <MovieCard
            posterImage={movie.Poster}
            movieName={movie.Title}
            movieRating={movie.Rated}
            movieType={movie.Type}
            movieYear={movie.Type}
            className="w-[47rem] h-[23rem]"
          />
        </div>
      ))}
    </div>
  );
}
