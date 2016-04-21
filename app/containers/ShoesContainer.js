var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var styles = require('../styles')

function ShoesContainer(props) {
  return (
    <div className='center'>
      <h1>Shoes</h1>
      <div style={styles.row}>
      <Link to='/Shoes/LegitCheck'>
        <h5 style={styles.links}>Legit Check</h5>
      </Link>
      <Link to='/Shoes/Value'>
        <h5 style={styles.links}>Shoe Value</h5>
      </Link>
      <Link to='/Shoes/Compare'>
        <h5 style={styles.links}>Compare</h5>
      </Link>      
      <Link to='/Shoes/Calendar'>
        <h5 style={styles.links}>Release Calendar</h5>
      </Link>
      </div>
      {props.children}
    </div>
  )
}

module.exports = ShoesContainer