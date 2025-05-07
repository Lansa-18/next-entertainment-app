// import { omdbApiResponse } from "@/lib/types";

// export const apikey = process.env.OMDPAPIKEY;
// const baseURL = "http://www.omdbapi.com/";
const BASE_URL = 'https://api.themoviedb.org/3';
const api_key = process.env.TMDB_APIKEY;

// export async function getMovieById(id: string) {
//   const response = await fetch(`${baseURL}?i=${id}&apikey=${apikey}`);
//   if (!response.ok) throw new Error("Failed to fetch movie.");

//   const data = await response.json();
//   return { Rated: data.Rated, imdbRating: data.imdbRating };
// }

// export async function getMoviesByType(type: string, query: string) {
//   const response = await fetch(
//     `${baseURL}?apikey=${apikey}&s=${query}&type=${type}&page=1`,
//   );

//   if (!response.ok) throw new Error("Failed to fetch movies");

//   const data: omdbApiResponse = await response.json();

//   if (data.Response === "False") throw new Error("No results found");

//   const moviesWithRatings = await Promise.all(
//     data.Search.map(async (movie) => {
//       const { Rated, imdbRating } = await getMovieById(movie.imdbID);

//       return {
//         ...movie,
//         Rated,
//         imdbRating,
//       };
//     }),
//   );

//   return moviesWithRatings;
// }

// export async function searchMoviesByType(query: string, type: string) {
//   console.log(apikey);
//   const response = await fetch(
//     `${baseURL}?apikey=${apikey}&s=${query}&type=${type}&page=1`,
//   );

//   if (!response.ok) throw new Error("Failed in searching movies");

//   const data: omdbApiResponse = await response.json();

//   if (data.Response === "False")
//     throw new Error(`Found No result for ${query}`);

//   const searchedMovies = await Promise.all(
//     data.Search.map(async (movie) => {
//       const { Rated, imdbRating } = await getMovieById(movie.imdbID);

//       return {
//         ...movie,
//         Rated,
//         imdbRating,
//       };
//     }),
//   );

//   return searchedMovies;
// }

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${api_key}`);
  const data = await response.json();

  console.log(data)
}