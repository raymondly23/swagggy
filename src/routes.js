const React = require('react')
const ReactRouter = require('react-router')
const { Route, Router, hashHistory, IndexRoute } = ReactRouter
const MainContainer = require('../containers/MainContainer')
const Home = require('../components/Main/Home')
const Market = require('../components/Market/Market')
const MarketContainer = require('../containers/MarketContainer')
import Buy from '../components/Market/Buy'
import Sell from '../components/Market/Sell'
const Trade = require('../components/Market/Trade')
const Details = require('../components/Market/Details')
const ShoesContainer = require('../containers/ShoesContainer')
const Shoes = require('../components/Shoes/Shoes')
const FindShoe = require('../components/Shoes/FindShoe')
const ShoeDetail = require('../components/Shoes/ShoeDetail')
const Calendar = require('../components/Shoes/Calendar')
const ClothesContainer = require('../containers/ClothesContainer')
const Clothes = require('../components/Clothes/Clothes')
const MusicContainer = require('../containers/MusicContainer')
const Music = require('../components/Music/Music')


const routes = (
    <Router history={hashHistory}>
      <Route path='favicon.ico'/>
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