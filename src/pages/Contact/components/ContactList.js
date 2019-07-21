import React, { Component } from 'react';
import { List } from '@material-ui/core';
import ContactListItem from './ContactListItem.js';

class ContactList extends Component {
  render() {
    return (
      <List>
        <ContactListItem />
      </List>
    );
  }
}

export default ContactList;