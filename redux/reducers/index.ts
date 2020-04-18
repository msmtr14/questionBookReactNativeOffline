import {combineReducers} from 'redux';
import questionReducer from './questionReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  questionReducer,
  authReducer,
});
export default rootReducer;
