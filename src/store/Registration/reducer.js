import { CHANGE_PAROL } from './action';

export const defaultState = {
  login: '',
  count: '',
  parol: false,
};

// eslint-disable-next-line default-param-last
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
