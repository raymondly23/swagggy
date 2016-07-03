import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as marketActions from '../../actions/marketActions';
import ShoeList from './ShoeList';

class Buy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   const {shoes} = this.props;
    return (
      <div className="container">
        <ShoeList shoes={shoes}/>
        {console.log('shoes', shoes)}
      </div>
    );
  }
}

Buy.propTypes = {
  shoes : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    shoes : state.shoes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(marketActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
