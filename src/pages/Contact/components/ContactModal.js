import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';
class ContactModal extends Component {
  constructor(props){
    super(props);
    this.state = this.props
  }

  openModal = e => {
    e.preventDefault();
    const open = !this.state.open
    this.setState({open})
  }

  render() {
    const { data } = this.state
    return (
      <Modal open={this.state.open}>
          <Form>
            <TextField label="Nome" value={data.name}></TextField>
            <Button variant="contained" color="primary" size="small">Editar</Button>
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