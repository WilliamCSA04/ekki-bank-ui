import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login';
import Contact from './pages/Contact';

const Router = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
  )
}

export default Router;