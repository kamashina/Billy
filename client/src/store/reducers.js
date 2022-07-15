import { combineReducers } from 'redux';
import { DialogReducer } from './Dialogs/reducer';
import { UserReducer } from './Reduxauth/login/reducer';
import { SaleReducer } from './sale/reducer';
import { NewsReducer } from './News/reducer';

export default combineReducers({
  authorization: UserReducer,
  Dialogs: DialogReducer,
  Salered: SaleReducer,
  New: NewsReducer,
});
