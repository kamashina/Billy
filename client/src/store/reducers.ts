import { combineReducers } from 'redux';
import { UserReducer } from './Reduxauth/reducer';


export const rootReducer = combineReducers({
  authorization: UserReducer,
});


export type RootState = ReturnType<typeof rootReducer>