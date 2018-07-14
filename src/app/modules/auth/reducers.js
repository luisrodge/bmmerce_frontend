import types from './types';

const STATE = {
  user: {},
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
          const { user } = action;
          return {
            ...state,
            user,
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
            user: {},
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
          const { user } = action;
          return {
            ...state,
            user,
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
          const { user } = action;
          return {
            ...state,
            user,
            authenticated: true,
            verifyingToken: false,
          }
        }

        case types.VERIFY_TOKEN_FAILURE: {
          return {
            ...state,
            user: {},
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