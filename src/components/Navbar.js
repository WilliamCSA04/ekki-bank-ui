import React, { Component, Fragment } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Header from './Header';
class Navbar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Tabs variant="fullWidth">
          <Tab label="Contatos" component="a" href="/contacts" />
          <Tab label="Extrato" component="a" href="/statement" />
        </Tabs>
      </Fragment>
    );
  }
}

export default Navbar;