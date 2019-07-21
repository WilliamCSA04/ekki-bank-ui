import { Button as MaterialButton } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    'margin-top': theme.spacing(1),
    'margin-bottom': theme.spacing(1),
  }
}));


function Button(props){
  const { margin } = useStyles()
  return (
    <MaterialButton 
      variant={props.variant} 
      color={props.color}
      size={props.size}
      onClick={props.onClick} 
      className={margin}>{props.children}
    </MaterialButton>
  );
}

export default Button;