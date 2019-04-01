import React from 'react';
import GreetingContainer from './greeting/greeting';
import GreetingLogin from './greeting/greeting_login';
import GreetingFeed from './greeting/greeting_feed';
import Profile from './profile/profile_container';
import Modal from './modal/modal';
import EditProfileForm from './profile/edit_profile_form';
import BoardIndex from './boards/board_index';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => {
    return (
    <div>
        <Modal />
        <Switch>
            <ProtectedRoute path='/feed' component={GreetingFeed} />
            <AuthRoute exact path='/' component={GreetingLogin} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute path='/profile/edit' component={EditProfileForm} />
            <ProtectedRoute path='/profile/boards' component={BoardIndex} />
        </Switch>
    </div>
)};

export default App;