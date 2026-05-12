import { useState } from 'react';
import Button from './components/Button/Button';
import DescriptionItem from './components/DescriptionItem/DescriptionItem';
import PageTitle from './components/PageTitle/PageTitle';
import Search from './components/Search/Search';

import searchIcon from './assets/search.svg';
import Header from './components/Header/Header';

function App() {
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
    </>
  );
}

export default App;
