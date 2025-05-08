import { tmdbApiResponse } from "@/lib/types";
import { API_KEY, BASE_URL } from "./constant";

export async function getTrendingMovies(type: string) {
  const response = await fetch(
    `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}`,
  );

  if (!response.ok) throw new Error("Failed to fetch trending movies");
  const data: tmdbApiResponse = await response.json();

  const formattedResults = data.results.map((item) => ({
    ...item,
    original_name: type === "movie" ? item.title : item.original_name,
  }));

  return formattedResults;
}

export async function getPopularMovies(type: string, page: number) {
  const response = await fetch(
    `${BASE_URL}/${type}/popular?api_key=${API_KEY}&page=${page}`,
  );
  if (!response.ok) throw new Error("Failed to fetch popular movies");

  const data: tmdbApiResponse = await response.json();
  const formattedResults = data.results.map((result) => {
    return { ...result, media_type: type };
  });

  return formattedResults;
}
