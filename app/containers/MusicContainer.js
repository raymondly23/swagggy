var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var styles = require('../styles')

function MusicContainer(props) {
  return (
    <div className='center'>
      <h1>Music</h1>
      {props.children}
    </div>
  )
}

module.exports = MusicContainer