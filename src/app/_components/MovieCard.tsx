import React from "react";

import Image from "next/image";
import large from "@/public/assets/large.jpg";
import oval from "@/public/assets/oval.svg";
import iconCategoryMovie from "@/public/assets/icon-category-movie.svg";
import BookmarkInteract from "./BookmarkInteract";
import PlayOnHover from "./PlayOnHover";

interface MovieCardProp {
  movieName: string;
  movieRating: string;
  movieYear: number;
  movieType: string;
  className?: string;
  isRecommended?: boolean;
}

export default function MovieCard({
  movieName,
  movieRating,
  movieType,
  movieYear,
  className,
  isRecommended,
}: MovieCardProp) {
  if (!isRecommended)
    return (
      <section className={`relative card-group ${className} carousel-item`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            className="object-cover rounded-lg card-group-hover:opacity-50 transition-all duration-300"
            fill
            src={large}
            alt="dummy-img"
          />
        </div>

        {/* Overlay Content */}
        <article className="absolute bottom-5 left-8 text-white z-10">
          <div className="flex items-center gap-2">
            <p className="text-[15px] opacity-75">{movieYear}</p>
            <Image src={oval} width={3} height={3} alt="oval-icon" />
            <div className="flex items-center gap-3">
              <Image
                src={iconCategoryMovie}
                alt="icon-category-movie"
                width={12}
                height={12}
              />
              <span className="text-[15px] opacity-75">{movieType}</span>
            </div>
            <Image src={oval} width={3} height={3} alt="oval-icon" />
            <p className="text-[15px] opacity-75">{movieRating}</p>
          </div>
          <h2 className="text-[24px]">{movieName}</h2>
        </article>

        <div className="group">
          <BookmarkInteract />
        </div>
        <div className="opacity-0 card-group-hover:opacity-100 transition-opacity duration-300">
          <PlayOnHover />
        </div>
      </section>
    );

  if (isRecommended)
    return (
      <section className="relative space-y-[8px] card-group">
        <div className="">
          <Image
            className="object-cover rounded-lg card-group-hover:opacity-50 transition-all duration-300"
            src={large}
            alt="dummy-img"
          />
        </div>

        <article className=" border-primary-red ">
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
          <BookmarkInteract />
        </div>
        <div className="opacity-0 card-group-hover:opacity-100 transition-opacity duration-300">
          <PlayOnHover />
        </div>
      </section>
    );
}
