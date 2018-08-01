import React from 'react';
import { Route, Switch } from 'react-router-dom';
// ConnectedRouter will use the store from the Provider automatically 
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';

import { NewListing } from '../common'

import { 
    Dashboard,
    Listings,
    Rentals,
    Search
} from '../views';

import { DefaultLayout, MinimalLayout } from '../layouts';

import requireAuth from '../hoc/requireAuth';

const DashboardAuth = requireAuth(Dashboard);

export default (props) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" render={() => <DefaultLayout><Listings /></DefaultLayout>}/>
            <Route exact path="/listings" render={() => <DefaultLayout><Listings /></DefaultLayout>}/>
            <Route path="/listings/new" render={() => <MinimalLayout><NewListing /></MinimalLayout>}/>
            <Route 
                path="/search/:term" 
                render={({match}) => (
                    <DefaultLayout>
                        <Search term={match.params.term}/>
                    </DefaultLayout>
                )}
            />
            <Route exact path="/search" render={() => <DefaultLayout><Listings /></DefaultLayout>}/>
            <Route exact path="/rentals" render={() => <DefaultLayout><Rentals /></DefaultLayout>}/>
            <Route 
                path="/dashboard" 
                render={(props) => 
                    <MinimalLayout><DashboardAuth {...props} /></MinimalLayout>
                }/>
        </Switch>
    </ConnectedRouter>
);