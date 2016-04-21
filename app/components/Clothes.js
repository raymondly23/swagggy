var React = require('react')
var styles = require('../styles')


function Clothes() {
  return (
    <div className='center'>
    <h1>Clothes</h1>
    <a href="#" style={styles.links}>Top Brands</a>
    <a href="#" style={styles.links}>Local Brands</a>
    <p>i want people to be able to like brands</p>
    <p>highest likes of each week will be featured</p>
    </div>
  )
}

module.exports = Clothes