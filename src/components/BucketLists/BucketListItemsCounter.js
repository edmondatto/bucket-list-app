import React from 'react';

const BucketListItemsCounter = () =>
  <table className="table items-table table-bordered">
    <tbody>
      <tr>
        <td><span className="glyphicon glyphicon-ok pending-item" style={{ color: '#26a69a', fontSize: 1.2 + 'em' }}> </span></td>
        <td>  Items completed</td>
        <td>13</td>
      </tr>
      <tr>
        <td><span className="glyphicon glyphicon-time"  style={{ color: 'tomato', fontSize: 1.2 + 'em' }}> </span></td>
        <td>  Items Pending</td>
        <td>7</td>
      </tr>
    </tbody>
  </table>;

export default BucketListItemsCounter;