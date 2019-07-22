import React, { Component, Fragment } from 'react';
import { TextField, Typography } from '@material-ui/core'
import Button from '../../components/Button.js'
import Form from '../../components/Form';
import { Helmet } from "react-helmet";
import { api } from '../../services/api'

class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      cpf: "",
      phone: ""
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onClick = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Registro - Ekki bank</title>
        </Helmet>
        <Form>
          <Typography component="h1" variant="h5">Registro</Typography>
          <TextField required label="Nome" name="name" onChange={this.onChange}/>
          <TextField required label="CPF" name="cpf" onChange={this.onChange}/>
          <TextField required label="Telefone" name="phone" onChange={this.onChange}/>
          <Button variant="contained" color="primary" onClick={this.onClick}>Registrar</Button>
        </Form>
      </Fragment>
    );
  }
}

export default Register;