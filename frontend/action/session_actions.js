import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = user => {
    return {
    type: RECEIVE_CURRENT_USER,
    user
    };
};

export const logoutCurrentUser = () => {
    debugger
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

export const login = (user) => dispatch =>  {
    return SessionApiUtil.login(user).then(
        (user) => {
            dispatch(receiveCurrentUser(user));
        },
        (err) =>  {
            dispatch(receiveErrors(err.responseJSON));
        }
    );
};

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const logout = () => dispatch => {
    return SessionApiUtil.logout().then(
        () => dispatch(logoutCurrentUser())
    );
};

export const fetchUser = (userId) => dispatch => {
    return SessionApiUtil.fetchUser(userId).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (err) => dispatch(receiveErrors(err.responseJSON))
    );
};