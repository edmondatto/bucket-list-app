import * as BucketlistActionTypes from '../actiontypes/bucketlist';
import axios from 'axios';
import * as CONSTANTS from "../utilities/constants";


export const fetchBucketLists = (data) => {
  return {
    type: BucketlistActionTypes.BUCKETLISTS_FETCH_SUCCESS,
    data
  }
};

export const fetchBucketlistsFromApi = () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const config = {
    method: 'get',
    url: proxyurl + CONSTANTS.BUCKETLISTS_URL,
    headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTEzNTkzOTYsImlhdCI6MTUxMTI3Mjk3Niwic3ViIjozfQ.PKEnix_Ek79b0q1Q4Yiy-BO4jzMyW5EOCutJnQ9vp2w'}
  };
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