import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ text, ...props }, ref) => {
  return (
    <button ref={ref} className={styles['button']} {...props}>
      {text}
    </button>
  );
});

export default Button;
