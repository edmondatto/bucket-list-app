import * as BucketlistActionTypes from '../actiontypes/bucketlist';
import axios from 'axios';
import {AUTH_TOKEN} from "../utilities/constants";
import {BUCKETLISTS_URL} from "../utilities/constants";


export const fetchBucketLists = (data) => {
  return {
    type: BucketlistActionTypes.BUCKETLISTS_FETCH_SUCCESS,
    data
  }
};

export const fetchBucketlistsFromApi = () => {
  let config = {};
  const token = localStorage.getItem(AUTH_TOKEN) || null;

  if (token) {
    config = {
      method: 'GET',
      url: BUCKETLISTS_URL,
      headers: {'Authorization': `Bearer ${token}`}
    };
  }
  else {
    throw 'No token found!'
  }

  return dispatch => {
    return axios(config)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        dispatch(fetchBucketLists(data))
      })
      .catch(error => {
        console.log('it errored!', config);
      })
  }
};