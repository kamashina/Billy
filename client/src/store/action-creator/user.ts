import { Dispatch } from 'redux';
import { instance } from 'src/axios';

import { userAction, ActionTypes, setAuth } from '../Reduxauth/action';

const token = localStorage.getItem('token');

export const AxiosUserAction = () => async (dispatch: Dispatch<userAction>) => {
  await instance.get('/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response: any) => {
      dispatch({ type: ActionTypes.CHANGE_DATA, payload: response.data, auth: true});
      dispatch(setAuth(true))
    })
    .catch((error: any) => {
      console.log(error)
    });
};
