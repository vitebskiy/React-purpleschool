import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import cn from 'classnames';

function FilmList({ films }) {
  return (
    // <ul className={`${styles['list-reset']} ${styles['film-list']}`}>
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
