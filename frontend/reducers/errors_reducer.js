import session from './session_error_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
    session
});

export default errorsReducer;