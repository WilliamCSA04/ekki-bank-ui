import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { Typography, TextField, InputAdornment } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';

class TransferModal extends Component {

  constructor(props){
    super(props);
    this.state = this.props
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
            <Typography>{nickname}</Typography>
            <TextField
              label="Valor"
              name="amount"
              InputProps={{
                startAdornment: <InputAdornment>R$</InputAdornment>
              }}
            />
            <Button variant="contained" color="primary" size="small">Transferir</Button>
            <Button variant="contained" color="secondary" size="small" onClick={this.openModal}>Fechar</Button>
          </Form>
        </Modal>
    );
  }
}

TransferModal.propTypes = {
  open: PropTypes.bool
}

TransferModal.defaultProps = {
  open: false
}

export default TransferModal;