export interface Film {
  imdbID: string;
  Title: string;
  rating: string;
  Poster: string;
  Year: string;
}

export interface FilmListProps {
  films: Film[];
}
