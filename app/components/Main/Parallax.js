var React = require('react')
var styles = require('../../styles')

var Parallax = React.createClass({
    componentDidMount() {
      $('.parallax').parallax();
    },
  render: function() {
  return (
        <div className='parallax-container' style={styles.parallax}>
          <div className='parallax'> 
            <img src="http://i.imgur.com/69NzMBw.jpg?1" style={styles.pic}/>
          </div>
        </div>
    )
  }
})

module.exports = Parallax