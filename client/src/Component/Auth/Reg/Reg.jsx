import axios from 'axios';
import './Reg.css';
import React, { useState } from 'react';

function Reg() {
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
      console.log(response);
    })
      .catch((error) => { console.log(error); });
  };
  return (
    <reg className="Reg">
      <h1>Регистрация</h1>
      <input className="name" type="text" onChange={(event) => setPochta(event.target.value)} placeholder="Почта" />
      <input className="pass" type="password" onChange={(event) => setPass(event.target.value)} placeholder="Пароль" />
      <input className="country" type="text" onChange={(event) => setNick(event.target.value)} placeholder="Ник" />
      <p className="err">{Error}</p>
      <button type="button" className="registr" onClick={Pass}>Войти</button>
    </reg>
  );
} export default Reg;
