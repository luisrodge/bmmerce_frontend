import React from 'react';
import { Route, Switch } from 'react-router-dom';
// ConnectedRouter will use the store from the Provider automatically 
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';

import { 
    Home, 
    NewListing, 
    RentListing,
    SignIn,
    Dashboard
} from '../views';

import { DefaultLayout, MinimalLayout } from '../layouts';

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" render={() => <DefaultLayout><Home /></DefaultLayout>}/>
            <Route path="/listings/new" render={() => <MinimalLayout><NewListing /></MinimalLayout>}/>
            <Route path="/:id/rent" render={() => <MinimalLayout><RentListing /></MinimalLayout>}/>
            <Route path="/login" render={() => <MinimalLayout><SignIn /></MinimalLayout>}/>
            <Route path="/dashboard" render={() => <MinimalLayout><Dashboard /></MinimalLayout>}/>
        </Switch>
    </ConnectedRouter>
);