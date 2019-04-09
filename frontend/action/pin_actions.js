import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_FEED = 'RECEIVE_FEED';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePins = (pins) => {
    return {
        type: RECEIVE_PINS,
        pins
    };
};

export const receiveFeed = ({pins, pinBoards, boards}) => {
    return {
        type: RECEIVE_FEED,
        pins,
        pinBoards,
        boards,
    };
};

export const receivePin = (pin) => {
    return {
        type: RECEIVE_PIN,
        pin
    };
};

export const removePin = (pinId) => {
    return {
        type: REMOVE_PIN,
        pinId
    };
};

export const fetchPins = () => dispatch => {
    return PinApiUtil.fetchPins().then((pins) => dispatch(receivePins(pins)));
};

export const fetchPin = (pinId) => dispatch => {
    return PinApiUtil.fetchPin(pinId).then(pin => dispatch(receivePin(pin)));
};

export const fetchFeed = () => dispatch => {
    return PinApiUtil.fetchFeed().then((payload) => dispatch(receiveFeed(payload)));
};

export const createPin = (pin) => dispatch => {
    return PinApiUtil.createPin(pin).then(pin => dispatch(receivePin(pin)));
};

export const updatePin = (pin) => dispatch => {
    return PinApiUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)));
};

export const deletePin = (pinId) => dispatch => {
    return PinApiUtil.deletePin(pinId).then(() => dispatch(removePin(pinId)));
};