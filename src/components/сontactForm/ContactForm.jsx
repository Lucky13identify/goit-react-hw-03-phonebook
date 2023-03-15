import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Form, Button, Input } from './ContactForm.styled';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  addItem = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.props.testName(this.state);
          }}
        >
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.addItem}
            required
          />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.addItem}
            required
          />
          <Button type="submit">Add contact</Button>
        </Form>
        <Input type="text" name="filter" onChange={this.props.filter}></Input>
      </div>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func,
  addItem: PropTypes.func,
};
