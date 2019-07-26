import React, { Component } from 'react';
import Modal from '../../../components/Modal.js';
import { Typography, TextField, InputAdornment } from '@material-ui/core'
import PropTypes from 'prop-types';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';
import api from '../../../services/api';

class TransferModal extends Component {

  constructor(props){
    super(props);
    this.state = this.props
  }
  
  onClick = e => {
    e.preventDefault();
    const { error, data, amount } = this.state;
    let value = parseFloat(amount.replace(',', '.'));
    const noError = !error || value > 0
    if(noError){
      const { account } = JSON.parse(sessionStorage.getItem('ekki-user'))
      const body = { 
        accountId: account.id, 
        targetUserId: data.contactedId, 
        amount: value 
      }
      api.post('/account/transference', body).then(({data}) => {
        alert(data.message);
        this.setState({open: false, amount: "0,00"})        
      }).catch(err => {
        alert(err.response.data.message)
      }).catch(err => {
        alert("Ocorreu um erro ao processar seu pagamento");
      })
    }else{
      alert("Verifique o valor inserido");
    }
  }

  openModal = e => {
    e.preventDefault();
    const open = !this.state.open
    this.setState({open})
  }
  
  onChange = e => {
    const value = e.target.value
    if(value){
      this.setState({amount: value})
    }else{}
  }

  validateAmount = e => {
    const error = !(e.target.value.match(/^[0-9]+(\?,|.[0-9]{1,2})?$/))
    this.setState({error: error})
  }

  render() {
    const { nickname } = this.state.data
    const { error } = this.state
    return (
      <Modal open={this.state.open}>
          <Form>
            <Typography style={{textAlign: 'center'}}>Quanto deseja transferir para {nickname}</Typography>
            <TextField
              label="Valor"
              name="amount"
              onBlur={this.validateAmount}
              onChange={this.onChange}
              value={this.state.amount}
              error={error}
              InputProps={{
                startAdornment: <InputAdornment>R$</InputAdornment>
              }}
            />
            <Button variant="contained" color="primary" size="small" onClick={this.onClick}>Transferir</Button>
            <Button variant="contained" color="secondary" size="small" onClick={this.openModal}>Fechar</Button>
          </Form>
        </Modal>
    );
  }
}

TransferModal.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object.isRequired
}

TransferModal.defaultProps = {
  open: false,
  error: false,
  amount: "0,00"
}

export default TransferModal;