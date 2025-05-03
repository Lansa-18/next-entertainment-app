"use client";

import React from "react";
import MovieCard from "./MovieCard";

export default function MovieCarousel() {
  return (
    <div className="carousel carousel-center max-w-full space-x-8 border-primary-red">
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear="2019"
          className="h-[23rem] w-[47rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear="2019"
          className="h-[23rem] w-[47rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear="2019"
          className="h-[23rem] w-[47rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear="2019"
          className="h-[23rem] w-[47rem]"
        />
      </div>
      <div className="carousel-item">
        <MovieCard
          movieName="Beyond Earth"
          movieRating="PG"
          movieType="Movie"
          movieYear="2019"
          className="h-[23rem] w-[47rem]"
        />
      </div>
    </div>
  );
}
