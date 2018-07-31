import types from './types.js';

const search = () => ({
    type: types.SEARCH
});

const searchSuccess = (results, totalPages) => ({
    type: types.SEARCH_SUCCESS,
    results: results,
    totalPages: totalPages
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