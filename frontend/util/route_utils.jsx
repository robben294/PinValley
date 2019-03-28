import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => {
    debugger
    return {
        loggedIn: Boolean(state.session.id),
    };
};

const Auth = ({ loggedIn, path, component: Component, exact }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            loggedIn ? <Redirect to='/feed' /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to='/' />
        )}
    />
)

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));