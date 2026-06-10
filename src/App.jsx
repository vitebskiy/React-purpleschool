import { useState } from 'react';
import Button from './components/Button/Button';
import DescriptionItem from './components/DescriptionItem/DescriptionItem';
import PageTitle from './components/PageTitle/PageTitle';
import Search from './components/Search/Search';
import FilmList from './components/FilmList/FilmList';

import blackWidowImg from './assets/black-widow.jpg';
import shangChiImg from './assets/shangChiImg.jpg';


import searchIcon from './assets/search.svg';
import Header from './components/Header/Header';

function App() {

const films = [
    {
      id: 1,
      title: 'Black Widow',
      rating: '6.8',
      img: blackWidowImg
    },
    {
      id: 2,
      title: 'Shang Chi',
      rating: '7.9',
      img: shangChiImg
    }
  ];

  const [search, setSearch] = useState('');

  function handleSearch() {
    console.log('Ищем:', search);
  }

  return (
    <>
      <header>
        <Header></Header>
      </header>

      <PageTitle title={'Поиск'} />
      <DescriptionItem descr={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />

      <div className="row">
        <Search value={search} onChange={setSearch} placeholder="Введите название" icon={searchIcon}></Search>
        <Button onClick={handleSearch} text={'Искать'} />
      </div>

      <FilmList films={films} />
    </>
  );
}

export default App;
