import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';

const Search = forwardRef(({ value, onChange, placeholder, icon }, ref) => {
  return (
    <div className={styles['input-block']}>
      {icon && <img className={styles['input-icon']} src={icon} alt="" />}

      <input
        ref={ref}
        className={cn(styles['search-input'], {
          [styles['search-input-with-icon']]: icon,
        })}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
});

export default Search;
