import types from './types.js';

const getBusinesses = () => ({
    type: types.GET_BUSINESSES
});

const getBusinessesSuccess = (json) => ({
    type: types.GET_BUSINESSES_SUCCESS,
    businesses: json
});

const getBusiness = () => ({
    type: types.GET_BUSINESS
});

const getBusinessSuccess = (json) => ({
    type: types.GET_BUSINESS_SUCCESS,
    business: json
});

export default {
    getBusinesses,
    getBusinessesSuccess,
    getBusiness,
    getBusinessSuccess
};