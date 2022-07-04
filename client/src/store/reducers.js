import { combineReducers } from 'redux';
import { DialogReducer } from './Dialogs/reducer';
import { UserReducer } from './Reduxauth/login/reducer';
import { SaleReducer } from './sale/reducer';

export default combineReducers({
  authorization: UserReducer,
  Dialogs: DialogReducer,
  Salered: SaleReducer,

});
