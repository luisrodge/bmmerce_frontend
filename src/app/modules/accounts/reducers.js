import types from './types';

const STATE = {
  gettingAccount: false,
  account: {},
  updatingAccount: false,
  gettingBusiness: false,
  business: {},
  updatingBusiness: false,
  businessErrors: []
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

    case types.UPDATE_BUSINESS:
      {
        return {
          ...state,
          updatingBusiness: true,
        }
      }

    case types.UPDATE_BUSINESS_SUCCESS:
      {
        const {
          business
        } = action;
        return {
          ...state,
          business,
          updatingBusiness: false,
        }
      }

    case types.UPDATE_BUSINESS_FAILURE:
      {
        const {
          businessErrors
        } = action;
        return {
          ...state,
          businessErrors,
          updatingBusiness: false,
        }
      }

    default:
      return state;
  }
}

export default accountsReducer;