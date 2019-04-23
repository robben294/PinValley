import React from 'react';
import GreetingContainer from './greeting/greeting';
import GreetingLogin from './greeting/greeting_login';
import GreetingFeed from './greeting/greeting_feed';
import Navbar from './nav_bar/nav_bar';
import Profile from './profile/profile_container';
import Modal from './modal/modal';
import EditProfileForm from './profile/edit_profile_form';
import BoardIndex from './boards/board_index';
import BoardShow from './boards/board_show';
import CreatePinForm from './pins/create_pin_form';
import PinShow from './pins/pin_show';
import BoardPinIndex from './pins/board_pin_index';
import Feed from './feed/feed';

import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => {
    return (
    <div>
        <Navbar />
        <Modal />
        <Switch>
            <ProtectedRoute path='/profile/edit' component={EditProfileForm} />
            <ProtectedRoute path='/profile' component={Profile} />
        </Switch>
        <Switch>
            <ProtectedRoute path='/feed' component={Feed} />
            <AuthRoute exact path='/' component={GreetingLogin} />
            <ProtectedRoute path='/boards/:boardId' component={BoardShow} />
            <ProtectedRoute path='/profile/Pins/' component={BoardPinIndex} />
            <ProtectedRoute path='/profile' component={BoardIndex} />
            <ProtectedRoute path='/pin/new' component={CreatePinForm} />
            {/* <ProtectedRoute path='/pinBoards/:pinBoardId' component={PinShow} /> */}
        </Switch>
    </div>
)};

export default App;