const React = require('react')
const ReactRouter = require('react-router')
const Link = ReactRouter.Link
const ImgModal = require('../components/Main/ImgModal')
const styles = require('../styles')

const ShoesContainer = React.createClass({
  render: function() {
    return (
      <div className='center'>
        <h1>Shoes</h1>
        <div style={styles.row}>
        <Link to='/Shoes/FindShoe'>
          <h5 style={styles.links}>Find Shoe</h5>
        </Link>   
        <Link to='/Shoes/Calendar'>
          <h5 style={styles.links}>Release Calendar</h5>
        </Link>
        </div>
        {this.props.children}
        <ImgModal/>
      </div>
    )
  }
})


module.exports = ShoesContainer