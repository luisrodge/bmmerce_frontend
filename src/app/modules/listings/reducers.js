import {
  combineReducers
} from "redux";
import types from './types';

const STATE = {
  gettingListing: false,
  listing: {},
  listings: [],
  totalPages: 0,
  gettingListings: false,
}

const ADMIN_LISTINGS_STATE = {
  listings: [],
  gettingListings: false,
  creatingListing: false,
  createListingErrors: {},
  updatingListing: false,
  updateListingErrors: [],
  deletingListing: false,
  totalPages: 0
}

const defaultReducer = (state = STATE, action) => {
  switch (action.type) {
    case types.CREATE_LISTING_SUCCESS:
      {
        const {
          listing
        } = action;
        return {
          ...state,
          listings: [listing, ...state.listings],
          creatingListing: false,
        }
      }
      
    case types.GET_LISTING:
      {
        return {
          ...state,
          gettingListing: true,
        }
      }

    case types.GET_LISTING_SUCCESS:
      {
        const {
          listing
        } = action;
        return {
          ...state,
          listing,
          gettingListing: false,
        }
      }

    case types.GET_LISTINGS:
      {
        return {
          ...state,
          gettingListings: true,
        }
      }

    case types.GET_LISTINGS_SUCCESS:
      {
        const {
          listings,
          totalPages
        } = action;
        return {
          ...state,
          totalPages,
          listings,
          gettingListings: false,
        }
      }

    default:
      return state;
  }
}

const adminListingsReducer = (state = ADMIN_LISTINGS_STATE, action) => {
  switch (action.type) {
    case types.GET_ADMIN_LISTINGS:
      {
        return {
          ...state,
          gettingListings: true,
        }
      }

    case types.GET_ADMIN_LISTINGS_SUCCESS:
      {
        const {
          listings,
          totalPages
        } = action;
        return {
          ...state,
          listings,
          totalPages,
          gettingListings: false,
        }
      }

    case types.CREATE_LISTING:
      {
        return {
          ...state,
          creatingListing: true,
        }
      }

    case types.CREATE_LISTING_SUCCESS:
      {
        const {
          listing
        } = action;
        return {
          ...state,
          listings: [listing, ...state.listings],
          creatingListing: false,
        }
      }

    case types.CREATE_LISTING_FAILURE:
      {
        const {
          createListingErrors
        } = action;
        return {
          ...state,
          createListingErrors,
          creatingListing: false,
        }
      }


    case types.UPDATE_LISTING:
      {
        return {
          ...state,
          updatingListing: true,
        }
      }

    case types.UPDATE_LISTING_SUCCESS:
      {
        const {
          updatedListing
        } = action;
        return {
          ...state,
          updatingListing: false,
          listings: state.listings.map(listing => listing.id === updatedListing.id ?
            // transform the one with a matching id
            updatedListing :
            // otherwise return original todo
            listing
          )
        }
      }

    case types.UPDATE_LISTING_FAILURE:
      {
        const {
          updateListingErrors
        } = action;
        return {
          ...state,
          updateListingErrors,
          updatingListing: false,
        }
      }

    case types.DELETE_LISTING:
      {
        return {
          ...state,
          deletingListing: true,
        }
      }

    case types.DELETE_LISTING_SUCCESS:
      {
        const {
          listingId
        } = action;
        return {
          ...state,
          listings: state.listings.filter(listing => listingId !== listing.id),
          deletingListing: false,
        }
      }

    default:
      return state;
  }
}

const listingsReducer = combineReducers({
  default: defaultReducer,
  admin: adminListingsReducer
});

export default listingsReducer;