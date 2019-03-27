import { 
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from '../action/session_actions';

const sessionErrorReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_ERRORS: {
            return action.errors;
        }
        case RECEIVE_CURRENT_USER: {
            return [];
        }
        default: {
            return state;
        }
    }
};

export default sessionErrorReducer;