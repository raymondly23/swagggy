var React = require('react')
var styles = require('../../styles')

function Parallax() {
  return (
        <div className='parallax-container' style={styles.parallax}>
          <div className='parallax'> 
            <img src="http://i.imgur.com/69NzMBw.jpg?1" style={styles.pic}/>
          </div>
        </div>
    )
}

module.exports = Parallax