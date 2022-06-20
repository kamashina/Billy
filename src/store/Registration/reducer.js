import { CHANGE_PAROL } from './action';

const defaultState = {
  login: '',
  count: '',
  parol: false,
};

export const regReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAROL:
      return {
        ...state,
        parol: action.payload,
      };
  }
  return state;
};
