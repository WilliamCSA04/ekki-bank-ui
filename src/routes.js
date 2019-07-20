import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import App from './App'

const Router = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={App} />
    </BrowserRouter>
  )
}

export default Router;