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
}

export interface omdbApiResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
}

export interface RecommendedMovieProps {
    moviesData: Movie[];
}