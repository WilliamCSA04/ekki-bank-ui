import React, { Component } from 'react';
import { ListItemText, ListItem, Icon, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import Paper from '../../../components/Paper.js';
import Inline from '../../../components/Inline.js';


class ContactListItem extends Component {
  render() {
    return (
      <ListItem>
        <Paper>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{border: "none"}}>
                  <ListItemText>Nome: Irelia</ListItemText>
                    <Inline>
                      <Icon>edit</Icon>
                      <Icon>delete_outline</Icon>
                  </Inline>
                </TableCell>
                <TableCell align="right" style={{border: "none"}}>
                  <Icon>chevron_right</Icon>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>    
        </Paper>
      </ListItem>
    );
  }
}

export default ContactListItem;