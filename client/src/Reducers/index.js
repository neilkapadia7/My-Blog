import {combineReducers} from 'redux';
import authReducer from './authReducer';
import blogReducer from './blogReducer'
import guestReducer from './guestReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    auth: authReducer,
    blog: blogReducer,
    guest: guestReducer,
    alerts: alertReducer
});