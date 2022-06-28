import { SET_POST } from './action';

export const Post = {
  Dialog: [{ id: '', value: '', user: '' }],
};

// eslint-disable-next-line default-param-last
export const DialogReducer = (state = Post, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        Dialog: action.payload,
      };
  }
  return state;
};
