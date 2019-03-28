import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.id),
});

const Auth = ({ loggedIn, path, Component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to='/' /> : <Component {...props} />
        )}
    />
);

export const AuthRoute = withRouter(connect(msp)(Auth));