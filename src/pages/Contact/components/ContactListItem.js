import React, { Component } from 'react';
import { ListItemText, ListItem, Icon } from '@material-ui/core';
import Paper from '../../../components/Paper.js';
import Inline from '../../../components/Inline.js';


class ContactListItem extends Component {
  render() {
    return (
      <ListItem>
        <Paper>
          <ListItemText>Nome: Irelia</ListItemText>
          <Inline>
            <Icon>attach_money</Icon>
            <Icon>edit</Icon>
            <Icon>delete_outline</Icon>
          </Inline>
        </Paper>
      </ListItem>
    );
  }
}

export default ContactListItem;