import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login';

const Router = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Register} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  )
}

export default Router;