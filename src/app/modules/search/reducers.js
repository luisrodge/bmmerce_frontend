import types from './types';

const INITIAL_STATE = {
    results: [],
    errors: [],
    searching: false,
    totalPages: 0
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
          const { results, totalPages } = action;
          return {
            ...state,
            results,
            totalPages,
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