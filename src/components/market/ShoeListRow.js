import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const ShoeListRow = ({shoe}) => {
  return (
    <tr>
      <td>{shoe.date}</td>
      <td>{shoe.seller}</td>
      <td>{shoe.shoe}</td>
      <td>{shoe.size}</td>
      <td>{shoe.condition}/10</td>
      <td><Link to="/Market/Details"><button className="btn btn-info">Details</button></Link></td>
    </tr>
  );
};

ShoeListRow.propTypes = {
  shoe: PropTypes.object.isRequired
};

export default ShoeListRow;
