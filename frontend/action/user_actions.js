import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchUser = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId).then(
        (user) => dispatch(receiveUser(user)),
        (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const updateUser = (user) => dispatch => {
    return UserApiUtil.updateUser(user).then(
        user => dispatch(receiveUser(user))
        // err => dispatch(receiveErrors(err.responseJSON))
    );
};