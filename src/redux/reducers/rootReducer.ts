import {combineReducers} from 'redux';
// Reducers
import userReducer from '../reducers/userReducer';
import dataReducer from '../reducers/dataReducer';
import uiReducer from '../reducers/uiReducer';


export default combineReducers({
    user: userReducer,
    data: dataReducer,
    ui: uiReducer
});