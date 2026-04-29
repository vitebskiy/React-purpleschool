import Button from './components/Button/Button';
import DescriptionItem from './components/DescriptionItem/DescriptionItem';
import PageTitle from './components/PageTitle/PageTitle';

function App() {
  return (
    <>
      <PageTitle title={"Поиск!"} />
      <DescriptionItem descr={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."} />
      <Button text={'Поиск'} />
    </>
  );
}

export default App;
