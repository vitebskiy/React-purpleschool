import { useRef, useState, useContext } from 'react';
import Button from './components/Button/Button';
import DescriptionItem from './components/DescriptionItem/DescriptionItem';
import PageTitle from './components/PageTitle/PageTitle';
import Search from './components/Search/Search';
import FilmList from './components/FilmList/FilmList';
import { Film } from './components/FilmList/FilmList.props';

import blackWidowImg from './assets/black-widow.jpg';
import shangChiImg from './assets/shangChiImg.jpg';

import searchIcon from './assets/search.svg';
import { UserContext } from './context/UserContext';
import { Profile } from './context/UserContext.props';
import { getMovies } from './api/moviesApi';

function App() {
  const { setCurrentProfile } = useContext(UserContext);


  const [search, setSearch] = useState('');
  const [films, setFilms] = useState<Film[]>([]);

  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    if (!userName.trim()) return;
    const profiles: Profile[] = JSON.parse(localStorage.getItem('profiles') || '[]');
    const existing = profiles.find((p) => p.name === userName.trim());

    console.log(profiles);

    if (!existing) {
      profiles.push({ name: userName.trim(), isLogined: true });
    } else {
      existing.isLogined = true;
    }
    localStorage.setItem('profiles', JSON.stringify(profiles));

    setCurrentProfile(userName.trim());
    setUserName('');
  };

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

      <FilmList films={films} />

      <br></br>

      <h3>Вход</h3>
      <Search ref={searchRef} value={userName} onChange={setUserName} placeholder="Введите имя"></Search>
      <br></br>
      <Button ref={inputRef} onClick={handleLogin} text={'Войти в профиль'} />
    </>
  );
}

export default App;
