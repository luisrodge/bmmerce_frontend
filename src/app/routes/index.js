import React from 'react';
import { Route } from 'react-router-dom';
// ConnectedRouter will use the store from the Provider automatically 
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';

import { Nav } from '../common';
import { Home } from '../views/index';
import { About } from '../views/index';
import { Footer } from '../common';

export default () => (
    <ConnectedRouter history={history}>
        <div>
            <Nav />
            <div className="container">
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </div>
            <Footer />
        </div>
    </ConnectedRouter>
);