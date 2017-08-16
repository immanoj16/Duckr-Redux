import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MainContainer, AuthenticateContainer, FeedContainer } from '../containers'
import { Navigation } from '../components'

const Routes = (props) => {
  return (
    <Router>
      <div className='container'>
        <Navigation isAuthed={props.isAuthed}/>
        <div className='innerContainer'>
          <Switch>
            <Route exact={true} path='/' component={MainContainer} />
            <Route path='/auth' component={AuthenticateContainer} />
            <Route path='/feed' component={FeedContainer} onEnter={props.checkAuth()}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

Routes.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  isAuthed: PropTypes.bool.isRequired
}

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(Routes)
