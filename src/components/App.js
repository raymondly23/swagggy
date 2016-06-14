import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Parallax from './common/Parallax';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props, context) {
    super(props, context); 
    this.state = {

    };
      
  }
  
  componentDidMount() {
    $('.parallax').parallax();
    $('.slider').slider({full_width: true});
  }

  render() {
    return (
      <div className="container">
        <Parallax/>
        <Navbar/>
        <br/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    
  };
}

export default connect(mapStateToProps)(App);