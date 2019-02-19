import { combineReducers } from 'redux';
import GetUser from './UserReducer';

export default combineReducers({
    users: GetUser
});