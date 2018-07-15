import types from './types.js';

const getListings = () => ({
    type: types.GET_LISTINGS
});

const getListingsSuccess = (json) => ({
    type: types.GET_LISTINGS_SUCCESS,
    listings: json
});

const getListingsFailure = (json) => ({
    type: types.GET_LISTINGS_FAILURE,
});

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

const getFeaturedListings = () => ({
    type: types.GET_FEATURED_LISTINGS
});

const getFeaturedListingsSuccess = (json) => ({
    type: types.GET_FEATURED_LISTINGS_SUCCESS,
    featuredListings: json
});

const getFeaturedListingsFailure = (json) => ({
    type: types.GET_FEATURES_LISTINGS_FAILURE,
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
    getListings,
    getListingsSuccess,
    getListingsFailure,
    getLatetsListings,
    getLatestListingsSuccess,
    getLatestListingsFailure,
    getFeaturedListings,
    getFeaturedListingsSuccess,
    getFeaturedListingsFailure,
    createListing,
    createListingSuccess,
    createListingFailure
};