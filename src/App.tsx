import { useRef, useState, useContext } from 'react';
import Button from './components/Button/Button';
import DescriptionItem from './components/DescriptionItem/DescriptionItem';
import PageTitle from './components/PageTitle/PageTitle';
import Search from './components/Search/Search';
import FilmList from './components/FilmList/FilmList';
import { Film } from './components/FilmList/FilmList.props';

import searchIcon from './assets/search.svg';

import { getMovies } from './api/moviesApi';

function App() {
  

  const [search, setSearch] = useState('');
  const [films, setFilms] = useState<Film[]>([]);

  

  async function handleSearch() {
    const result = await getMovies(search);

    setFilms(result);
  }

  const searchRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <PageTitle title={'Поиск'} />
      <DescriptionItem
        descr={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
      />

      <div className="row">
        <Search
          value={search}
          ref={searchRef}
          onChange={setSearch}
          placeholder="Введите название"
          icon={searchIcon}></Search>
        <Button onClick={handleSearch} text={'Искать'} />
      </div>

      {films.length === 0 ? <p>Ничего не найдено</p> : <FilmList films={films} />}

      <br></br>

    </>
  );
}

export default App;
