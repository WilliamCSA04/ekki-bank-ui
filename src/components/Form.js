import React, { Component } from 'react';
import { Grid, Container, FormControl, Paper } from '@material-ui/core'

const style = {
  backgroundColor: 'white',
  height: "15em",
  'border-radius': '3px',
  backgroundColor: 'white',
}

class Form extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center" style={{height: '100%'}}>
        <Paper elevation2>
          <Container style={style} maxWidth="xs">
            <Grid container justify="center" alignItems="center" style={{height: '100%'}}>
              <FormControl>
                {this.props.children}
              </FormControl>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    );
  }
}

export default Form;