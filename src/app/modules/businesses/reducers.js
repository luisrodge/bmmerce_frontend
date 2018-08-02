import types from './types';

const STATE = {
  gettingBusinesses: false,
  businesses: [],
  gettingBusiness: false,
  business: {},
  listings: [],
  gettingListings: false,
  totalPages: 0,
}

const businessesReducer = (state = STATE, action) => {
  switch (action.type) {
    case types.GET_BUSINESSES:
      {
        return {
          ...state,
          gettingBusinesses: true,
        }
      }

    case types.GET_BUSINESSES_SUCCESS:
      {
        const {
          businesses,
        } = action;
        return {
          ...state,
          businesses,
          gettingBusinesses: false,
        }
      }

    case types.GET_BUSINESS:
      {
        return {
          ...state,
          gettingBusiness: true,
        }
      }

    case types.GET_BUSINESS_SUCCESS:
      {
        const {
          business
        } = action;
        return {
          ...state,
          business,
          gettingBusiness: false,
        }
      }

    case types.GET_BUSINESS_LISTINGS:
      {
        return {
          ...state,
          gettingListings: true,
        }
      }

    case types.GET_BUSINESS_LISTINGS_SUCCESS:
      {
        const {
          listings,
          totalPages,
        } = action;
        return {
          ...state,
          listings,
          totalPages,
          gettingListings: false,
        }
      }

    default:
      return state;
  }
}

export default businessesReducer;