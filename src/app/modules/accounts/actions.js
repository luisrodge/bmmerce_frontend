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

const getBusiness = () => ({
    type: types.GET_BUSINESS
});

const getBusinessSuccess = (json) => ({
    type: types.GET_BUSINESS_SUCCESS,
    business: json
});

const updateBusiness = () => ({
    type: types.UPDATE_BUSINESS
});

const updateBusinessSuccess = (json) => ({
    type: types.UPDATE_BUSINESS_SUCCESS,
    business: json
});

const updateBusinessFailure = (errors) => ({
    type: types.UPDATE_BUSINESS_FAILURE,
    businessErrors: errors
});

export default {
    getAccount,
    getAccountSuccess,
    updateAccount,
    updateAccountSuccess,
    updateAccountFailure,
    getBusiness,
    getBusinessSuccess,
    updateBusiness,
    updateBusinessSuccess,
    updateBusinessFailure
};