var React = require('react')

function Buy() {
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
          <tr>
            <td>3/26/2016</td>
            <td>SwagggyRay</td>
            <td>Yeezy</td>
            <td>9</td>
            <td><button className='btn'>Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

module.exports = Buy