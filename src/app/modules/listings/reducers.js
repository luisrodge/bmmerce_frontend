import {
  combineReducers
} from "redux";
import types from './types';

const STATE = {
  gettingListing: false,
  listing: {},
  listings: [],
  gettingListings: false,
  latestListings: [],
  gettingLatestListings: false,
  creatingListing: false,
  createListingErrors: [],
}

const FEATURED_STATE = {
  featuredListings: [],
  gettingFeaturedListings: false,
}

const USER_LISTINGS_STATE = {
  userListings: [],
  gettingUserListings: false,
  updatingListing: false,
  updateListingErrors: [],
  deletingListing: false
}

const defaultReducer = (state = STATE, action) => {
  switch (action.type) {
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
          listings
        } = action;
        return {
          ...state,
          listings,
          gettingListings: false,
        }
      }
    case types.GET_LATEST_LISTINGS:
      {
        return {
          ...state,
          gettingLatestListings: true,
        }
      }

    case types.GET_LATEST_LISTINGS_SUCCESS:
      {
        const {
          latestListings
        } = action;
        return {
          ...state,
          latestListings,
          gettingLatestListings: false,
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
          listing,
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

    default:
      return state;
  }
}

const featuredReducer = (state = FEATURED_STATE, action) => {
  switch (action.type) {
    case types.GET_FEATURED_LISTINGS:
      {
        return {
          ...state,
          gettingFeaturedListings: true,
        }
      }

    case types.GET_FEATURED_LISTINGS_SUCCESS:
      {
        const {
          featuredListings
        } = action;
        return {
          ...state,
          featuredListings,
          gettingFeaturedListings: false,
        }
      }

    default:
      return state;
  }
}

const userListingsReducer = (state = USER_LISTINGS_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_LISTINGS:
      {
        return {
          ...state,
          gettingUserListings: true,
        }
      }

    case types.GET_USER_LISTINGS_SUCCESS:
      {
        const {
          userListings
        } = action;
        return {
          ...state,
          userListings,
          gettingUserListings: false,
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
          userListings: state.userListings.map(listing => listing.id === updatedListing.id ?
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
          userListings: state.userListings.filter(listing => listingId !== listing.id),
          deletingListing: false,
        }
      }

    default:
      return state;
  }
}

const listingsReducer = combineReducers({
  default: defaultReducer,
  featured: featuredReducer,
  userListings: userListingsReducer
});

export default listingsReducer;