import React from 'react'
import PropTypes from 'prop-types'

FacebookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function FacebookAuthButton ({isFetching, onAuth}) {
  return (
    <button onClick={onAuth} className='button'>
      {isFetching === true
        ? 'Loading'
        : 'Login with facebook'}
    </button>
  )
}
