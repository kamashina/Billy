import { CHANGE_PAROL, SET_NICKNAME, SET_COUNTRY } from './action';

export const defaultState = {
  nick: '',
  country: '',
  parol: false,
  avatar: 'defaultava.png',
};

// eslint-disable-next-line default-param-last
export const regReducer = (state = defaultState, action) => {
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
