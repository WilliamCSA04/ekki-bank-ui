import React, { Component } from 'react';
import { Grid, Box, FormControl } from '@material-ui/core'

class Form extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center" style={{height: '100%'}}>
        <Box>
          <FormControl>
            {this.props.children}
          </FormControl>
        </Box>
      </Grid>
    );
  }
}

export default Form;