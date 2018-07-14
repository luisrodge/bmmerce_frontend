import { combineReducers } from 'redux';

import authReducer from './app/modules/auth/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;