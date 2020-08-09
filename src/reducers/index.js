import { combineReducers } from 'redux';
import postReducer from './postReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
  posts: postReducer
});