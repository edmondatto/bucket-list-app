import React from 'react';
import PropTypes from 'prop-types';
import BucketListItemsCounter from './BucketListItemsCounter';
import BucketListDates from './BucketListDates';

const BucketList = props =>
  <div>
    <div className="col-md-3 card card-1">
      <h5 className="bucket-list-heading">{ props.name }</h5>

      <BucketListDates dateCreated={ props.date_created } dateUpdated={ props.date_modified }/>

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

BucketList.propTypes = {
  name: PropTypes.string.isRequired,
  date_created: PropTypes.string.isRequired,
  date_modified: PropTypes.string.isRequired,
};

export default BucketList;
