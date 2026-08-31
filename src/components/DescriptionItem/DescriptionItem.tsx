import styles from './DescriptionItem.module.css';
import { DescriptionItemProps } from './DescriptionItem.props';

function DescriptionItem({ descr }: DescriptionItemProps) {
  return <p className={styles['description-item']}>{descr}</p>;
}

export default DescriptionItem;
