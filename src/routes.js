import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login';
import Contact from './pages/Contact';
import Statement from './pages/Statement';
import Navbar from './components/Navbar';

const Router = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Switch>
        <Route path="/contacts" exact component={Contact} />
        <Route path="/statement" exact component={Statement} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;