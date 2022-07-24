
export enum ActionTypes{
  CHANGE_DATA = 'CHANGE_DATA',
  CHANGE_AUTH = 'CHANGE_AUTH',
  CHANGE_TOKEN = 'CHANGE_TOKEN',
}

export type userAction = FetchUserAction | FetchAuthAction | FetchTokenAction

interface FetchUserAction{
  type: ActionTypes.CHANGE_DATA;
  payload: any;
}
interface FetchAuthAction{
  type: ActionTypes.CHANGE_AUTH;
  payload: boolean ;
}
interface FetchTokenAction{
  type: ActionTypes.CHANGE_TOKEN;
  payload: boolean ;
}


export const setAuth = (auth: boolean) => ({ 
type: ActionTypes.CHANGE_AUTH,
payload: auth
})