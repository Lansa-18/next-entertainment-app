import React from "react";
import MovieCard from "./MovieCard";

export default function RecommendedMovies() {
  return (
    <section className="w-full border-primary-red mt-[4rem]">
      <h2 className="text-[3.2rem] tracking-[-0.5px] font-normal">
        Recommended for you
      </h2>

      <article className="grid gap-[4rem] grid-cols-4 py-[3.2rem] justify-between">
        <MovieCard
          className="w-[100%]"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />

        <MovieCard
          className="aspect-video"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />
        <MovieCard
          className="aspect-video"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />
        <MovieCard
          className="aspect-video"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />
        <MovieCard
          className="aspect-video"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />
        <MovieCard
          className="aspect-video"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />
        <MovieCard
          className="aspect-video"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />
        <MovieCard
          className="aspect-video"
          movieName="The Great Lands"
          movieRating="PG"
          movieType="Movie"
          movieYear={2019}
          isRecommended={true}
        />
      </article>
    </section>
  );
}
