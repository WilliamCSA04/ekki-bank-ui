import React, { Component } from 'react';
import Paper from '../../components/Paper.js';
import { Typography, ListItem } from '@material-ui/core';

class ContactListItem extends Component {
  render() {
    return (
      <ListItem>
        <Paper>
          <Typography>Paper</Typography>
        </Paper>
      </ListItem>
    );
  }
}

export default ContactListItem;