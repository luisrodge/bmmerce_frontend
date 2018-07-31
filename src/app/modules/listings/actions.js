import types from './types.js';

const getListing = () => ({
    type: types.GET_LISTING
});

const getListingSuccess = (json) => ({
    type: types.GET_LISTING_SUCCESS,
    listing: json
});

const getListingFailure = (json) => ({
    type: types.GET_LISTING_FAILURE,
});

const getListings = () => ({
    type: types.GET_LISTINGS
});

const getListingsSuccess = (listings, totalPages) => ({
    type: types.GET_LISTINGS_SUCCESS,
    listings: listings,
    totalPages: totalPages
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

const getUserListings = () => ({
    type: types.GET_USER_LISTINGS
});

const getUserListingsSuccess = (json) => ({
    type: types.GET_USER_LISTINGS_SUCCESS,
    userListings: json
});

const getUserListingsFailure = (json) => ({
    type: types.GET_USER_LISTINGS_FAILURE,
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

const updateListing = () => ({
    type: types.UPDATE_LISTING
});

const updateListingSuccess = (listing) => ({
    type: types.UPDATE_LISTING_SUCCESS,
    updatedListing: listing
});

const updateListingFailure = (json) => ({
    type: types.UPDATE_LISTING_FAILURE,
    updateListingErrors: json
});

const deleteListing = () => ({
    type: types.DELETE_LISTING
});

const deleteListingSuccess = (listingId) => ({
    type: types.DELETE_LISTING_SUCCESS,
    listingId: listingId
});

export default {
    getListing,
    getListingSuccess,
    getListingFailure,
    getListings,
    getListingsSuccess,
    getListingsFailure,
    getLatetsListings,
    getLatestListingsSuccess,
    getLatestListingsFailure,
    getFeaturedListings,
    getFeaturedListingsSuccess,
    getFeaturedListingsFailure,
    getUserListings,
    getUserListingsSuccess,
    getUserListingsFailure,
    createListing,
    createListingSuccess,
    createListingFailure,
    updateListing,
    updateListingSuccess,
    updateListingFailure,
    deleteListing,
    deleteListingSuccess
};