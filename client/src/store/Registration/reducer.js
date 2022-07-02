import {
  CHANGE_PAROL, SET_NICKNAME, SET_COUNTRY, SET_ID,
} from './action';

export const UsersState = {
  email: '',
  country: '',
  password: false,
  avatar: 'defaultava.png',
  id: null,
};

// eslint-disable-next-line default-param-last
export const UserReducer = (state = UsersState, action) => {
  switch (action.type) {
    case CHANGE_PAROL:
      return {
        ...state,
        password: action.payload,
      };
    case SET_NICKNAME:
      return {
        ...state,
        Email: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
  }
  return state;
};
