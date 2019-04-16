import {
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER,
} from '../action/session_actions';
import { RECEIVE_USER } from '../action/user_actions';

import merge from 'lodash/merge';
import { RECEIVE_PIN_BOARD } from '../action/pin_board_actions';

const _defaultState = {
    
};

const usersReducer = (state = _defaultState, action) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {[action.user.id]: action.user});
        
        case RECEIVE_USER:
            return merge({}, oldState, { [action.user.id]: action.user });

        case RECEIVE_PIN_BOARD:
            return merge({}, oldState, action.user);

        case LOGOUT_CURRENT_USER:
            return {};
            
        default:
            return state;
    }
};

export default usersReducer;