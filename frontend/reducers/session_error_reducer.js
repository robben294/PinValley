import { 
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from '../action/session_actions';

const _defaultState = {
    session: []
};

const sessionErrorReducer = (state = _defaultState, action) => {
    switch(action.type) {
        case RECEIVE_ERRORS: {
            return {session: action.errors};
        }
        case RECEIVE_CURRENT_USER: {
            return _defaultState;
        }
        default: {
            return state;
        }
    }
};

export default sessionErrorReducer;