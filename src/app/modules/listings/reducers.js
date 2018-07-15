import types from './types';

const STATE = {
  latestListings: [],
  gettingLatestListings: false,
  listing: {},
  creatingListing: false,
  createListingErrors: []
}

const listingsReducer = (state=STATE, action) => {
    switch(action.type) {
        case types.GET_LATEST_LISTINGS: {
          return {
            ...state,
            gettingLatestListings: true,
          }
        }
        
        case types.GET_LATEST_LISTINGS_SUCCESS: {
          const { latestListings } = action;
          return {
            ...state,
            latestListings,
            gettingLatestListings: false,
          }
        }

        case types.CREATE_LISTING: {
          return {
            ...state,
            creatingListing: true,
          }
        }
        
        case types.CREATE_LISTING_SUCCESS: {
          const { listing } = action;
          return {
            ...state,
            listing,
            creatingListing: false,
          }
        }

        case types.CREATE_LISTING_FAILURE: {
          const { createListingErrors } = action;
          return {
            ...state,
            createListingErrors,
            creatingListing: false,
          }
        }

        default: return state;
    }
}

export default listingsReducer;