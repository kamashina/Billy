import axios from 'axios';
import './Reg.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/Reduxauth/login/action';

function Reg() {
  const dispatch = useDispatch();
  const [passw, setPass] = useState();
  const [nick, setNick] = useState();
  const [pochta, setPochta] = useState();
  const Pass = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:1983/auth/register',
      data: {
        email: pochta,
        password: passw,
        nickname: nick,
      },
    }).then((response) => {
      dispatch(setUser(response.data));
    })
      .catch((error) => console.log(error));
  };
  return (
    <reg className="Reg">
      <h1 className="mess">Регистрация</h1>
      <input className="email" type="text" onChange={(event) => setPochta(event.target.value)} placeholder="Почта" />
      <input className="nick" type="text" onChange={(event) => setNick(event.target.value)} placeholder="Ник" />
      <input className="pass" type="password" onChange={(event) => setPass(event.target.value)} placeholder="Пароль" />
      <p className="err">{Error}</p>
      <button type="button" className="registr" onClick={Pass}>Войти</button>
    </reg>
  );
} export default Reg;
