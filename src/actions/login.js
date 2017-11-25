import * as LoginActionTypes from '../actiontypes/login';
import axios from 'axios';
import {AUTH_TOKEN, LOGIN_URL, USER_EMAIL} from "../utilities/constants";

export const requestLogin = credentials => {
  return{
    type: LoginActionTypes.LOGIN_REQUEST,
    credentials
  }
};

export const receiveLogin = user => {
  return {
    type: LoginActionTypes.LOGIN_SUCCESS,
    isAuthenticated: true,
    isFetching: false,
    idToken: user.auth_token
  }
};

export const userLoginViaApi = (credentials) => {
  let config = {};
  config = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    url: LOGIN_URL,
    data: {email: `${credentials.email}`, password: `${credentials.password}`}
  };

  return dispatch => {
    dispatch(requestLogin(credentials));
    return axios(config)
      .then(response => response.data)
      .then(user => {
        localStorage.setItem(AUTH_TOKEN, user.auth_token);
        localStorage.setItem(USER_EMAIL, credentials.email);
        dispatch(receiveLogin(user));
      })
      .catch(error => {
        console.log('It crashed:', error)
      })
  }

};

