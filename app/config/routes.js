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
var Details = require('../components/Market/Details')
var ShoesContainer = require('../containers/ShoesContainer')
var Shoes = require('../components/Shoes/Shoes')
var FindShoe = require('../components/Shoes/FindShoe')
var ShoeDetail = require('../components/Shoes/ShoeDetail')
var Calendar = require('../components/Shoes/Calendar')
var ClothesContainer = require('../containers/ClothesContainer')
var Clothes = require('../components/Clothes/Clothes')
var MusicContainer = require('../containers/MusicContainer')
var Music = require('../components/Music/Music')


var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={Home}/>
        <Route path='Market' component={MarketContainer}>
          <IndexRoute component={Market}/>
          <Route path='Buy' component={Buy}/>
          <Route path='Sell' component={Sell}/>
          <Route path='Trade' component={Trade}/>
          <Route path='Details' component={Details}/>
        </Route>
        <Route path='Shoes' component={ShoesContainer}>
          <IndexRoute component={Shoes}/>
          <Route path='FindShoe' component={FindShoe}/>
          <Route path='Calendar' component={Calendar}/>
          <Route path='ShoeDetail' component={ShoeDetail}/>
        </Route>
        <Route path='Clothes' component={ClothesContainer}>
          <IndexRoute component={Clothes}/>
        </Route>
        <Route path='Music' component={MusicContainer}>
          <IndexRoute component={Music}/>
        </Route>
      </Route>
    </Router>
  )
  

module.exports = routes