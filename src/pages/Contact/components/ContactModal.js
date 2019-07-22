import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';
import api from '../../../services/api';

class ContactModal extends Component {
  constructor(props){
    super(props);
    this.state = this.props
  }

  onClick = e => {
    e.preventDefault();
    const { nickname, contactedId, contactingId } = this.state.data
    api.put('/contact', { nickname, contactedId, contactingId }).then(({ data }) => {
      this.setState({data: data, open: false});
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
    const { nickname } = this.state.data
    return (
      <Modal open={this.state.open}>
          <Form>
            <TextField label="Nome" value={nickname} name="nickname" onChange={this.onChange}></TextField>
            <Button variant="contained" color="primary" size="small" onClick={this.onClick}>Editar</Button>
            <Button variant="contained" color="secondary" size="small" onClick={this.openModal}>Fechar</Button>
          </Form>
        </Modal>
    );
  }
}

ContactModal.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object.isRequired,
}

ContactModal.defaultProps = {
  open: false,
}

export default ContactModal;