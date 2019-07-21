import React, { Component, Fragment } from 'react';
import { TextField, Typography } from '@material-ui/core'
import Button from '../../components/Button.js'
import Form from '../../components/Form';
import { Helmet } from "react-helmet";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Login - Ekki bank</title>
        </Helmet>
        <Form>
          <Typography component="h1" variant="h5">Login</Typography>
          <TextField label="CPF"/>
          <Button variant="contained" color="primary">Login</Button>
        </Form>
      </Fragment>
    );
  }
}

export default Login;