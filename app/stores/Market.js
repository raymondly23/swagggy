import React from "react";
const ReactRouter = require('react-router')
const Link = ReactRouter.Link

export default class Market extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { item, seller, size, id, date } = this.props;
    return (
      <tr key={id}>
      <td>{date}</td>
      <td>{seller}</td>
      <td>{item}</td>
      <td>{size}</td>
      <td><Link to='/Market/Details'><button className='btn'>Details</button></Link></td>
      </tr>
    )
  }
}