import styles from './Button.module.css';


function Button({ text, onClick, ref }) {
  return (
    <button ref={ref} className={styles['button']} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
