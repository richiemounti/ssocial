import { combineReducers } from "redux";
import postReducer from './postReducer';
import errorReducer from './errorReducer';
import authreducer from './authReducer';


export default combineReducers({
    post: postReducer,
    error: errorReducer,
    auth: authreducer
});