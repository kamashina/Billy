import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setParol, setNick, setCountry, setID,
} from '../../store/Registration/action';
import './Reg.css';

function Reg() {
  const logo = useSelector((state) => state.registration.avatar);
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
      dispatch(setID(Math.random()));
    } else {
      setError('КАКАЯ ЖАЛОСТЬ');
    }
  };
  const Nickname = (event) => { dispatch(setNick(event.target.value)); };
  const Country = (event) => { dispatch(setCountry(event.target.value)); };
  return (
    <reg className="Reg">
      <h1>ВОЙДИ</h1>
      <img src={logo} alt="avatar" />
      <input className="name" type="text" onChange={Nickname} placeholder="Логин" />
      <input className="pass" type="password" onChange={Inpass} placeholder="Пароль" />
      <input className="country" type="text" onChange={Country} placeholder="Страна" />
      <p className="err">{Error}</p>
      <button type="button" className="registr" onClick={Pass}>Войти</button>
    </reg>
  );
} export default Reg;
