import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class MarketPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
       <h1>Market</h1>
        <div>
        <Link to="/Market/Buy">
          <h5>Buy</h5>
        </Link>
        <Link to="/Market/Sell">
          <h5>Sell</h5>
        </Link>
        <Link to="/Market/Trade">
          <h5>Trade</h5>
        </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

MarketPage.propTypes = {
  children: PropTypes.object.isRequired
};

export default MarketPage;