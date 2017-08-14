import React, { PropTypes } from 'react'
require('./styles.css')

export default function Home (props) {
  return (
    <div className="homeContainer">
      <p className="title">{'Duckr'}</p>
      <p className="slogan">{'The real time, cloud based, modular, scalable, growth hack, social platform'}</p>
    </div>
  )
}
