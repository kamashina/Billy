import { userState } from './../../../types/types';
import { ActionTypes, userAction } from './action';


export const initialState = {
  data: [{
    id: "",
	email: "",
	nickname: "",
	avatarUrl: "http://localhost:1983/uploads/KSeclybJMGg.jpg",
  }],
  auth: false,
};

export const UserReducer = (state = initialState, action: userAction): userState => {
  switch (action.type) {
    case ActionTypes.CHANGE_DATA:
      return {
        data: action.payload,
        auth: true,
      };
      default:
      return state;
  }
};
