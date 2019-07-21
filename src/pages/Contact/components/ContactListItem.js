import React, { Component, Fragment } from 'react';
import { ListItemText, ListItem, Icon, Table, TableBody, TableRow, TableCell, Typography, IconButton, TextField, InputAdornment } from '@material-ui/core';
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

  onClickModal = e => {
    e.preventDefault();
    const { model } = this.state
    model.open = !model.open
    this.setState({model})
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
            <Button variant="contained" color="secondary" size="small" onClick={this.onClickModal}>Fechar</Button>
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
                      <IconButton aria-label="editar">
                        <Icon>edit</Icon>
                        </IconButton>
                      <IconButton aria-label="deletar">
                        <Icon>delete_outline</Icon>
                      </IconButton>
                    </Inline>
                  </TableCell>
                  <TableCell align="right" style={{border: "none"}}>
                    <IconButton aria-label="Abrir modal de transferencia" onClick={this.onClickModal}>
                      <Icon>chevron_right</Icon>
                    </IconButton>
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