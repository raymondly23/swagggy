import React from 'react';
import { Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import Home from './components/home/HomePage';
import Market from './components/market/MarketPage';
import MarketHomePage from './components/market/MarketHomePage';
import Buy from './components/market/Buy';
import Sell from './components/market/Sell';
import Trade from './components/market/Trade';
import Details from './components/market/Details';

export default (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Market" component={Market}>
          <IndexRoute component={MarketHomePage}/>
          <Route path="Buy" component={Buy}/>
          <Route path="Sell" component={Sell}/>
          <Route path="Trade" component={Trade}/>
          <Route path="Details" component={Details}/>
        </Route>
      </Route>
    </Router>
);
  