export const CHANGE_DATA = 'CHANGE_DATA';
export const CHANGE_AUTH = 'CHANGE_AUTH';
export const setUser = (data) => ({
  type: CHANGE_DATA,
  payload: data,
});
export const setAuth = (auth) => ({
  type: CHANGE_AUTH,
  payload: auth,
});
