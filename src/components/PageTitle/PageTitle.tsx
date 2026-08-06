import styles from './PageTitle.module.css';
import { PageTitleProps } from './PageTitle.props';

function PageTitle({ title }: PageTitleProps) {
  return <h1 className={styles['page-title']}>{title}</h1>;
}

export default PageTitle;
