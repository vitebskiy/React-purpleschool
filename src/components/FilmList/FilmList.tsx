import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import cn from 'classnames';
import { FilmListProps } from './FilmList.props';

function FilmList({ films }: FilmListProps) {
  return (
    <ul className={cn(styles['list-reset'], styles['film-list'])}>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          img={film.img}
          rating={film.rating}
          title={film.title}
        />
      ))}
    </ul>
  );
}

export default FilmList;
