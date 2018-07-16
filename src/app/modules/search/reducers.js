import types from './types';

const INITIAL_STATE = {
    results: [],
    errors: [],
    searching: false,
}

const searchReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.SEARCH: {
          return {
            ...state,
            searching: true,
          }
        }
        
        case types.SEARCH_SUCCESS: {
          const { results } = action;
          return {
            ...state,
            results,
            searching: false
          }
        }

        case types.SEARCH_FAILURE: {
          const { errors } = action;
          return {
            ...state,
            errors,
            searching: false
          }
        }
        
        default: return state;
    }
}

export default searchReducer;