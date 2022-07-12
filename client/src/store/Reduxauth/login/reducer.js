import {
  CHANGE_DATA, CHANGE_AUTH,
} from './action';

export const UsersState = {
  data: {
    email: '',
    password: '',
    nickname: '',
    avatarUrl: 'https://server.cum.com.ru/uploads/KSeclybJMGg.jpg',
  },
  auth: false,
};

// eslint-disable-next-line default-param-last
export const UserReducer = (state = UsersState, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_AUTH:
      return {
        ...state,
        auth: action.payload,
      };
  }
  return state;
};
