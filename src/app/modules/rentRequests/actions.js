import types from './types.js';

const createRentRequest = () => ({
    type: types.CREATE_RENT_REQUEST
});

const createRentRequestSuccess = () => ({
    type: types.CREATE_RENT_REQUEST_SUCCESS,
});

const createRentRequestFailure = (json) => ({
    type: types.CREATE_RENT_REQUEST_FAILURE,
    createRentRequestErrors: json
});

export default {
    createRentRequest,
    createRentRequestSuccess,
    createRentRequestFailure
};