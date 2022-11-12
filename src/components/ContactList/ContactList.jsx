import React from 'react';
import styles from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

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



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};