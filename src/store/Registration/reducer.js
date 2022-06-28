import { CHANGE_PAROL, SET_NICKNAME, SET_COUNTRY } from './action';

export const UsersState = {
  nick: null,
  country: null,
  parol: false,
  avatar: 'defaultava.png',
};

// eslint-disable-next-line default-param-last
export const UserReducer = (state = UsersState, action) => {
  switch (action.type) {
    case CHANGE_PAROL:
      return {
        ...state,
        parol: action.payload,
      };
    case SET_NICKNAME:
      return {
        ...state,
        nick: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
  }
  return state;
};
