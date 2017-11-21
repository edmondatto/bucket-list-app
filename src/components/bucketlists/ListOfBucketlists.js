import React, {Component} from 'react';
import BucketList from "./BucketList";
import PropTypes from 'prop-types';
import {fetchBucketlistsFromApi} from "../../actions/bucketlists";


class ListOfBucketlists extends Component {

  componentDidMount() {
    console.log("I am being called!");
    this.props.dispatch(fetchBucketlistsFromApi())
  }

  render(){
    console.log(this.props.buckets);
    return(
      <div className="row">
        { this.props.buckets.buckets.map((bucketlist, index) =>
          <BucketList
            name={bucketlist.name}
            date_created={bucketlist.createdAt}
            date_modified={bucketlist.modifiedAt}
            key={bucketlist.id}
          />)}
      </div>
    )
  }
}


ListOfBucketlists.propTypes = {
  dispatch: PropTypes.func.isRequired,
  buckets: PropTypes.object,
};

export default ListOfBucketlists;