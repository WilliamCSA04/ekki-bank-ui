import React, { Component } from 'react';
import { List, Typography } from '@material-ui/core';
import ContactListItem from './ContactListItem.js';
import api from '../../../services/api';

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
        alert("Ocorreu um erro ao tentar buscar seus contaos");
      }
    })
  }

  listContacts = () => {
    if(this.state.contacts.length == 0){
      return <Typography style={{textAlign: "center"}}>Nenhum contato encontrado</Typography>
    }else{
      return <ContactListItem />
    }
  }

  render() {
    return (
      <List>
        {this.listContacts()}
      </List>
    );
  }
}

export default ContactList;