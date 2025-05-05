"use server";

import { searchMoviesByType } from "./api";

export async function searchMovies(query: string, type: string) {
  try {
    const results = await searchMoviesByType(query, type);
    console.log(results)
    return { success: true, data: results };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
