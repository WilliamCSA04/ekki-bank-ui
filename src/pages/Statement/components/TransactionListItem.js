import React, { Component } from 'react';
import { ListItemText, ListItem, Badge } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import Paper from '../../../components/Paper.js';

class TransactionListItem extends Component {

  constructor(props){
    super(props);
    this.state = this.props.data;
  }

  render() {
    const { name, amount, message, status } = this.state
    const color = status == 1 ? red[500] : green[500]
    return (
      <ListItem>
        <Paper style={{backgroundColor: color}}>
          <ListItemText style={{color: 'white'}}>{name}</ListItemText>
          <ListItemText style={{color: 'white'}}>R$ {amount.replace('.', ',')}</ListItemText>
          <ListItemText style={{color: 'white'}}>{message}</ListItemText>
        </Paper>
      </ListItem>
    );
  }
}

export default TransactionListItem;