var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var styles = require('../styles')

var MusicContainer = React.createClass({
  render: function() {
    return (
      <div className='center'>
        <h1>Music</h1>
        {this.props.children}
      </div>
    )
  }
})


module.exports = MusicContainer