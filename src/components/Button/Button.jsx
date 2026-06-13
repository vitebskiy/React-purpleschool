import { forwardRef } from 'react';
import styles from './Button.module.css';


const Button = forwardRef(({ text, onClick, }, ref) => {
  return (
    <button ref={ref} className={styles['button']} onClick={onClick}>
      {text}
    </button>
  );
})

export default Button;
