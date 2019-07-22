import React, { Component, Fragment } from 'react';
import ContactList from './components/ContactList.js';
import Navbar from '../../components/Navbar.js';
import Button from '../../components/Button.js';
import { Helmet } from "react-helmet";
import { Grid } from '@material-ui/core';

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