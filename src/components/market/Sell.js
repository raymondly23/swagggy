import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as marketActions from '../../actions/marketActions';
import ShoeForm from './ShoeForm';

class Sell extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shoe: Object.assign({}, props.shoe),
      errors: {},
      saving: false
    };
    this.updateShoeState = this.updateShoeState.bind(this);
    this.saveShoe = this.saveShoe.bind(this);
  }

  updateShoeState(event) {
    let shoe = this.state.shoe;
    const field = event.target.name;
    shoe[field] = event.target.value;
    return this.setState({shoe: shoe});
  }

  saveShoe(event) {
    event.preventDefault();
    this.props.actions.saveShoe(this.state.shoe)
      .then(() => this.redirect())
      .catch(error => {
      });
  }

  redirect() {
    this.context.router.push('/Market/Buy');
  }

  render() {
    return (
      <div className="container center">
      <h1>sell</h1>
        <ShoeForm
          shoe={this.state.shoe}
          onChange={this.updateShoeState}
          onSave={this.saveShoe}/>
      </div>
    );
  }
}

Sell.propTypes = {
  actions: PropTypes.object.isRequired,
  shoe: PropTypes.object.isRequired
};

Sell.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let shoe = {item: '', size: ''};
  return {
    shoe : shoe
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(marketActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);