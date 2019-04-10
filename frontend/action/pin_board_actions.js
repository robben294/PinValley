import * as PinBoardApiUtil from '../util/pin_board_api_util';

export const RECEIVE_PIN_BOARD = 'RECEIVE_PIN_BOARD';
export const REMOVE_PIN_BOARD = 'REMOVE_PIN_BOARD';

export const receivePinBoard = ({pinBoard, pin, board}) => {
    return {
        type: RECEIVE_PIN_BOARD,
        pinBoard,
        pin,
        board
    };
};

export const removePinBoard = (pinBoardId) => {
    return {
        type: REMOVE_PIN_BOARD,
        pinBoardId
    };
};

export const createPinBoard = (pinBoard) => dispatch => {
    return PinBoardApiUtil.createPinBoard(pinBoard).then(payload => dispatch(receivePinBoard(payload)));
};

export const fetchPinBoard = (pinBoardId) => dispatch => {
    return PinBoardApiUtil.fetchPinBoard(pinBoardId).then(
        
        payload => {
        dispatch(receivePinBoard(payload));
    });
};

export const updatePinBoard = (pinBoard) => dispatch => {
    return PinBoardApiUtil.updatePinBoard(pinBoard).then((payload) => dispatch(receivePinBoard(payload)));
};

export const deletePinBoard = (pinBoardId) => dispatch => {
    return PinBoardApiUtil.deletePinBoard(pinBoardId).then(() => dispatch(removePinBoard(pinBoardId)));
};