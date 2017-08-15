import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MainContainer, AuthenticateContainer, FeedContainer } from '../containers'
import { Navigation } from '../components'

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <div className='innerContainer'>
            <Navigation isAuthed={this.props.isAuthed}/>
            <Switch>
              <Route exact={true} path='/' component={MainContainer} />
              <Route path='/auth' component={AuthenticateContainer} />
              <Route path='/feed' component={FeedContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

Route.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(Routes)
