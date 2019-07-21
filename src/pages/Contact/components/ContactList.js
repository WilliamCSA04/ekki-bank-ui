import React, { Component } from 'react';
import Paper from '../../components/Paper.js';
import { List } from '/@material-ui/core';
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