var React   = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var styles = require('../../styles')

function Navbar() {
  return (
      <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Swagggy</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/Market'>
          <li>Market</li>
        </Link> 
        <Link to='/Shoes'>
          <li>Shoes</li>
        </Link>
        <Link to='/Clothes'>
          <li>Clothes</li>
        </Link>
        <Link to='/Music'>
          <li>Music</li>
        </Link>
        </ul>
      </div>
    </nav>
  )
}


module.exports = Navbar