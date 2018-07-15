import {
  combineReducers
} from "redux";
import types from './types';

const STATE = {
  listings: [],
  gettingListings: false,
  latestListings: [],
  gettingLatestListings: false,
  creatingListing: false,
  createListingErrors: [],
  listing: {},
}

const FEATURED_STATE = {
  featuredListings: [],
  gettingFeaturedListings: false,
}

const defaultReducer = (state = STATE, action) => {
  switch (action.type) {
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

const listingsReducer = combineReducers({
  default: defaultReducer,
  featured: featuredReducer,
});

export default listingsReducer;