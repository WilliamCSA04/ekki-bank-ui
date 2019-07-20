import React, { Component } from 'react';
import { Grid, Box, TextField, FormControl, Button } from '@material-ui/core'

class Register extends Component {

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Box>
          <FormControl>
            <h1>Registro</h1>
            <TextField required label="Nome"/>
            <TextField required label="CPF"/>
            <TextField required label="Telefone"/>
            <Button variant="contained" color="primary">Registrar</Button>
          </FormControl>
        </Box>
      </Grid>
    );
  }
}

export default Register;