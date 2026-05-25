import './FilmList.css';
import FilmCard from '../FilmCard/FilmCard';

function FilmList({ films }) {
  return (
    <ul className="list-rest film-list">
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
