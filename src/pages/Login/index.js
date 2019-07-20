import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core'
import Form from '../../components/Form';

class Login extends Component {
  render() {
    return (
      <Form>
        <h1>Login</h1>
        <TextField label="CPF"/>
        <Button variant="contained" color="primary">Login</Button>
      </Form>
    );
  }
}

export default Login;