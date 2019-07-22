import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { TextField, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';
import api from '../../../services/api';

class DeleteModal extends Component {
  constructor(props){
    super(props);
    this.state = this.props
  }

  onClick = e => {
    e.preventDefault();
    const { contactedId, contactingId } = this.state.data
    api.delete('/contact', { contactedId, contactingId }).then(({ data }) => {
      alert(data.message)
      this.setState({open: false});
    }).catch(err => {
      alert("Houve um erro ao tentar atualizar este contato")
    })
  }

  openModal = e => {
    e.preventDefault();
    const open = !this.state.open
    this.setState({open})
  }

  render() {
    return (
      <Modal open={this.state.open}>
          <Form>
            <Typography>Deseja realmente deletar esta contato?</Typography>
            <Button variant="contained" color="error" size="small" onClick={this.onClick}>Deletar</Button>
            <Button variant="contained" color="secondary" size="small" onClick={this.openModal}>Fechar</Button>
          </Form>
        </Modal>
    );
  }
}

DeleteModal.propTypes = {
  open: PropTypes.bool,
}

DeleteModal.defaultProps = {
  open: false,
}

export default DeleteModal;