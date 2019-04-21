import {
    RECEIVE_PIN_BOARD,
    REMOVE_PIN_BOARD
} from '../action/pin_board_actions';
import { RECEIVE_BOARDS, RECEIVE_BOARD } from '../action/board_actions';
import { RECEIVE_FEED } from '../action/pin_actions';

const pinBoardsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARDS:
            return Object.assign({}, action.pinBoards);
        case RECEIVE_BOARD:
        case RECEIVE_FEED:
        {
            return Object.assign({}, action.pinBoards);
        }
        case RECEIVE_PIN_BOARD:
        {
            return Object.assign({}, oldState, action.pinBoard);
        }
        case REMOVE_PIN_BOARD: {
            let newState = Object.assign({}, oldState);
            delete newState[action.pinBoardId];
            return newState;
        }
        default:
            return state;
    }
};

export default pinBoardsReducer;