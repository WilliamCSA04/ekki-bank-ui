import React, { Component } from 'react';
import { Typography, ListItem, Paper } from '@material-ui/core';

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