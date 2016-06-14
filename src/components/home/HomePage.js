import React from 'react';
import Slider from '../common/Slider';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container center">
        <Slider/>
        <p>An app that helps finds the value of shoes,</p>
        <p>where you can buy/sell shoes,</p>
        <p>where you can check for authenticity,</p>
        <p>where local brands can be promoted,</p>
        <p>where the hottest music</p>
        <h4>-Swagggy</h4>
      </div>
    );
  }
}

export default HomePage;