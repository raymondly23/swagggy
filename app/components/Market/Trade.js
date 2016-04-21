var React = require('react')

function Trade() {
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
          <tr>
            <td>3/26/2016</td>
            <td>SwagggyRay</td>
            <td>Yeezy</td>
            <td><button className='btn'>Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

module.exports = Trade