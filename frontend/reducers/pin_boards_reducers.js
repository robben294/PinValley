import {
    RECEIVE_PIN_BOARD,
    REMOVE_PIN_BOARD
} from '../action/pin_board_actions';

const boardsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PIN_BOARD: {
            return Object.assign({}, oldState, action.pinBoard);
        }
        case REMOVE_BOARD: {
            let newState = Object.assign({}, oldState);
            delete newState[action.pinBoardId];
            return newState;
        }
        default:
            return state;
    }
};

export default boardsReducer;