var React = require('react')
var Slider = require('../Main/Slider')

var Details = React.createClass({
    getInitialState() {
        return {
            seller : {name: 'ray', item: 'jays', size: 9, price: '$1000'}  
        }
    },
  render: function() {
    return (
      <div className='container center'>
        <img src={this.state.seller.avatar} alt=""/>
        <h4>{this.state.seller.name}</h4>
        <p>{this.state.seller.item}</p>
        <p>Size: {this.state.seller.size}</p>
        <p>Asking for {this.state.seller.price}</p>
        <button className="waves-effect waves-light btn modal-trigger" href="#modal1">Message</button>
        <br/>
        <br/>
        <Slider/>
      </div>
    )
  }
})

module.exports = Details