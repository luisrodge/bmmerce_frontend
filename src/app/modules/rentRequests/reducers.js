import types from './types';

const STATE = {
  creatingRentRequest: false,
  createRentRequestErrors: []
}

const rentRequestsReducer = (state = STATE, action) => {
  switch (action.type) {
    case types.CREATE_RENT_REQUEST:
      {
        return {
          ...state,
          creatingRentRequest: true,
        }
      }

    case types.CREATE_RENT_REQUEST_SUCCESS:
      {
        return {
          ...state,
          creatingRentRequest: false,
        }
      }

    case types.CREATE_RENT_REQUEST_FAILURE:
      {
        const {
          createRentRequestErrors
        } = action;
        return {
          ...state,
          createRentRequestErrors,
          creatingRentRequest: false,
        }
      }

    default:
      return state;
  }
}

export default rentRequestsReducer;