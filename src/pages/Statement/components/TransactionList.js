import React, { Component } from 'react';
import { List, Typography } from '@material-ui/core';
import TransactionListItem from './TransactionListItem';
import api from '../../../services/api';

class TransactionList extends Component {

  constructor(props){
    super(props);
    this.state = {
      transferences: []
    }
  }

  componentDidMount(){
    const account = JSON.parse(sessionStorage.getItem('ekki-user')).account;
    api.get(`/account/${account.id}/statement`).then(({ data }) => {
      this.setState({transferences: data.transactionHistory})
    }).catch(err => {
      alert("Ocorreu um erro ao tentar buscar seus contatos");
    })
  }

  listTransaction = () => {
    const { transferences } = this.state;
    if(transferences.length == 0){
      return <Typography style={{textAlign: "center"}}>Nenhuma transação foi realizada até o momento</Typography>
    }else{
      return transferences.map(transference => {
        return <TransactionListItem data={transference} />
      })
    }
  }

  render() {
    return (
      <List>
        {this.listTransaction()}
      </List>
    );
  }
}

export default TransactionList;