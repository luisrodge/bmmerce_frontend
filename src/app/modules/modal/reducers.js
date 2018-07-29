import {
  combineReducers
} from "redux";

import types from './types';

const NEW_LISTING_MODAL_STATE = {
  modalIsOpen: false,
}

const AUTH_MODAL_STATE = {
  modalIsOpen: false,
}

const newListingModalReducer = (state = NEW_LISTING_MODAL_STATE, action) => {
  switch (action.type) {
    case types.OPEN_NEW_LISTING_MODAL:
      {
        return {
          ...state,
          modalIsOpen: true,
        }
      }

    case types.CLOSE_NEW_LISTING_MODAL:
      {
        return {
          ...state,
          modalIsOpen: false
        }
      }

    default:
      return state;
  }
}

const authModalReducer = (state = AUTH_MODAL_STATE, action) => {
  switch (action.type) {
    case types.OPEN_AUTH_MODAL:
      {
        return {
          ...state,
          modalIsOpen: true,
        }
      }

    case types.CLOSE_AUTH_MODAL:
      {
        return {
          ...state,
          modalIsOpen: false
        }
      }

    default:
      return state;
  }
}

const modalReducer = combineReducers({
  newListingModal: newListingModalReducer,
  authModal: authModalReducer,
});

export default modalReducer;