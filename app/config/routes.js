import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import {MainContainer} from '../containers'

const routes = (
  <HashRouter>
    <Route path='/' component={MainContainer}/>
  </HashRouter>
)

export default routes
