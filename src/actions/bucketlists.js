import * as BucketlistActionTypes from '../actiontypes/bucketlist';

export const fetchBucketLists = () => {
  return {
    type: BucketlistActionTypes.BUCKETLISTS_FETCH
  }
};