
export enum ActionTypes{
  CHANGE_DATA = 'CHANGE_DATA',
}

export type userAction = FetchUserAction

interface FetchUserAction{
  type: ActionTypes.CHANGE_DATA;
  payload: any;
}
