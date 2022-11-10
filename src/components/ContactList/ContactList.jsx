import React from 'react';
import styles from '../Input/Input.module.css';

export const ContactList = ({ data, newData }) => {
  return (
    <ul>
         <p className={styles.contactText}>{newData}</p>
      {data.map(({ name, number }) => (
        <li>
          <p className={styles.contactText}>{name}</p>
     <p className={styles.contactText}>{number}</p>
   
        </li>
      ))}
       
    </ul>
  );
};