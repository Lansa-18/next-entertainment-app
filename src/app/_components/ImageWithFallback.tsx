"use client";

import React, { useState } from "react";
import Spinner from "./Spinner";
import Image, { StaticImageData } from "next/image";

interface ImageWithFallbackProps {
  src: string | undefined;
  alt: string;
  fallbackSrc: StaticImageData;
  className?: string;
  sizes?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  sizes,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <Image
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        src={imgSrc || fallbackSrc}
        alt={alt}
        sizes={sizes}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setImgSrc(fallbackSrc.src)}
        {...props}
      />
    </>
  );
}
