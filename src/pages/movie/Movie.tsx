import { MovieProps } from './Movie.props';
import { useLoaderData } from 'react-router-dom';

export function Movie() {
  const movie = useLoaderData() as MovieProps;

  return (
    <>
      <img width={300} src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <span>{movie.Ratings[0].Value} </span>
    </>
  );
}
