import React from 'react';
import BucketList from "./BucketLists/BucketList";
import PropTypes from 'prop-types';

const ListOfBucketlists = (props) =>
  <div className="row">
    { props.data.map((bucketlist, index) =>
      <BucketList
        name={bucketlist.name}
        date_created={bucketlist.date_created}
        date_modified={bucketlist.date_modified}
        key={bucketlist.id}
      />)}
  </div>;

ListOfBucketlists.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListOfBucketlists;