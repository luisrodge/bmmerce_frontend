import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {IntlProvider} from 'react-intl';
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import App from './app/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker'

import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from './app/utils/history';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.scss';

import setAuthorizationToken from './app/utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import authenticateActions  from './app/modules/auth/actions';

// For redux-devtools extension to work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Build the middleware for intercepting and dispatching navigation actions
const routerMw = routerMiddleware(history)

const middleware = composeEnhancers(applyMiddleware(thunk, logger, routerMw));
const store = createStore(connectRouter(history)(rootReducer), middleware);

// If token is stored locally, appy token to headers and update store state
if (localStorage.jwtToken) {
  // Apply token to request headers
  setAuthorizationToken(localStorage.jwtToken);
  //  Add decoded token payload to store state
  store.dispatch(authenticateActions.authenticateSuccess(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();