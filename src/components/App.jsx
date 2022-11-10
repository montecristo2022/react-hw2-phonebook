import Input from './Input/Input';
import { ContactList } from './ContactList/ContactList';
import styles from '../components/Input/Input.module.css';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [

      { id: 'id-1', name: 'Mukola Trush', number: '777-77-77' },
      { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-5', name: '', number: '' },
    ],
    name: '',
    number: '',
  };

  formSubmitHendler = data => {
    this.setState({ name: data.name, number: data.number });
  };

  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',

          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Input onSubmit={this.formSubmitHendler} />

   
          <ContactList data={this.state.contacts} newData={this.state.name}/>
        </div>
      </div>
    );
  }
}
