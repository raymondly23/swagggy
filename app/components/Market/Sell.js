import React from 'react'
import * as MarketActions from '../../actions/MarketActions'

export default class Sell extends React.Component {

  constructor() {
    super()
  }

  createPost(item) {
    console.log(item.target)
  }

  render() {
    return (
      <div className='container center'>
        <form onSubmit={this.createPost}>
          <input type="text" placeholder='what your selling'/>
          <input type="number" placeholder='price'/>
          <input type="text" placeholder='description'/>
          <input type="text" placeholder='upload pics'/>
          <button type='submit' className='btn'>Post</button>
        </form>
      </div>
    )
  }
}

module.exports = Sell