import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//Testing
import { signup, login, logout, receiveCurrentUser } from './action/session_actions';
import { receivePinBoard } from './action/pin_board_actions';
import { fetchUser } from './action/user_actions';
import { fetchBoard } from './action/board_actions';
//Testing 

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id
            },
            
        };
    } else {
        preloadedState = {
            ui: {
                // modal: 'login',
            }
        };
    }
    const store = configureStore(preloadedState);
    const root = document.getElementById('root');
    //Testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.receiveCurrentUser = receiveCurrentUser;
    window.fetchUser = fetchUser;
    window.fetchBoard = fetchBoard;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.receivePinBoard = receivePinBoard;
    //Testing
    
    ReactDOM.render(<Root store={store}/>, root);
});