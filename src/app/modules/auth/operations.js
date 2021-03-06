import axios from 'axios';
import jwt from 'jsonwebtoken';
import {
  push
} from 'connected-react-router'

import setAuthorizationToken from '../../utils/setAuthorizationToken';
import Actions from './actions';
import {
  API_ROOT
} from '../../utils/apiConfig';

// Dispatch actions to hide/show modal on auth failure/success
import {
  modalActions
} from '../../modules/modal';


const authenticateAction = Actions.authenticate;
const authenticateSuccessAction = Actions.authenticateSuccess;
const authenticateFailureAction = Actions.authenticateFailure;

const unauthenticateAction = Actions.unauthenticate;

// const verifyTokenAction = Actions.verifyToken;
const verifyTokenSuccessAction = Actions.verifyTokenSuccess;
const verifyTokenFailureAction = Actions.verifyTokenFailure;

const registerAction = Actions.register;
const registerSuccessAction = Actions.registerSuccess;
const registerFailureAction = Actions.registerFailure;


const authenticate = (email, username, password, businessSignIn) => {
  let baseUrl = businessSignIn ? `${API_ROOT}/auth/authenticate/business` : `${API_ROOT}/auth/authenticate`;
  let params = businessSignIn ? {username, password} : {email, password}
  return dispatch => {
    dispatch(authenticateAction());
    axios.post(baseUrl, params)
      .then(async (response) => {
        let authToken = response.data.auth_token;
        console.log(authToken);
        localStorage.setItem('jwtToken', authToken);
        // Apply token to request headers
        setAuthorizationToken(authToken);
        // Add token payload to the store
        dispatch(authenticateSuccessAction(jwt.decode(authToken)));
        dispatch(modalActions.closeAuthModal());
      })
      .catch((error) => {
        console.log(error.response.data.error.user_authentication[0]);
        dispatch(authenticateFailureAction("Invalid email or password"));
      });
  }
};

const register = (name, email, password) => {
  return dispatch => {
    dispatch(registerAction());
    axios.post(`${API_ROOT}/auth/register`, {
        name: name,
        email: email,
        password: password,
      })
      .then(async (response) => {
        let authToken = response.data.auth_token;
        console.log(authToken);
        localStorage.setItem('jwtToken', authToken);
        // Apply token to request headers
        setAuthorizationToken(authToken);
        // Add token payload to the store
        dispatch(registerSuccessAction(jwt.decode(authToken)));
        dispatch(modalActions.closeAuthModal());
      })
      .catch((error) => {
        console.log(error.response.data.data);
        dispatch(registerFailureAction(error.response.data.data));
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


export default {
  authenticate,
  register,
  unauthenticate,
  verifyToken,
};