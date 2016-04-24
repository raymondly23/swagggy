var React = require('react')
var Parallax = require('../components/Main/Parallax')
var Navbar = require('../components/Main/Navbar')
var Footer = require('../components/Main/Footer')
var styles = require('../styles')

var MainContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Parallax/>
          <Navbar/>
          <br/>
          {this.props.children}
          <Footer/>
      </div>
    )
  }
})  


module.exports = MainContainer