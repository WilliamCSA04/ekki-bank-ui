import React, { Component } from 'react';
import { ListItemText, ListItem} from '@material-ui/core';
import Paper from '../../../components/Paper.js';

class TransactionListItem extends Component {
  render() {
    return (
      <ListItem>
        <Paper>
          <ListItemText>Riven</ListItemText>
          <ListItemText>R$ 100,00</ListItemText>
          <ListItemText>Recebida</ListItemText>
        </Paper>
      </ListItem>
    );
  }
}

export default TransactionListItem;