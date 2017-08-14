import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { MainContainer, AuthenticateContainer } from '../containers'
import { Navigation } from '../components'

const routes = (
  <Router>
    <div className='container'>
      <div className='innerContainer'>
        <Navigation isAuthed={false}/>
        <switch>
          <Route exact={true} path='/' component={MainContainer} />
          <Route path='/auth' component={AuthenticateContainer} />
        </switch>
      </div>
    </div>
  </Router>
)

export default routes
