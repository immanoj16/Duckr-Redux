import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import users from './redux/modules/users'
import routes from './config/routes'
require('./styles.css')

const store = createStore(users, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
