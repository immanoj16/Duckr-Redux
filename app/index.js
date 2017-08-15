import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import users from './redux/modules/users'
import Routes from './config/Routes'
import { checkIfAuthed } from './helpers/auth'
require('./styles.css')

const store = createStore(users, applyMiddleware(thunk))

const checkAuth = (nextState, replace) => {
  const isAuthed = checkIfAuthed(store)
  console.log(isAuthed)
  const nextPathName = nextState.location.pathname
  console.log('nextpath: ', nextPathName)
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/feed')
    }
  } else {
    if (isAuthed !== true) {
      replace('/auth')
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Routes checkAuth={checkAuth()} />
  </Provider>,
  document.getElementById('app')
)
