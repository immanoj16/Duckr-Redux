import React from 'react'
import IndexRoute, { Router } from 'react-router'
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import { MainContainer, HomeContainer } from '../containers'

const routes = (
  <HashRouter>
    <Route path='/' component={MainContainer} />
  </HashRouter>
)

export default routes
