import types from './types.js';

const search = () => ({
    type: types.SEARCH
});

const searchSuccess = (json) => ({
    type: types.SEARCH_SUCCESS,
    results: json
});

const searchFailure = (json) => ({
    type: types.SEARCH_FAILURE,
    errors: json
});

export default { 
    search,
    searchSuccess,
    searchFailure,
};