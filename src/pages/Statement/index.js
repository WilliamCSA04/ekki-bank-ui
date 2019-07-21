import React, { Component, Fragment } from 'react';
import TransactionList from './components/TransactionList';
import Navbar from '../../components/Navbar';
import { Helmet } from "react-helmet";

class Statement extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Extrato - Ekki bank</title>
        </Helmet>
        <Navbar />
        <TransactionList />
      </Fragment>
    );
  }
}

export default Statement;