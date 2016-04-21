var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var styles = require('../styles')

function Market() {
  return (
    <div className='center'>
      <h5>Look for shoes recently posted up for sale!</h5>
      <h5>Post shoes you want to sell!</h5>
      <h5>Post shoes for trade!</h5>
      <h5>Get your stars up!</h5>
      <p>the more transactions you do, the more stars you get</p>
    </div>
  )
}

module.exports = Market