var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var MessageModal = require('../components/Main/MessageModal')
var styles = require('../styles')

var MarketContainer = React.createClass({
  render: function() {
    return (
      <div className='center'>
        <h1>Market</h1>
        <div style={styles.row}>
        <Link to='/Market/Buy'>
          <h5 style={styles.links}>Buy</h5>
        </Link>
        <Link to='/Market/Sell'>
          <h5 style={styles.links}>Sell</h5>
        </Link>
        <Link to='/Market/Trade'>
          <h5 style={styles.links}>Trade</h5>
        </Link>
        </div>
        {this.props.children}
        <MessageModal/>
      </div>
    )
  }
})

module.exports = MarketContainer