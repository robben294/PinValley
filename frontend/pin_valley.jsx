import React from 'react';
import ReactDOM from 'react-dom';
//Testing
import { signup, login, logout } from './util/session_api_util';
//Testing 

document.addEventListener('DOMContentLoaded', () => {
    //Testing
    window.signup = signup;
    window.login = login;
    window.logout = logout
    //Testing
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to PinValley</h1>, root);
});