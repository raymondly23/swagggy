var React = require('react')
var Slider = require('../Main/Slider')
var styles = require('../../styles')

function ShoeDetail() {
  return (
    <div className='center container'>
      <Slider/>
      <p>What you should look for when checking for authenticity</p>
      <ul>
      <li>tags</li>
      <li>tags</li>
      <li>tags</li>
      <li>tags</li>
      </ul>
      <p>Avg Value</p>
    </div>
  )
}

module.exports = ShoeDetail