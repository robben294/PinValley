import React from 'react';
import GreetingContainer from './greeting/greeting';
import GreetingLogin from './greeting/greeting_login';
import GreetingFeed from './greeting/greeting_feed';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <div>
        <GreetingContainer />
        <Modal />
        {/* <ProtectedRoute path='/feed' component={GreetingFeed} />
        <AuthRoute exact path='/' component={() => null} /> */}
    </div>
);

export default App;