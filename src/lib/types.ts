import React from "react";

export interface SideNavigationProp {
  avatarImage?: string;
  isAuthorized: boolean;
}

export interface MovieCardProp {
  movieName: string;
  movieRating: string;
  movieYear: string;
  movieType: string;
  className?: string;
  isRecommended?: boolean;
  posterImage?: string;
  movie: UnifiedMediaItem;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MediaData {
  id: number;
  backdrop_path: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: string;
  media_type: string;
  unique_id: string;
  isBookmarked: boolean;
}

export interface UnifiedMediaItem extends MediaData {
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
  video?: boolean;
}

export interface tmdbApiResponse {
  page: number;
  results: UnifiedMediaItem[];
  totalPages: number;
  totalResults: number;
}

export interface RecommendedMovieProps {
  moviesData: UnifiedMediaItem[];
  isRecommended: boolean;
}

export interface MoviesCarouselProps {
  moviesData: UnifiedMediaItem[];
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
  trendingData: UnifiedMediaItem[];
  movieAndSeries: UnifiedMediaItem[];
}

export interface SearchContainerProps {
  placeholder: string;
  typeOfMovie: string;
  onSearchMovies: (data: UnifiedMediaItem[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export interface SearchResultsProps {
  moviesData: UnifiedMediaItem[];
  searchText: string;
}

export interface BookmarkInteractProps {
  movie: UnifiedMediaItem;
}