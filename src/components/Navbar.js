import React, { Component } from 'react';
import { Tabs, Tab } from '@material-ui/core';
class Navbar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Tabs variant="fullWidth">
        <Tab label="Contatos" component="a" href="/contacts" />
        <Tab label="Extrato" component="a" href="/statement" />
      </Tabs>
    );
  }
}

export default Navbar;