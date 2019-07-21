import { Button as MaterialButton } from '@material-ui/core'
import React, { Component } from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    'margin-top': theme.spacing(1),
    'margin-bottom': theme.spacing(1),
  },
}));


function Button(props){
  const classes = useStyles()
  return (
    <MaterialButton variant={props.variant} color={props.color} className={classes.margin}>{props.children}</MaterialButton>
  );
}

export default Button;