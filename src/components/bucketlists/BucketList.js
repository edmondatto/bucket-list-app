import React from 'react';
import BucketListItemsCounter from './BucketListItemsCounter';
import BucketListName from './BucketListName';
import BucketListDates from './BucketListDates';

const BucketList = props =>
  <div>
    <div className="col-md-3 card card-1">
      <BucketListName />

      <BucketListDates />

      <BucketListItemsCounter />

      <div className="row">
        <div className="col-md-1"/>
        <div className="row bucket-buttons-container" style={{ marginLeft: 2 + 'px' }}>
          <div className="col-md-3"/>
          <div className="col-md-3">
            <button className="btn edit-button">Edit</button>
          </div>
          <div className="col-md-3">
            <button className="btn delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default BucketList;
