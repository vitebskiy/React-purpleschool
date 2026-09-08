import { useSelector } from 'react-redux';
import FilmList from '../../components/FilmList/FilmList';
import { RootState } from '../../components/store/store';

export function Favorites() {
  const favoriteFilms = useSelector((s:RootState) => s.favorite.items);
  return <FilmList films={favoriteFilms} />;
}
