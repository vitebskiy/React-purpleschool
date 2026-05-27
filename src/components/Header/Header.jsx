import styles from './Header.module.css';

import logoSvg from '../../assets/logo.svg';

function Header() {
  return (
   <div className={styles['header']}>
    <img src={logoSvg} alt="Логотип" />
    <ul className={styles["header__list"]}>
      <li className={styles["header__item"]}>
        <a href="" className={styles["header__link"]}>Поиск фильмов</a>
      </li>
      <li className={styles["header__item"]}>
        <a href="" className={styles["header__link"]}>Мои фильмы</a>
      </li>
    </ul>
   </div>
  );
}


export default Header;
