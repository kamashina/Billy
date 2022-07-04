import {
  CHANGE_DATA,
} from './action';

export const UsersState = { data: {} };

// eslint-disable-next-line default-param-last
export const UserReducer = (state = UsersState, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
};
