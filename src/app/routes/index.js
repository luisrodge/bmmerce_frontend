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
    Search,
    Businesses,
    Business,
    Account,
    PrivacyPolicy,
    TermsService
} from '../views';

import { 
    DefaultLayout, 
    MinimalLayout,
    BusinessLayout 
} from '../layouts';

import requireAuth from '../hoc/requireAuth';

// HOC wrappers
const DashboardAuth = requireAuth(Dashboard);
const AccountAuth = requireAuth(Account);

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
            <Route exact path="/privacy_policy" render={() => <DefaultLayout><PrivacyPolicy /></DefaultLayout>}/>
            <Route exact path="/terms_of_service" render={() => <DefaultLayout><TermsService /></DefaultLayout>}/>
            <Route exact path="/rentals" render={() => <DefaultLayout><Rentals /></DefaultLayout>}/>
            <Route exact path="/businesses" render={() => <DefaultLayout><Businesses /></DefaultLayout>}/>
            <Route exact path="/businesses/:id" render={({match}) => <BusinessLayout><Business id={match.params.id} /></BusinessLayout>}/>
            <Route 
                path="/dashboard" 
                render={(props) => 
                    <MinimalLayout><DashboardAuth {...props} /></MinimalLayout>
                }
            />
            <Route 
                path="/account" 
                render={(props) => 
                    <MinimalLayout><AccountAuth {...props} /></MinimalLayout>
                }
            />
        </Switch>
    </ConnectedRouter>
);