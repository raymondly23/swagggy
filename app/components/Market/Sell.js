import React from 'react'
import * as MarketActions from '../../actions/MarketActions'
const ReactRouter = require('react-router')
const Link = ReactRouter.Link


export default class Sell extends React.Component {

  constructor() {
    super(),
    this.handleItem = this.handleItem.bind(this),
    this.handleSize = this.handleSize.bind(this),
    this.handlePrice = this.handlePrice.bind(this),
    this.handleDesc =  this.handleDesc.bind(this),
    this.handlePic = this.handlePic.bind(this),
    this.createPost = this.createPost.bind(this)
  }
  
  handleItem(event) {
    this.setState({
      seller: 'SwagggyRay',
      item: event.target.value
    })
  }  

  handleSize(event) {
    this.setState({
      size: event.target.value
    })
  }

  handlePrice(event) {
    this.setState({
      price: event.target.value
    })
  }  

  handleDesc(event) {
    this.setState({
      desc: event.target.value
    })
  }  

  handlePic(event) {
    this.setState({
      pic: event.target.value
    })
  }

  createPost() {
    const item = {
      seller: this.state.seller,
      item: this.state.item,
      size: this.state.size,
      price: this.state.price,
      desc: this.state.desc,
      pic: this.state.pic
    }
      MarketActions.createPost(item)
  }

  render() {
    return (
      <div className='container center'>
        <form onSubmit={this.createPost.bind(this)}>
        <div className="row">
          <input type="text" placeholder='what your selling' onChange={this.handleItem} className='col s8'/>
          <input type="text" placeholder='size' onChange={this.handleSize} className='col s4'/>
        </div>
          <input type="number" placeholder='price' onChange={this.handlePrice}/>
          <input type="text" placeholder='description' onChange={this.handleDesc}/>
          <input type="text" placeholder='upload pics' onChange={this.handlePic}/>
          <button type='submit' className='btn' onClick={clear}>Post</button>
        </form>
      </div>
    )
  }
}

