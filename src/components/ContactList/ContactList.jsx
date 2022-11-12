import React from 'react';
import styles from '../ContactList/ContactList.module.css';

export const ContactList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(({ name, number, id }) => (
        <li key={id}>
          <div className={styles.contactWrapper}>
            <p className={styles.contactText}>{name}:</p>
            <p className={styles.contactText}>{number}</p>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Удалить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
