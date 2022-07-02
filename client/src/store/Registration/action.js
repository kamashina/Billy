export const CHANGE_PAROL = 'CHANGE_PAROL';
export const SET_NICKNAME = 'SET_NICK';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_ID = 'SET_ID';
export const setParol = (password) => ({
  type: CHANGE_PAROL,
  payload: password,
});

export const setEmail = (nick) => ({
  type: SET_NICKNAME,
  payload: nick,
});

export const setCountry = (country) => ({

  type: SET_COUNTRY,
  payload: country,
});
export const setID = (ID) => ({

  type: SET_ID,
  payload: ID,
});
