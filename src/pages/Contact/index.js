import React, { Component, Fragment } from 'react';
import ContactList from './components/ContactList.js';
import Navbar from '../../components/Navbar.js';
import { Helmet } from "react-helmet";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Contatos - Ekki bank</title>
        </Helmet>
        <Navbar />
        <ContactList />
      </Fragment>
  );
  }
}

export default Contact;