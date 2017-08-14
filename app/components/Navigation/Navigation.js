import React, { PropTypes } from 'react'

export default function Navigation ({isAuthed}) {
  return (
    <div>
      <nav>
        <NavLinks isAuthed={isAuthed}/>
        <ActionLinks isAuthed={isAuthed}/>
      </nav>
    </div>
  )
}