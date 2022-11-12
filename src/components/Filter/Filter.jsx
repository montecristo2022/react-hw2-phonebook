import React from 'react';
import styles from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.labelText}>
      Поиск по имени{' '}
      <input
        className={styles.inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
