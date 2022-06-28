import { combineReducers } from 'redux';
import { DialogReducer } from './Dialogs/reducer';
import { UserReducer } from './Registration/reducer';

export default combineReducers({
  registration: UserReducer,
  Dialogs: DialogReducer,
});
