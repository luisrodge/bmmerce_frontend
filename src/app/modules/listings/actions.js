import types from './types.js';

const getLatetsListings = () => ({
    type: types.GET_LATEST_LISTINGS
});

const getLatestListingsSuccess = (json) => ({
    type: types.GET_LATEST_LISTINGS_SUCCESS,
    latestListings: json
});

const getLatestListingsFailure = (json) => ({
    type: types.GET_LATEST_LISTINGS_FAILURE,
});

const createListing = () => ({
    type: types.CREATE_LISTING
});

const createListingSuccess = (listing) => ({
    type: types.CREATE_LISTING_SUCCESS,
    listing: listing
});

const createListingFailure = (json) => ({
    type: types.CREATE_LISTING_FAILURE,
    createListingErrors: json
});

export default { 
    getLatetsListings,
    getLatestListingsSuccess,
    getLatestListingsFailure,
    createListing,
    createListingSuccess,
    createListingFailure
};