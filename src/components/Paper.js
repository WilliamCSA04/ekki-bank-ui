import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper as MaterialPaper} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100%'
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();
  return (
    <MaterialPaper className={classes.root} style={props.style} square={props.square} elevation0>
      {props.children}
    </MaterialPaper>
  );
}