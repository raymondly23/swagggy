var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var Trade = React.createClass({
  getInitialState: function() {
      return {
          datas: [{date: '3/26/2016', trader: 'SwagggyRay', item: 'yeezy', id: 1}]  
      };
  },
  render: function() {
    return (
      <div className='container center'>
        <form>
          <input type="text" placeholder='what your trading'/>
          <input type="text" placeholder='description'/>
          <input type="text" placeholder='upload pics'/>
          <button className='btn'>Post</button>
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
          <tbody>
            {this.state.datas.map(function(data) {
              return (
                <tr key={data.id}>
                  <td>{data.date}</td>
                  <td>{data.trader}</td>
                  <td>{data.item}</td>
                  <td><Link to='/Market/Details'><button className='btn'>Details</button></Link></td>
                </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Trade