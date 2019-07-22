import React, { Component } from 'react';
import { ListItemText, ListItem} from '@material-ui/core';
import Paper from '../../../components/Paper.js';

class TransactionListItem extends Component {

  constructor(props){
    super(props);
    this.state = this.props.data;
  }

  render() {
    const { name, amount, message } = this.state
    return (
      <ListItem>
        <Paper>
          <ListItemText>{name}</ListItemText>
          <ListItemText>R$ {amount}</ListItemText>
          <ListItemText>{message}</ListItemText>
        </Paper>
      </ListItem>
    );
  }
}

export default TransactionListItem;