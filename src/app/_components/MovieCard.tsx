import React from "react";

import Image from "next/image";
import large from "@/public/assets/large.jpg";
import oval from "@/public/assets/oval.svg";
import iconCategoryMovie from "@/public/assets/icon-category-movie.svg";
import BookmarkInteract from "./BookmarkInteract";
import PlayOnHover from "./PlayOnHover";
import { MovieCardProp } from "@/lib/types";

export default function MovieCard({
  movieName,
  movieRating,
  movieType,
  movieYear,
  className,
  isRecommended,
  posterImage,
  movie
}: MovieCardProp) {

  if (!isRecommended)
    return (
      <section className={`card-group relative ${className} carousel-item`}>
        <div className="relative aspect-video w-full border-primary-red">
          <Image
            className="rounded-lg object-cover transition-all duration-300 card-group-hover:opacity-50"
            src={posterImage || large}
            alt={posterImage || "Movie Poster"}
            fill
            loading="lazy"
            sizes="(max-width: 470px) 100vw"
          />

          <div className="opacity-0 transition-opacity duration-300 card-group-hover:opacity-100">
            <PlayOnHover />
          </div>
        </div>

        <article className="absolute bottom-5 left-8 z-20 text-white">
          <div className="flex items-center gap-2">
            <p className="text-[15px]">{movieYear}</p>
            <Image src={oval} width={3} height={3} alt="oval-icon" />
            <div className="flex items-center gap-3">
              <Image
                src={iconCategoryMovie}
                alt="icon-category-movie"
                width={12}
                height={12}
              />
              <span className="text-[15px]">{movieType}</span>
            </div>
            <Image src={oval} width={3} height={3} alt="oval-icon" />
            <p className="text-[15px]">{movieRating}</p>
          </div>
          <h2 className="text-[24px]">{movieName}</h2>
        </article>

        <div className="group">
          <BookmarkInteract movie={movie} />
        </div>

        {/* Overlay at the bottom of the image so that the texts can be seen easily. */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </section>
    );

  if (isRecommended)
    return (
      <section className="card-group relative cursor-pointer space-y-[8px]">
        <div className="relative aspect-[1.61] w-full border-primary-red">
          <Image
            className="rounded-lg object-cover transition-all duration-300 card-group-hover:opacity-50"
            src={posterImage || large}
            alt={posterImage || "Movie Poster"}
            fill
            loading="lazy"
            sizes="(max-width: 280px) 100vw"
          />

          <div className="opacity-0 transition-opacity duration-300 card-group-hover:opacity-100">
            <PlayOnHover />
          </div>
        </div>

        <article className="border-primary-red">
          <div className="flex items-center gap-2">
            <p className="text-[13px] opacity-75">{movieYear}</p>
            <Image src={oval} width={3} height={3} alt="oval-icon" />
            <div className="flex items-center gap-3">
              <Image
                src={iconCategoryMovie}
                alt="icon-category-movie"
                width={12}
                height={12}
              />
              <span className="text-[13px] opacity-75">{movieType}</span>
            </div>
            <Image src={oval} width={3} height={3} alt="oval-icon" />
            <p className="text-[13px] opacity-75">{movieRating}</p>
          </div>
          <h2 className="text-[18px] font-normal">{movieName}</h2>
        </article>

        <div className="group">
          <BookmarkInteract movie={movie} />
        </div>
      </section>
    );
}
