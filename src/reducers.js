import { combineReducers } from 'redux';

import authReducer from './app/modules/auth/reducers';
import listingsReducer from './app/modules/listings/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    listings: listingsReducer
});

export default rootReducer;