import {
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER,
} from '../action/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
    
};

const usersReducer = (state = _defaultState, action) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {[action.user.id]: action.user});

        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default usersReducer;