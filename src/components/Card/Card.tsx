import { JSX } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

export const Card = ({ title, children, ...props }: CardProps): JSX.Element => {
  return (
    <div className={styles['card']} {...props}>
      <h2 className={styles['card__title']}>{title}</h2>
      {children}
    </div>
  );
};
