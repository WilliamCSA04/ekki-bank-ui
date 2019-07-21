import React, { Component } from 'react';
import { List } from '@material-ui/core';
import TransactionListItem from './TransactionListItem';

class TransactionList extends Component {
  render() {
    return (
      <List>
        <TransactionListItem />
      </List>
    );
  }
}

export default TransactionList;