var React = require('react')

function Sell() {
  return (
    <div className='container center'>
      <form>
        <input type="text" placeholder='what your selling'/>
        <input type="number" placeholder='price'/>
        <input type="text" placeholder='description'/>
        <input type="text" placeholder='upload pics'/>
        <button className='btn'>Post</button>
      </form>
    </div>
  )
}

module.exports = Sell