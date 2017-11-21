import * as BucketlistActionTypes from '../actiontypes/bucketlist';
import axios from 'axios';
import * as CONSTANTS from '../utilities/constants';

const initialState = {
  buckets: [],
  isFetching: false,
};

export default function BucketListReducer (state=initialState, action) {
  switch (action) {
    case action.type === BucketlistActionTypes.BUCKETLISTS_FETCH:
      axios.get(`CONSTANTS.BASE_URL$()`)
  }
}