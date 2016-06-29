import React from 'react';
import Slider from '../common/Slider';

class Details extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container center">
        <h1>details</h1>
        <Slider/>
      </div>
    )
  }
}

export default Details;