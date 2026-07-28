import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import cn from 'classnames';
import { FilmListProps } from './FilmList.props';

function FilmList({ films }: FilmListProps) {
  return (
    <ul className={cn(styles['list-reset'], styles['film-list'])}>
      {films.map((film) => (
        <FilmCard
          key={film.imdbID}
          imdbID={film.imdbID}
          img={film.Poster}
          rating={film.rating}
          title={film.Title}
          Year={film.Year}
        />
      ))}
    </ul>
  );
}

export default FilmList;
