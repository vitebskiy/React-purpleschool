import './Header.css';

import logoSvg from '../../assets/logo.svg';

function Header() {
  return (
   <div className="header">
    <img src={logoSvg} alt="Логотип" />
    <ul className="header__list">
      <li className="header__item">
        <a href="" className="header__link">Поиск фильмов</a>
      </li>
      <li className="header__item">
        <a href="" className="header__link">Мои фильмы</a>
      </li>
    </ul>
   </div>
  );
}


export default Header;
