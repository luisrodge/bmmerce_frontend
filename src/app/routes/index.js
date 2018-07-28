import React from 'react';
import { Route, Switch } from 'react-router-dom';
// ConnectedRouter will use the store from the Provider automatically 
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';

import { 
    NewListing, 
    RentListing,
    SignIn,
    Dashboard,
    Listings,
    Search
} from '../views';

import { DefaultLayout, MinimalLayout } from '../layouts';

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
            <Route 
                path="/:id/rent" 
                render={({match}) => (
                    <MinimalLayout>
                        <RentListing listingId={match.params.id} />
                    </MinimalLayout>
                )}
            />
            <Route path="/login" render={() => <MinimalLayout><SignIn /></MinimalLayout>}/>
            <Route path="/dashboard" render={() => <MinimalLayout><Dashboard /></MinimalLayout>}/>
        </Switch>
    </ConnectedRouter>
);