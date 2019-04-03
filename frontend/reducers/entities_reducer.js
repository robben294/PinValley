import users from './users_reducer';
import boards from './boards_reducer';
import pins from './pins_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users,
    boards,
    pins
});

export default entitiesReducer;