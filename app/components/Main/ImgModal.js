const React = require('react')

const ImgModal = React.createClass({
  getInitialState() {
      return {
        img :"http://cdn.iofferphoto.com/img3/wantad/198/989/7/yeezy-2-black-solar-red.jpg"
      }
  },
  componentDidMount() {
    $('.modal-trigger').leanModal();
  },
  render: function() {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content">
          <img src={this.state.img} alt=""/>
        </div>
    </div>
    )
  }
})

module.exports = ImgModal