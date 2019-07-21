import React, { Component } from 'react';
import { TextField, Typography } from '@material-ui/core'
import Button from '../../components/Button.js'
import Form from '../../components/Form';

class Login extends Component {
  render() {
    return (
      <Form>
        <Typography component="h1" variant="h5">Login</Typography>
        <TextField label="CPF"/>
        <Button variant="contained" color="primary">Login</Button>
      </Form>
    );
  }
}

export default Login;