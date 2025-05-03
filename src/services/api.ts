import { omdbApiResponse } from "@/lib/types";

export const apikey = process.env.OMDPAPIKEY;
const baseURL = "http://www.omdbapi.com/";

export async function getMovieById(id: string) {
  const response = await fetch(`${baseURL}?i=${id}&apikey=${apikey}`);
  if (!response.ok) throw new Error("Failed to fetch movie.");

  const data = await response.json();

  return data.Rated;
}

export async function getMoviesByType(type: string) {
  const response = await fetch(
    `${baseURL}?apikey=${apikey}&s=marvel&type=${type}&page=1`,
  );

  if (!response.ok) throw new Error("Failed to fetch movies");

  const data: omdbApiResponse = await response.json();

  if (data.Response === "False") throw new Error("No results found");

  const moviesWithRatings = await Promise.all(
    data.Search.map(async (movie) => {
      const rating = await getMovieById(movie.imdbID);

      return {
        ...movie,
        Rated: rating,
      };
    }),
  );

  return moviesWithRatings;
}
