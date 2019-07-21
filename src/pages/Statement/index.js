import React, { Component, Fragment } from 'react';
import TransactionList from './components/TransactionList';
import Navbar from '../../components/Navbar';

class Statement extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <TransactionList />
      </Fragment>
    );
  }
}

export default Statement;