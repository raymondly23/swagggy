import React from 'react';

class Sell extends React.Component {
  render() {
    return (
      <div className="container center">
        <form>
        <div className="row">
          <input type="text" placeholder="what your selling" className="col s8"/>
          <input type="text" placeholder="size" className="col s4"/>
        </div>
          <input type="number" placeholder="price"/>
          <input type="text" placeholder="description"/>
          <input type="text" placeholder="upload pics"/>
          <button type="submit" className="btn">Post</button>
        </form>
      </div>
    );
  }
}

export default Sell;