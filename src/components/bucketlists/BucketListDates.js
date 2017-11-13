import React from 'react';
import PropTypes from 'prop-types';

const BucketListDates = props =>
  <div>
    <p className="card-dates">
      <span>CREATED:</span> { props.dateCreated }
      <span>UPDATED:</span> { props.dateUpdated }
    </p>
  </div>;

  BucketListDates.propTypes = {
    dateCreated: PropTypes.string.isRequired,
    dateUpdated: PropTypes.string.isRequired,
  };

export default BucketListDates;