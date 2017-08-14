import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Authenticate } from '../../components'
import auth from '../../helpers/auth'


class AuthenticateContainer extends React.Component {

  handleAuth () {
    auth().then((user) => {
      console.log('Authed User', user)
    })
  }
  render () {
    return (
      <Authenticate
        isFetching={false}
        error=''
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  console.log("state ",state)
  return {}
}

export default connect(mapStateToProps)(AuthenticateContainer)
