import {combineReducers} from 'redux';
import authReducer from './authReducer';
import blogReducer from './blogReducer'
import guestReducer from './guestReducer';

export default combineReducers({
    auth: authReducer,
    blog: blogReducer,
    guest: guestReducer
});