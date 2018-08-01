import types from './types.js';

const getBusinesses = () => ({
    type: types.GET_BUSINESSES
});

const getBusinessesSuccess = (json) => ({
    type: types.GET_BUSINESSES_SUCCESS,
    businesses: json
});

export default {
    getBusinesses,
    getBusinessesSuccess,
};