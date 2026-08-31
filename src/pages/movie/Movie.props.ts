export interface MovieProps {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  Ratings: {
    Value: string;
  }[];
}
