import * as BucketlistActionTypes from '../actiontypes/bucketlist';
import * as LoginActionTypes from '../actiontypes/login';
import {AUTH_TOKEN} from "../utilities/constants";

const initialState = {
  buckets: {
    buckets: []
  },
  isFetching: false,
  isAuthenticated: false,
  // isAuthenticated: !!localStorage.getItem(AUTH_TOKEN),
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

    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        idToken: action.idToken
      };

    case LoginActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        credentials: action.credentials
      };

    default:
      return state
  }
}