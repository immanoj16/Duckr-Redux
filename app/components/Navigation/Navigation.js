import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
require('./styles.css')

const NavLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul>
      <li><Link className='link' to='/'>{'Home'}</Link></li>
    </ul>
    : null
}

const ActionLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul>
      <li>{'NEW DUCK'}</li>
      <li><Link className='link' to='/logout'>{'Logout'}</Link></li>
    </ul>
    : <ul>
      <li><Link className='link' to='/'>{'Home'}</Link></li>
      <li><Link className='link' to='/auth'>{'Authenticate'}</Link></li>
    </ul>
}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default function Navigation ({isAuthed}) {
  return (
    <div className='navContainer'>
      <nav className='nav'>
        <NavLinks isAuthed={isAuthed}/>
        <ActionLinks isAuthed={isAuthed}/>
      </nav>
    </div>
  )
}
