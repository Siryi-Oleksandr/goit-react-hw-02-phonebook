import React, { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';

import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const randomId = nanoid();
    const newContact = {
      id: randomId,
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    this.addContact(name, number);
    this.resetForm();
  };

  handleChangeContact = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contast =>
      contast.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  render() {
    const { contacts, name, filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChangeContact}
            />
          </label>
          <br />
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChangeContact}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <label>
          Find contacts by name
          <input type="text" value={filter} onChange={this.changeFilter} />{' '}
        </label>
        <ContactList contacts={this.filterList()} />

        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
