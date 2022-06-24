import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setParol } from '../../store/Registration/action';
import './Reg.css';

function Reg() {
  const [Avatar] = useState('defaultava.png');
  const dispatch = useDispatch();
  let password;
  const mypass = '2';
  const [Error, setError] = useState('');
  const Inpass = (event) => {
    password = event.target.value;
  };
  const Pass = () => {
    if (mypass === password) {
      dispatch(setParol(true));
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
