var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var styles = require('../../styles')

function FindShoe() {
  return (
    <div className='center container'>
      <input type="text" placeholder='Search for Kicks'/>
      <Link to='/Shoes/ShoeDetail'>
        <button className='btn'>Find</button>
      </Link>
    </div>
  )
}

module.exports = FindShoe