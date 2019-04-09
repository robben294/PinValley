import * as PinBoardApiUtil from '../util/pin_board_api_util';

export const RECEIVE_PIN_BOARD = 'RECEIVE_PIN_BOARD';
export const REMOVE_PIN_BOARD = 'REMOVE_PIN_BOARD';

export const receivePinBoard = ({pinBoard, pin}) => {
    return {
        type: RECEIVE_PIN_BOARD,
        pinBoard,
        pin
    };
};

export const removePinBoard = (pinBoardId) => {
    return {
        type: REMOVE_PIN_BOARD,
        pinBoardId
    };
};

export const createPinBoard = (pinBoard) => dispatch => {
    return PinBoardApiUtil.createPinBoard(pinBoard).then(pinBoard => dispatch(receivePinBoard(pinBoard)));
};

export const fetchPinBoard = (pinBoardId) => dispatch => {
    return PinBoardApiUtil.fetchPinBoard(pinBoardId).then(
        
        pinBoard => {
        dispatch(receivePinBoard(pinBoard));
    });
};

export const updatePinBoard = (pinBoard) => dispatch => {
    return PinBoardApiUtil.updatePinBoard(pinBoard).then((pinBoard) => dispatch(receivePinBoard(pinBoard)));
};

export const deletePinBoard = (pinBoardId) => dispatch => {
    return PinBoardApiUtil.deletePinBoard(pinBoardId).then(() => dispatch(removePinBoard(pinBoardId)));
};