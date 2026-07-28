import axios from 'axios';

export const BASE_API = 'https://www.omdbapi.com/?apikey=69a8dcae&s=';

export async function getMovies(query: string) {
  const result = await axios.get(`${BASE_API}${query}`);
  return result.data.Search;
}

export async function getMovieById(id: string | undefined) {
  const result = await axios.get(`https://www.omdbapi.com/?apikey=69a8dcae&i=${id}`);

  return result.data;
}
