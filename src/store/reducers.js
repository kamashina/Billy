import { combineReducers } from 'redux';
import { regReducer } from './Registration/reducer';

export default combineReducers({
  registration: regReducer,
});
