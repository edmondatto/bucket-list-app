import * as BucketlistActionTypes from '../actiontypes/bucketlist';

const initialState = {
  buckets: {
    buckets: []
  },
  isFetching: false,
};

export default function BucketListReducer (state=initialState, action) {
  switch (action.type) {
    case BucketlistActionTypes.BUCKETLISTS_FETCH_SUCCESS:
      return{
        ...state,
        buckets: {
          buckets: action.data.buckets
        }
      };

    default:
      return state
  }
}