export const CHANGE_PAROL = 'CHANGE_PAROL';
export const SET_NICKNAME = 'SET_NICK';
export const SET_COUNTRY = 'SET_COUNTRY';
export const setParol = (parol) => ({
  type: CHANGE_PAROL,
  payload: parol,
});

export const setNick = (nick) => ({
  type: SET_NICKNAME,
  payload: nick,
});

export const setCountry = (country) => ({

  type: SET_COUNTRY,
  payload: country,
});
