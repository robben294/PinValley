import * as PinBoardApiUtil from '../util/pin_board_api_util';

export const RECEIVE_PIN_BOARD = 'RECEIVE_PIN BOARD';
export const REMOVE_PIN_BOARD = 'REMOVE_PIN_BOARD';

export const receivePinBoard = (pinBoard) => {
    return {
        type: RECEIVE_PIN_BOARD,
        pinBoard
    };
};

export const removeBoard = (pinBoardId) => {
    return {
        type: REMOVE_PIN_BOARD,
        pinBoardId
    };
};

export const createBoard = (board) => dispatch => {
    return PinBoardApiUtil.createPinBoard(pinBoard).then(pinBoard => dispatch(receiveBoard(pinBoard)));
};

export const deleteBoard = (boardId) => dispatch => {
    return PinBoardApiUtil.deletePinBoard(pinBoardId).then(() => dispatch(removeBoard(boardId)));
};