import { SET_NEWS } from './action';

export const StateNews = {
  News: [],
};

// eslint-disable-next-line default-param-last
export const NewsReducer = (state = StateNews, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        News: action.payload,
      };
  }
  return state;
};
