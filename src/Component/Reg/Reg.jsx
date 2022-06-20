import { useState } from 'react';
import './Reg.css';
function Reg(props) {
  const [Avatar] = useState('defaultava.png');
  let password; let nick; let
    country;
  const mypass = '123456789';
  const [Error, setError] = useState('');
  const Inpass = (event) => {
    password = event.target.value;
  };
  const Pass = () => {
    if (mypass === password) {
      props.setParol(true);
      console.log(props.parol);
    } else {
      setError('КАКАЯ ЖАЛОСТЬ');
    }
  };
  const Nickname = (event) => { nick = event.target.value; };
  const Country = (event) => { country = event.target.value; };
  return (
    <reg className="Reg">
      <h1>ВОЙДИ</h1>
      <img src={Avatar} alt="avatar" />
      <input className="name" type="text" onChange={Nickname} placeholder="Логин" />
      <input className="pass" type="password" onChange={Inpass} placeholder="Пароль" />
      <input className="country" type="text" onChange={Country} placeholder="Страна" />
      <p className="err">{Error}</p>
      <button type="button" className="registr" onClick={Pass}>Войти</button>
    </reg>
  );
} export default Reg;
