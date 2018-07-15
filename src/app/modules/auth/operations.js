import axios from 'axios';
import jwt from 'jsonwebtoken';
import { push } from 'connected-react-router'

import setAuthorizationToken from '../../utils/setAuthorizationToken';
import Actions from './actions';
import { API_ROOT } from '../../utils/apiConfig';

const authenticateAction = Actions.authenticate;
const authenticateSuccessAction = Actions.authenticateSuccess;
const authenticateFailureAction = Actions.authenticateFailure;

const unauthenticateAction = Actions.unauthenticate;

const verifyTokenAction = Actions.verifyToken;
const verifyTokenSuccessAction = Actions.verifyTokenSuccess;
const verifyTokenFailureAction = Actions.verifyTokenFailure;

const registerAction = Actions.register;
const registerSuccessAction = Actions.registerSuccess;
const registerFailureAction = Actions.registerFailure;


const authenticate = (email, password) => {
  return dispatch => {
    dispatch(authenticateAction());
    axios.post(`${API_ROOT}/authenticate`, {
      email,
      password,
    })
    .then(async (response) => {
      let authToken = response.data.auth_token;
      console.log(authToken);
      localStorage.setItem('jwtToken', authToken);
      // Apply token to request headers
      setAuthorizationToken(authToken);
      dispatch(authenticateSuccessAction(jwt.decode(authToken)));
      // Redirect to home view
      dispatch(push('/'));
    })
    .catch((error) => {
      console.log(error.response);
      // dispatch(authenticateFailureAction(error.response.data.error.user_authentication[0]));
    });
  }
};

const register = (name, email, password) => {
  return dispatch => {
    dispatch(registerAction());
    axios.post(`${API_ROOT}/register`, {
      name: name,
      email: email,
      password: password,
    })
    .then(async (response) => {
      let authToken = response.data.auth_token;
      // Apply token to request headers
      setAuthorizationToken(authToken);
      // Decode token 
      // jwt.decode(authToken, { complete: false })
      //   .then(async (payload) => {
      //     console.log(payload);
      //     try {
      //        // Store the access token locally
      //       await AsyncStorage.setItem('jwtToken', authToken);
      //       // Update store with newly created user payload data
      //       dispatch(registerSuccessAction({
      //         userId: payload.user_id, 
      //         name: payload.name, 
      //         email: payload.email,
      //         type: payload.type,
      //       }));
      //     } catch (error) {
      //       // Error saving data
      //       console.log("Something failed")
      //     }
      //   });
    })
    .catch((error) => {
      console.log(error.response.data.data);
      dispatch(registerFailureAction(error.response.data.data));
    });
  }
};

const verifyToken = (payload, token) => {
  const url = payload.type == 'employee' ? `${API_ROOT}/employee/verify_token` : `${API_ROOT}/verify_token`;
  return dispatch => {
    axios.get(url)
    .then(async () => {
      setAuthorizationToken(token);
      dispatch(verifyTokenSuccessAction({
        userId: payload.user_id, 
        name: payload.name, 
        email: payload.email,
        type: payload.type,
        companyId: payload.company_id,
        companyName: payload.company_name
      }));
    })
    .catch((error) => {
      console.log("ERROR");
      console.log(error)
      dispatch(verifyTokenFailureAction());
    });
  }
};

const unauthenticate = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(unauthenticateAction());   
    // Redirect to home view
    dispatch(push('/'));
  }
};

export default { 
  authenticate, 
  register, 
  verifyToken,
  unauthenticate
};