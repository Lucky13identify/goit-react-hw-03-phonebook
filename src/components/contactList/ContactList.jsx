import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';
import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    return this.props.arr.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <Button onClick={() => this.props.deleteF(id)}>Delete</Button>
      </li>
    ));
  }
}

ContactList.propTypes = {
  submit: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteF: PropTypes.func,
};
