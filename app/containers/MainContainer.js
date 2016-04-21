var React = require('react')
var Parallax = require('../components/Main/Parallax')
var Navbar = require('../components/Main/Navbar')
var styles = require('../styles')

var MainContainer = React.createClass({
  componentDidMount() {
    $('.parallax').parallax();
  },
  render: function() {
    return (
      <div>
        <Parallax/>
          <Navbar/>
          <br/>
          {this.props.children}
      </div>
    )
  }
})  


module.exports = MainContainer