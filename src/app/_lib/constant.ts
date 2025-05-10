export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const getYearFromString = (stringDate: string) => {
    const year = stringDate?.split("-")[0];
    return year;
  };