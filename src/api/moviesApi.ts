import axios from 'axios';

export const BASE_API = `https://www.omdbapi.com/?apikey=69a8dcae&s=`;

export async function searchMovie(quere: string) {
  const response = await axios.get(`${BASE_API}${quere}`);
  return response.data.Search ?? [];
}
