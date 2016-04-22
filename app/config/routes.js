var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute
var MainContainer = require('../containers/MainContainer')
var Home = require('../components/Main/Home')
var Market = require('../components/Market/Market')
var MarketContainer = require('../containers/MarketContainer')
var Buy = require('../components/Market/Buy')
var Sell = require('../components/Market/Sell')
var Trade = require('../components/Market/Trade')
var ShoesContainer = require('../containers/ShoesContainer')
var Shoes = require('../components/Shoes/Shoes')
var LegitCheck = require('../components/Shoes/LegitCheck')
var Value = require('../components/Shoes/Value')
var Compare = require('../components/Shoes/Compare')
var Calendar = require('../components/Shoes/Calendar')
var Clothes = require('../components/Clothes')
var Music = require('../components/Music')


var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={Home}/>
        <Route path='Market' component={MarketContainer}>
          <IndexRoute component={Market}/>
          <Route path='Buy' component={Buy}/>
          <Route path='Sell' component={Sell}/>
          <Route path='Trade' component={Trade}/>
        </Route>
        <Route path='Shoes' component={ShoesContainer}>
          <IndexRoute component={Shoes}/>
          <Route path='LegitCheck' component={LegitCheck}/>
          <Route path='Value' component={Value}/>
          <Route path='Compare' component={Compare}/>
          <Route path='Calendar' component={Calendar}/>
        </Route>
        <Route path='Clothes' component={Clothes}/>
        <Route path='Music' component={Music}/>
      </Route>
    </Router>
  )
  

module.exports = routes