import types from './types';

const STATE = {
  gettingBusinesses: false,
  businesses: [],
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
          businesses
        } = action;
        return {
          ...state,
          businesses,
          gettingBusinesses: false,
        }
      }

    default:
      return state;
  }
}

export default businessesReducer;