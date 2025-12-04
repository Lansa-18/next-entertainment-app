import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonMovieCardProps {
  isRecommended?: boolean;
  className?: string;
}

export default function SkeletonMovieCard({
  isRecommended = false,
  className = "",
}: SkeletonMovieCardProps) {
  if (!isRecommended) {
    return (
      <section className={`${className} z-30`}>
        {/* Image skeleton */}
        <Skeleton className="h-full w-full rounded-lg bg-neutral-800/80" />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 z-30 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </section>
    );
  }

  return (
    <section className={`${className} z-30 flex flex-col gap-[8px]`}>
      {/* Image skeleton */}
      <article className="relative aspect-[1.61] w-full">
        <Skeleton className="h-full w-full rounded-lg bg-neutral-800/80" />
      </article>
    </section>
  );
}
