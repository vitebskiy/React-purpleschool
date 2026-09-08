export interface Film {
  imdbID: string;
  Title: string;
  rating: string;
  Poster: string;
}

export interface FilmListProps {
  films: Film[];
}
