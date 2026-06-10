import styles from './DescriptionItem.module.css';


function DescriptionItem({ descr }) {
  return <p className={styles["description-item"]}>{descr}</p>;
}

export default DescriptionItem;
