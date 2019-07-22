import React, { Component, Fragment } from 'react';
import { ListItemText, ListItem, Icon, Table, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import Paper from '../../../components/Paper.js';
import Inline from '../../../components/Inline.js';
import TransferModal from './TransferModal.js';
import ContactModal from './ContactModal.js';
import DeleteModal from './DeleteModal.js';

class ContactListItem extends Component {


  constructor(props) {
    super(props);
    this.state = this.props.data
    this.transferModal = React.createRef();
    this.contactModal = React.createRef();
    this.deleteModal = React.createRef();
  }

  openTransferModal = e => {
    this.transferModal.current.setState({open: true});
  }

  openContactModal = e => {
    this.contactModal.current.setState({open: true});
  }

  openDeleteModal = e => {
    this.deleteModal.current.setState({open: true});
  }


  render() {
    const { nickname } = this.state
    return (
      <Fragment>
        <ContactModal
          data={this.state}
          ref={this.contactModal}  
        />
        <TransferModal
          data={this.state}
          ref={this.transferModal}
        />
        <DeleteModal
          data={this.state}
          ref={this.deleteModal}
        />
        <ListItem>
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{border: "none"}}>
                    <ListItemText>Nome: {nickname}</ListItemText>
                    <Inline>
                      <IconButton aria-label="editar" onClick={this.openContactModal}>
                        <Icon>edit</Icon>
                        </IconButton>
                      <IconButton aria-label="deletar" onClick={this.openDeleteModal}>
                        <Icon>delete_outline</Icon>
                      </IconButton>
                    </Inline>
                  </TableCell>
                  <TableCell align="right" style={{border: "none"}}>
                    <IconButton aria-label="Abrir modal de transferencia" onClick={this.openTransferModal}>
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