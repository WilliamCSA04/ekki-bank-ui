import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './routes';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple, red, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: blue[500] }, // This is just green.A700 as hex.
    error: { main: red[500] }
  },
});

ReactDOM.render(<ThemeProvider theme={theme}><Router /></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
