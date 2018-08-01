import types from './types.js';

const authenticate = () => ({
    type: types.AUTHENTICATE
});

const authenticateSuccess = (json) => ({
    type: types.AUTHENTICATE_SUCCESS,
    account: json
});

const authenticateFailure = (json) => ({
    type: types.AUTHENTICATE_FAILURE,
    signInError: json
});

const unauthenticate = () => ({
    type: types.UNAUTHENTICATE,
});


const verifyTokenSuccess = (account) => ({
    type: types.VERIFY_TOKEN_SUCCESS,
    account: account
});

const verifyTokenFailure = (json) => ({
    type: types.VERIFY_TOKEN_FAILURE,
    signInError: json
});

const register = () => ({
    type: types.REGISTER
});

const registerSuccess = (json) => ({
    type: types.REGISTER_SUCCESS,
    account: json
});

const registerFailure = (json) => ({
    type: types.REGISTER_FAILURE,
    registerErrors: json
});

export default { 
    authenticate,
    authenticateSuccess,
    authenticateFailure,
    unauthenticate,
    verifyTokenSuccess,
    verifyTokenFailure,
    register,
    registerSuccess,
    registerFailure
};