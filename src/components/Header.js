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
    const { header, listText } = style;
    return (
      <Typography component='header' style={header}>
        <Grid container justify="center" alignItems="center" style={{height: 'inherit'}}>
          <List style={{'text-align': 'center'}}>
            <ListItem style={listText}>
              <ListItemText>Fiora</ListItemText>
            </ListItem>
            <ListItem style={listText}>
              <ListItemText primaryTypographyProps={{
                  variant: 'h5'
                }}
              >
                Saldo: R$1000,00 - Limite: R$500,00
              </ListItemText>
            </ListItem>
            <ListItem style={listText}>
              <ListItemText>Conta: 1234-5</ListItemText>            
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