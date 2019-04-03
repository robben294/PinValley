import {
    RECEIVE_PIN,
    RECEIVE_PINS,
    REMOVE_PIN
} from '../action/pin_actions';

const pinsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PINS: {
            return Object.assign({}, action.pins);
        }
        case RECEIVE_PIN: {
            return Object.assign({}, oldState, action.pin);
        }
        case REMOVE_PIN: {
            let newState = Object.assign({}, oldState);
            delete newState[action.pinId];
            return newState;
        }
        default:
            return state;
    }
};

export default pinsReducer;