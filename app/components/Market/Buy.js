const React = require('react')
const ReactRouter = require('react-router')
const Link = ReactRouter.Link
import MarketStore from "../../stores/MarketStore"
import Market from "../../stores/Market"


export default class Buy extends React.Component {
  constructor() {
    super()
    this.state = {
      datas: MarketStore.getAll()
    }
  }

  componentWillMount() {
    MarketStore.on("change", () => {
      this.setState({
        datas: MarketStore.getAll()
      })
    })
  }

  render() {

    const { datas } = this.state

    const MarketComponents = datas.map((data) => {
      return <Market key={data.id} {...data}/>
    })

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
        <tbody>{MarketComponents}</tbody>
      </table>
      </div>
    )
  }
}

