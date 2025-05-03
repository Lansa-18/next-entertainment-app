"use client";

import React from "react";
import MovieCard from "./MovieCard";

export default function MovieCarousel() {
  return (
    <div className="carousel border-primary-red carousel-center max-w-full space-x-8">
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          className="w-[47rem] h-[23rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          className="w-[47rem] h-[23rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          className="w-[47rem] h-[23rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          className="w-[47rem] h-[23rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          className="w-[47rem] h-[23rem]"
        />
      </div>
    </div>
  );
}
