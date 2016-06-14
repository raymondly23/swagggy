import React from 'react';

const Slider = () => {
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src="http://cdn.iofferphoto.com/img3/wantad/198/989/7/yeezy-2-black-solar-red.jpg"/>
          <div className="caption center-align">
            <p className="black-text">Whatever I want it to say!</p>
            <h5 className="black-text">I want local brands here!</h5>
          </div>
        </li>        
        <li>
          <img src="http://sneakerbardetroit.com/wp-content/uploads/2015/06/yeezy-boost-350-review-1.png"/>
          <div className="caption center-align">
            <p className="black-text">Whatever I want it to say!</p>
            <h5 className="black-text">I want local brands here!</h5>
          </div>
        </li>
      </ul>
    </div>
  );
};


export default Slider;