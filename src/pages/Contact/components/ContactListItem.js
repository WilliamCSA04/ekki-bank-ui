import React, { Component } from 'react';
import { Typography, ListItem } from '@material-ui/core';
import Paper from '../../../components/Paper.js';


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