import { combineReducers } from 'redux';
import userReducer from '../userSlice'; // Adjust the import based on your user slice location
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer
});

export default rootReducer;