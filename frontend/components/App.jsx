import React from 'react';
import GreetingContainer from './greeting/greeting';
import GreetingLogin from './greeting/greeting_login';
import GreetingFeed from './greeting/greeting_feed';
import Profile from './profile/profile_component';
import Modal from './modal/modal';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => {
    return (
    <div>
        <Modal />
        <Switch>
            <ProtectedRoute path='/feed' component={GreetingFeed} />
            <AuthRoute exact path='/' component={GreetingLogin} />
            <ProtectedRoute path='/profile' component={Profile} />
        </Switch>
    </div>
)};

export default App;