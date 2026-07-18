export interface Film {
  id: number;
  title: string;
  rating: string;
  img: string;
}

export interface FilmListProps {
  films: Film[];
}
