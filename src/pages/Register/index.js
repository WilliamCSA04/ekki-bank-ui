import React, { Component } from 'react';
import { TextField, Typography } from '@material-ui/core'
import Button from '../../components/Button.js'
import Form from '../../components/Form';

class Register extends Component {

  render() {
    return (
      <Form>
        <Typography component="h1" variant="h5">Login</Typography>
        <TextField required label="Nome"/>
        <TextField required label="CPF"/>
        <TextField required label="Telefone"/>
        <Button variant="contained" color="primary">Registrar</Button>
      </Form>
    );
  }
}

export default Register;