import { 
    RECEIVE_BOARD,
    RECEIVE_BOARDS,
    REMOVE_BOARD 
} from '../action/board_actions';
import { RECEIVE_FEED } from '../action/pin_actions';

const boardsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOARDS:
        {
            return Object.assign({}, action.boards);
        }
        case RECEIVE_BOARD: {
            return Object.assign({}, oldState, { [action.board.id]: action.board });
        }
        case RECEIVE_FEED:
            return Object.assign({}, action.boards);
        case REMOVE_BOARD: {
            let newState = Object.assign({}, oldState);
            delete newState[action.boardId];
            return newState;
        }
        default: 
            return state;
    }
};

export default boardsReducer;