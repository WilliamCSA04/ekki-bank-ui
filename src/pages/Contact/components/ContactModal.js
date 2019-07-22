import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';
class ContactModal extends Component {
  constructor(props){
    super(props);
    this.state = this.props.data
  }

  openModal = e => {
    e.preventDefault();
    const open = !this.state.open
    this.setState({open})
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { nickname } = this.state
    return (
      <Modal open={this.state.open}>
          <Form>
            <TextField label="Nome" value={nickname} name="nickname" onChange={this.onChange}></TextField>
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