var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var Buy = React.createClass({
  getInitialState: function() {
      return {
          datas: [{date: 'today', seller: 'swagggyray', item: 'yeezy', size: '9', id: 1}, {date: 'yesterday', seller: 'swagggyray', item: "1's" , size: 9, id: 2}]  
      };
  },
  render: function() {
    return (
      <div className='container center'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Seller</th>
              <th>What your selling</th>
              <th>What size</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {this.state.datas.map(function(data) {
                return (
                  <tr key={data.id}>
                  <td>{data.date}</td>
                  <td>{data.seller}</td>
                  <td>{data.item}</td>
                  <td>{data.size}</td>
                  <td><Link to='/Market/Details'><button className='btn'>Details</button></Link></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Buy