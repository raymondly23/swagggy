import React, {PropTypes} from 'react';
import ShoeListRow from './ShoeListRow';

const ShoeList = ({shoes}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Seller</th>
          <th>Selling</th>
          <th>Size</th>
          <th>Condition</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {shoes.map(shoe => 
          <ShoeListRow key={shoe.id} shoe={shoe}/>
        )}
      </tbody>
    </table>
  );
};

ShoeList.propTypes = {
  shoes: PropTypes.array
};

export default ShoeList;