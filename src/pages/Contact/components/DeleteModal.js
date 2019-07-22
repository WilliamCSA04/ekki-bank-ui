import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { TextField, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';
import api from '../../../services/api';
import { red } from '@material-ui/core/colors';

class DeleteModal extends Component {
  constructor(props){
    super(props);
    this.state = this.props
  }

  onClick = e => {
    e.preventDefault();
    const { contactedId, contactingId } = this.state.data
    api.delete(`/contact/${contactedId}/${contactingId}/delete`).then(({ data }) => {
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
    const { nickname } = this.state.data
    return (
      <Modal open={this.state.open}>
          <Form>
            <Typography style={{textAlign: "center"}}>{nickname} será excluida de sua lista de contatos?</Typography>
            <Button variant="contained" style={{backgroundColor: red[500], color: 'white'}} size="small" onClick={this.onClick}>Deletar</Button>
            <Button variant="contained" color="secondary" size="small" onClick={this.openModal}>Fechar</Button>
          </Form>
        </Modal>
    );
  }
}

DeleteModal.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object.isRequired,
}

DeleteModal.defaultProps = {
  open: false,
}

export default DeleteModal;