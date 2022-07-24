import { Dispatch } from 'redux';
import { instance } from 'src/axios';
import { userAction, ActionTypes } from '../Reduxauth/action';

const token = localStorage.getItem('token');


export const AxiosUserAction = () => async (dispatch: Dispatch<userAction>) => {
  if(token){
  await instance.get('/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response: any) => {
      dispatch({ type: ActionTypes.CHANGE_DATA, payload: response.data, auth: true});
      console.log(response)
    })
    .catch((error: any) => alert(error));
  }
};
