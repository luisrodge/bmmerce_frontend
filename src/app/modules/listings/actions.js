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


const getAdminListings = () => ({
    type: types.GET_ADMIN_LISTINGS
});

const getAdminListingsSuccess = (json) => ({
    type: types.GET_ADMIN_LISTINGS_SUCCESS,
    listings: json
});

const getAdminListingsFailure = (json) => ({
    type: types.GET_ADMIN_LISTINGS_FAILURE,
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
    getAdminListings,
    getAdminListingsSuccess,
    getAdminListingsFailure,
    createListing,
    createListingSuccess,
    createListingFailure,
    updateListing,
    updateListingSuccess,
    updateListingFailure,
    deleteListing,
    deleteListingSuccess
};