import React from "react";

export interface MovieCardProp {
  movieName: string;
  movieRating: string;
  movieYear: string;
  movieType: string;
  className?: string;
  isRecommended?: boolean;
  posterImage?: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rated: string;
  imdbRating: string;
}

export interface omdbApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface RecommendedMovieProps {
  moviesData: Movie[];
  isRecommended: boolean;
}

export interface MoviesCarouselProps {
  moviesData: Movie[];
}

export interface MainProps {
  children: React.ReactNode;
}

export interface SearchInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeHolderText: string;
}

export interface HomepageProps {
  trendingData: Movie[];
  movieAndSeries: Movie[];
}

export interface SearchContainerProps {
  placeholder: string;
  typeOfMovie: string;
  onSearchMovies: (data: Movie[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export interface SearchResultsProps {
  moviesData: Movie[];
}
