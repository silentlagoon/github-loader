import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import repos from './repos';

export default combineReducers({
    user,
    repos,
    routing: routerReducer
});