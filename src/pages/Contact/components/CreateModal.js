import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';
import api from '../../../services/api';

class CreateModal extends Component {
  constructor(props){
    super(props);
    this.state = this.props
  }

  onClick = e => {
    e.preventDefault();
    const { nickname, cpf } = this.state.data
    api.post('/contact', { nickname, cpf }).then(({ data }) => {
      alert(data.message)
      this.setState({data: data.contact, open: false});
    }).catch(err => {
      alert("Houve um erro ao tentar atualizar este contato")
    })
  }

  openModal = e => {
    e.preventDefault();
    const open = !this.state.open
    this.setState({open})
  }

  onChange = e => {
    const { data } = this.state
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  render() {
    const { nickname, cpf } = this.state.data
    return (
      <Modal open={this.state.open}>
          <Form>
            <TextField required label="CPF" value={cpf} name="cpf" onChange={this.onChange}></TextField>
            <TextField label="Nome" value={nickname} name="nickname" onChange={this.onChange}></TextField>
            <Button variant="contained" color="primary" size="small" onClick={this.onClick}>Adicionar</Button>
            <Button variant="contained" color="secondary" size="small" onClick={this.openModal}>Fechar</Button>
          </Form>
        </Modal>
    );
  }
}

CreateModal.propTypes = {
  open: PropTypes.bool,
}

CreateModal.defaultProps = {
  open: false,
  data: {
    nickname: "",
    cpf: "",
  }
}

export default CreateModal;