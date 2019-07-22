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

class Header extends Component {



  render() {
    const user = JSON.parse(sessionStorage.getItem('ekki-user'));
    const { balance, limit, number } = user.account;
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
                Saldo: R${balance} - Limite: R${limit}
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