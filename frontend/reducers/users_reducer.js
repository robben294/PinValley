import {
    RECEIVE_CURRENT_USER,
} from '../action/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
    
};

const usersReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER: {
            return merge({}, state, {[action.user.id]: action.user});
        }
        default:
            return state;
    }
};

export default usersReducer;