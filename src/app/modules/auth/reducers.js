import types from './types';

const STATE = {
  account: {},
  signInError: '',
  authenticated: false,
  authenticating: false,
  verifyingToken: true,
  registering: false,
  registerErrors: {}
}

const authReducer = (state=STATE, action) => {
    switch(action.type) {
        case types.AUTHENTICATE: {
          return {
            ...state,
            authenticating: true,
          }
        }
        
        case types.AUTHENTICATE_SUCCESS: {
          const { account } = action;
          return {
            ...state,
            account,
            authenticated: true,
            authenticating: false,
          }
        }

        case types.AUTHENTICATE_FAILURE: {
          const { signInError } = action;
          return {
            ...state,
            signInError,
            authenticating: false,
          }
        }

        case types.UNAUTHENTICATE: {
          return {
            ...state,
            account: {},
            authenticated: false,
            verifyingToken: false
          }
        }

        case types.REGISTER: {
          return {
            ...state,
            registering: true,
          }
        }
        
        case types.REGISTER_SUCCESS: {
          const { account } = action;
          return {
            ...state,
            account,
            authenticated: true,
            registering: false,
          }
        }

        case types.REGISTER_FAILURE: {
          const { registerErrors } = action;
          return {
            ...state,
            registerErrors,
            registering: false,
          }
        }

        case types.VERIFY_TOKEN_SUCCESS: {
          const { account } = action;
          return {
            ...state,
            account,
            authenticated: true,
            verifyingToken: false,
          }
        }

        case types.VERIFY_TOKEN_FAILURE: {
          return {
            ...state,
            account: {},
            verifyingToken: false,
            authenticated: false,
          }
        }

        default: return state;
    }
}

// const topicsReducer = combineReducers({
//   getTopics: getTopicsReducer,
//   addTopic: addTopicReducer
// });

export default authReducer;