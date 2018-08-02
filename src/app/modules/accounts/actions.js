import types from './types.js';

const getAccount = () => ({
    type: types.GET_ACCOUNT
});

const getAccountSuccess = (json) => ({
    type: types.GET_ACCOUNT_SUCCESS,
    account: json
});

const updateAccount = () => ({
    type: types.UPDATE_ACCOUNT
});

const updateAccountSuccess = (json) => ({
    type: types.UPDATE_ACCOUNT_SUCCESS,
    account: json
});

const updateAccountFailure = (errors) => ({
    type: types.UPDATE_ACCOUNT_FAILURE,
    errors: errors
});

export default {
    getAccount,
    getAccountSuccess,
    updateAccount,
    updateAccountSuccess,
    updateAccountFailure
};