import React, { Component, Fragment } from 'react';
import { TextField, Typography } from '@material-ui/core'
import Button from '../../components/Button.js'
import Form from '../../components/Form';
import { Helmet } from "react-helmet";
import api from '../../services/api'

class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {
        name: "",
        cpf: "",
        phone: ""
      },
      error: {
        name: false,
        cpf: false,
        phone: false,
      }
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onClick = e => {
    e.preventDefault();
    api.post("/user", this.state).then(resp => {
      sessionStorage.setItem("ekki-user", JSON.stringify(resp.data))
      this.props.history.push('/login')
    }).catch(err => {
      console.log(err)
    })
  }

  validateName = e => {
    const { error } = this.state
    error.name = e.target.value.length == 0;
    this.setState({error: error})
  }

  validateCpf = e => {
    const { error } = this.state
    error.cpf = e.target.value.length != 11
    this.setState({error: error})
  }

  validatePhone = e => {
    const { error } = this.state
    const phoneLength = e.target.value.length
    error.phone = !(phoneLength >= 8 && phoneLength <= 13)
    this.setState({error: error})
  }

  render() {
    const { error } = this.state
    return (
      <Fragment>
        <Helmet>
            <title>Registro - Ekki bank</title>
        </Helmet>
        <Form>
          <Typography component="h1" variant="h5">Registro</Typography>
          <TextField required label="Nome" name="name" error={error.name} onBlur={this.validateName} onChange={this.onChange}/>
          <TextField required label="CPF" name="cpf" error={error.cpf} onBlur={this.validateCpf} onChange={this.onChange}/>
          <TextField required label="Telefone" name="phone" error={error.phone} onBlur={this.validatePhone} onChange={this.onChange}/>
          <Button variant="contained" color="primary" onClick={this.onClick}>Registrar</Button>
        </Form>
      </Fragment>
    );
  }
}

export default Register;