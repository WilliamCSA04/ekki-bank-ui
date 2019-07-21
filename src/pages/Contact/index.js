import React, { Component, Fragment } from 'react';
import ContactList from './components/ContactList.js';
import Navbar from '../../components/Navbar.js';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ContactList />
      </Fragment>
  );
  }
}

export default Contact;