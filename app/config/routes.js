import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import { MainContainer, AuthenticateContainer } from '../containers'
import { Navigation } from '../components'

const history = createHistory()

const routes = (
  <Router>
    <div className='container'>
      <div className='innerContainer'>
      <Navigation isAuthed={false}/>
      <switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/auth' component={AuthenticateContainer} />
      </switch>
    </div>
    </div>
  </Router>
)

export default routes
