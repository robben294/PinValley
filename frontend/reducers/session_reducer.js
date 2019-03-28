import { RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from '../action/session_actions';

const _nullUser = {
    id: null,
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id};
            
        case LOGOUT_CURRENT_USER:
            return { id: null };

        default: 
            return state;
    }
};

export default sessionReducer;