import React from 'react'
import { Route } from 'react-router-dom'
import { HomeContainer } from '../../containers'
import { Navigation } from '../../components'
require('./styles.css')

class MainContainer extends React.Component {
  render () {
    return (
      <div className="container">
        <Navigation isAuthed={true}/>
        <div className="innerContainer">
          <Route component={HomeContainer} />
        </div>
      </div>
    )
  }
}

export default MainContainer
