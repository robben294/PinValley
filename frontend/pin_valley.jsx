import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//Testing
import { signup, login, logout, receiveCurrentUser } from './action/session_actions';
//Testing 

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    //Testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.receiveCurrentUser = receiveCurrentUser;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //Testing
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});