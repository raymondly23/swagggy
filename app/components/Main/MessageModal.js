const React = require('react')

const MessageModal = React.createClass({
  componentDidMount: function() {
    $('.modal-trigger').leanModal();
  },
  render: function() {
    return (
      <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Message</h4>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
            <label for="textarea1">Your Message</label>
          </div>
        </div>
      </form>    
    </div>
    <div className="modal-footer">
      <a href="" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
    )
  }
})

module.exports = MessageModal