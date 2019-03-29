import React from 'react';
import GreetingContainer from './greeting/greeting';
import GreetingLogin from './greeting/greeting_login';
import GreetingFeed from './greeting/greeting_feed';
import Modal from './modal/modal';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <ProtectedRoute path='/feed' component={GreetingFeed} />
            <AuthRoute exact path='/' component={GreetingLogin} />
        </Switch>
    </div>
);

export default App;