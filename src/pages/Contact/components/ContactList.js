import React, { Component, Fragment } from 'react';
import { List, Typography, Grid } from '@material-ui/core';
import ContactListItem from './ContactListItem.js';
import api from '../../../services/api';
import Button from '../../../components/Button.js';
import CreateModal from './CreateModal'

class ContactList extends Component {

  constructor(props){
    super(props);
    this.state = {
      contacts: []
    }
    this.createModal = React.createRef();
  }

  openCreateModal = e => {
    this.createModal.current.setState({open: true});
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

  removeContact = (contactingId, contactedId) => {
    const newList = this.state.contacts.filter(contact => {
      return !(contact.contactingId == contactingId && contact.contactedId == contactedId)
    })
    this.setState({contacts: newList})
  }

  addContact = (contact) => {
    const { contacts } = this.state
    contacts.push(contact)
    this.setState({contacts: contacts});
  }

  listContacts = () => {
    if(this.state.contacts.length == 0){
      return <Typography style={{textAlign: "center"}}>Nenhum contato encontrado</Typography>
    }else{
      return this.state.contacts.map(contact => {
        return <ContactListItem handleDelete={this.removeContact} data={contact} />
      })
    }
  }

  render() {
    return (
      <Fragment>
        <CreateModal
          ref={this.createModal}
          handleCreate={this.addContact}
        />
        <List>
          {this.listContacts()}
        </List>
        <Grid item style={{textAlign: "center"}}>
          <Button variant="contained" color="primary" onClick={this.openCreateModal}>Adicionar Contato</Button>
        </Grid>
      </Fragment>
    );
  }
}

export default ContactList;