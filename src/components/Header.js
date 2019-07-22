import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, ListItem, List, ListItemText } from '@material-ui/core'
import { purple } from '@material-ui/core/colors';
const style = {
  header: {
    backgroundColor: purple[500],
    height: '10em',
  },
  listText: {
    color: "white",
    'text-align': 'center',
  }
}

const io = require('socket.io-client')('http://localhost:3001/');

class Header extends Component {

  constructor(props){
    super(props);
    const user = JSON.parse(sessionStorage.getItem('ekki-user'));
    const account = user.account;
    this.state = { user, account};
  }

  async componentDidMount(){
    this.sub();
  }

  sub = () => {
    const { account } = this.state
    io.on(`account-${account.id}`, data => {
      const { user } = this.state;
      user.account = data;
      sessionStorage.setItem('ekki-user', JSON.stringify(user))
      this.setState({account: data})
    })
  }

  render() {
    const {user, account} = this.state
    const { balance, limit, number } = account;
    const { header, listText } = style;
    return (
      <Typography component='header' style={header}>
        <Grid container justify="center" alignItems="center" style={{height: 'inherit'}}>
          <List style={{'text-align': 'center'}}>
            <ListItem style={listText}>
              <ListItemText>{user.name}</ListItemText>
            </ListItem>
            <ListItem style={listText}>
              <ListItemText primaryTypographyProps={{
                  variant: 'h5'
                }}
              >
                Saldo: R${balance.replace('.',',')} - Limite: R${limit.replace('.',',')}
              </ListItemText>
            </ListItem>
            <ListItem style={listText}>
              <ListItemText>Conta: {number}</ListItemText>            
            </ListItem>
          </List>
        </Grid>
      </Typography>
    );
  }
}

Header.propTypes = {

};

export default Header;