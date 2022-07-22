
import { userAction, ActionTypes } from '../Reduxauth/action';
import { Dispatch } from "redux";
import { instance } from '../../axios';

const token = localStorage.getItem('token');

export const AxiosUserAction = () => {
    return async (dispatch: Dispatch<userAction>) => {
      await instance.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response: any) => {
    dispatch({type: ActionTypes.CHANGE_DATA, payload: response})
        })
        .catch((error: any) => alert(error))
    }
    }
