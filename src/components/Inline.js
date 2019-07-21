import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}));

export default function Inline(props) {
  const { root } = useStyles();

  return (
    <div className={root}>
      { props.children }
    </div>
  );
}