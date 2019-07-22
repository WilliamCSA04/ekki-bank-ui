import React, { Component, Fragment } from 'react';
import { List, Typography, Grid } from '@material-ui/core';
import ContactListItem from './ContactListItem.js';
import api from '../../../services/api';
import Button from '../../../components/Button.js';

class ContactList extends Component {

  constructor(props){
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentDidMount(){
    const user = JSON.parse(sessionStorage.getItem('ekki-user'));
    api.get(`/user/${user.id}/contacts`).then(({ data }) => {
      this.setState({contacts: data})
    }).catch(err => {
      if(err.response.data.message){
        alert(err.response.data.message)
      }else{
        alert("Ocorreu um erro ao tentar buscar seus contatos");
      }
    })
  }

  listContacts = () => {
    if(this.state.contacts.length == 0){
      return <Typography style={{textAlign: "center"}}>Nenhum contato encontrado</Typography>
    }else{
      return this.state.contacts.map(contact => {
        return <ContactListItem data={contact} />
      })
    }
  }

  render() {
    return (
      <Fragment>
        <List>
          {this.listContacts()}
        </List>
        <Grid item style={{textAlign: "center"}}>
          <Button variant="contained" color="primary">Adicionar Contato</Button>
        </Grid>
      </Fragment>
    );
  }
}

export default ContactList;