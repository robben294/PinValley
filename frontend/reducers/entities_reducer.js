import users from './users_reducer';
import boards from './boards_reducer';
import pins from './pins_reducer';
import pinBoards from './pin_boards_reducers';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users,
    boards,
    pins,
    pinBoards,
});

export default entitiesReducer;