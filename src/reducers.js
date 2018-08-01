import { combineReducers } from 'redux';

import authReducer from './app/modules/auth/reducers';
import listingsReducer from './app/modules/listings/reducers';
import searchReducer from './app/modules/search/reducers';
import modalReducer from './app/modules/modal/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    listings: listingsReducer,
    search: searchReducer,
    modal: modalReducer
});

export default rootReducer;