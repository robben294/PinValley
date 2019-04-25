import { OPEN_MODAL, CLOSE_MODAL } from '../action/modal_actions';

const _defaultState = [];

const modalReducer = (state = _defaultState, action) => {
    const oldState = Object.freeze(state);
    let newState = [];
    newState = newState.concat(oldState);
    debugger
    switch(action.type) {
        case OPEN_MODAL:
            newState.push(action.modal);
            return newState;
            
        case CLOSE_MODAL:
            newState.pop();
            return newState;
            
        default:
            return state;
            
    }  
};

export default modalReducer;