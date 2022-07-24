import React, { useState } from 'react';
import { useAction } from 'src/hooks/useAction';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { instance } from '../../../axios';
import './Login.css';

const Login: React.FC = () => {
  const [changeemail, setEmail] = useState<string>(''); 
  const [changepassword, setPassword] = useState<string>('');
  const {auth} = useAppSelector((state) => state.authorization);
  const { AxiosUserAction } = useAction();
const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    instance.post('/auth/login', {
          email: changeemail,
          password: changepassword,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        console.log(response);
      }) .catch((err) => {  console.log(err); });
      AxiosUserAction();
console.log(auth)
    }
  return (
    <div>
      <title>Вход</title>
      <div className="login">
        <h1 className="mess">Вход</h1>
        <input
          onChange = {(event) => setEmail(event.target.value)}
          placeholder="Почта"
          className="inp1"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Пароль"
          type="password"
          className="inp2"
        />
        <button type="button" className="inpsub" onClick={clickHandler}>Войти</button>
      </div>
    </div>
  );
};

export default Login;
