import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './contactList/ContactList';
import { ContactForm } from './сontactForm/ContactForm';
// test
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(itemId => itemId.id !== id),
    }));
  };

  testName = data => {
    for (const item of this.state.contacts) {
      if (item.name === data.name) {
        console.log('YES');
        return;
      }
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: data.name,
          number: data.number,
        },
      ],
    }));
  };

  render() {
    // const storage = JSON.parse(localStorage.getItem('contacts'));

    const filterArr = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });

    return (
      <div className="main-div">
        <h1>Phonebook</h1>
        <ContactForm filter={this.changeFilter} testName={this.testName} />
        <h2>Contacts</h2>
        <ul>
          <ContactList arr={filterArr} deleteF={this.onDelete} />
        </ul>
      </div>
    );
  }
}
