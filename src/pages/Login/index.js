import React, { Component, Fragment } from 'react';
import { TextField, Typography } from '@material-ui/core'
import Button from '../../components/Button.js'
import Form from '../../components/Form';
import { Helmet } from "react-helmet";
import api from '../../services/api'

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {
        cpf: "",
      },
      error: {
        cpf: false,
      }
    }
  }

  onChange = e => {
    const { data } = this.state;
    data[e.target.name] = e.target.value
    this.setState({data: data})
  }

  onClick = e => {
    e.preventDefault();
    const { error, data } = this.state;
    const noErrors = !(error.cpf)
    if(noErrors){
      api.post("/user/signin", data).then(resp => {
        sessionStorage.setItem("ekki-user", JSON.stringify(resp.data.user))
        this.props.history.push('/contacts')
      }).catch(err => {
        if(err.response.data.message){
          alert(err.response.data.message)
        }else{
          alert("Ocorreu um erro ao tentar logar, tente novamente");
        }
      })
    }
  }

  validateCpf = e => {
    const { error } = this.state
    error.cpf = e.target.value.length != 11
    this.setState({error: error})
  }

  render() {
    const { error } = this.state
    return (
      <Fragment>
        <Helmet>
          <title>Login - Ekki bank</title>
        </Helmet>
        <Form>
          <Typography component="h1" variant="h5">Login</Typography>
          <TextField label="CPF" name="cpf" error={error.cpf} onBlur={this.validateCpf} onChange={this.onChange}/>
          <Button variant="contained" color="primary" onClick={this.onClick}>Login</Button>
        </Form>
      </Fragment>
    );
  }
}

export default Login;