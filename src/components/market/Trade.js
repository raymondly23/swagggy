import React from 'react';
import {Link} from 'react-router';

class Trade extends React.Component{
  render() {
    return (
      <div className="container center">
        <form>
          <input type="text" placeholder="what your trading"/>
          <input type="text" placeholder="description"/>
          <input type="text" placeholder="upload pics"/>
          <button className="btn">Post</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Trader</th>
              <th>What your Trading</th>
              <th>Details</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Trade;