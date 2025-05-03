export const apikey = process.env.OMDPAPIKEY;
const baseURL = 'http://www.omdbapi.com/';


export async function getMovies() {
    const response = await fetch(`${baseURL}?apikey=${apikey}&s=a&type=movie&page=2`);
    const data = await response.json();
    console.log(data);
}