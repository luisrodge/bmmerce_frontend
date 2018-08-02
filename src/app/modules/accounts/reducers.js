import types from './types';

const STATE = {
  gettingAccount: false,
  account: {},
  updatingAccount: false
}

const accountsReducer = (state = STATE, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT:
      {
        return {
          ...state,
          gettingAccount: true,
        }
      }

    case types.GET_ACCOUNT_SUCCESS:
      {
        const {
          account
        } = action;
        return {
          ...state,
          account,
          gettingAccount: false,
        }
      }

    case types.UPDATE_ACCOUNT:
      {
        return {
          ...state,
          updatingAccount: true,
        }
      }

    case types.UPDATE_ACCOUNT_SUCCESS:
      {
        const {
          account
        } = action;
        return {
          ...state,
          account,
          updatingAccount: false,
        }
      }

    case types.UPDATE_ACCOUNT_FAILURE:
      {
        const {
          errors
        } = action;
        return {
          ...state,
          updatingAccount: false,
        }
      }

    default:
      return state;
  }
}

export default accountsReducer;