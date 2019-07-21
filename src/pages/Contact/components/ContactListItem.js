import React, { Component, Fragment } from 'react';
import { ListItemText, ListItem, Icon, Table, TableBody, TableRow, TableCell, Typography, TextField, InputAdornment } from '@material-ui/core';
import Paper from '../../../components/Paper.js';
import Inline from '../../../components/Inline.js';
import Modal from '../../../components/Modal.js';
import Form from '../../../components/Form.js';
import Button from '../../../components/Button.js';

class ContactListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      model: {
        open: true,
      }
    }
  }

  render() {
    const { model } = this.state
    return (
      <Fragment>
        <Modal open={model.open}>
          <Form>
            <Typography>Irelia</Typography>
            <TextField
              label="Valor" 
              InputProps={{
                startAdornment: <InputAdornment>R$</InputAdornment>
              }}
            />
            <Button variant="contained" color="primary" size="small">Transferir</Button>
            <Button variant="contained" color="secondary" size="small">Fechar</Button>
          </Form>
        </Modal>
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
      </Fragment>
    );
  }
}

export default ContactListItem;