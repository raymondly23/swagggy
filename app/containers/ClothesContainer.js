var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var styles = require('../styles')

var ClothesContainer = React.createClass({
  render: function() {
    return (
      <div className='center'>
        <h1>Clothes</h1>
        <div style={styles.row}>
        <Link to='/Clothes/TopBrands'>
          <h5 style={styles.links}>Top Brands</h5>
        </Link>   
        <Link to='/Clothes/LocalBrands'>
          <h5 style={styles.links}>Local Brands</h5>
        </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = ClothesContainer