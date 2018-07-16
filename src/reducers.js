import { combineReducers } from 'redux';

import authReducer from './app/modules/auth/reducers';
import listingsReducer from './app/modules/listings/reducers';
import rentRequestsReducer from './app/modules/rentRequests/reducers';
import searchReducer from './app/modules/search/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    listings: listingsReducer,
    rentRequests: rentRequestsReducer,
    search: searchReducer
});

export default rootReducer;