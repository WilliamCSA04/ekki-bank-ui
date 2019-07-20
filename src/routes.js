import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Register from './pages/Register'

const Router = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Register} />
    </BrowserRouter>
  )
}

export default Router;