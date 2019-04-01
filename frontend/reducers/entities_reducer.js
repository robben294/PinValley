import users from './users_reducer';
import boards from './boards_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users,
    boards,
});

export default entitiesReducer;