import React, { Component, Fragment } from 'react';
import ContactList from './components/ContactList.js';
import Navbar from '../../components/Navbar.js';
import Button from '../../components/Button.js';
import { Grid } from '@material-ui/core';
import { Helmet } from "react-helmet";
import CreateModal from './components/CreateModal'

class Contact extends Component {

  constructor(props){
    super(props);
    this.createModal = React.createRef();
  }

  openCreateModal = e => {
    this.createModal.current.setState({open: true});
  }


  render() {
    return (
      <Fragment>
        <CreateModal
          ref={this.createModal}
        />
        <Helmet>
          <title>Contatos - Ekki bank</title>
        </Helmet>
        <Navbar />
        <ContactList />
        <Grid item style={{textAlign: "center"}}>
          <Button variant="contained" color="primary" onClick={this.openCreateModal}>Adicionar Contato</Button>
        </Grid>
      </Fragment>
  );
  }
}

export default Contact;