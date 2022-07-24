import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAction } from 'src/hooks/useAction';
import { setAuth } from 'src/store/Reduxauth/action';
import { instance } from '../../../axios';
import './Login.css';

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [changeemail, setEmail] = useState<string>(''); 
  const [changepassword, setPassword] = useState<string>('');
  const { AxiosUserAction } = useAction();


const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    instance.post('/auth/login', {
          email: changeemail,
          password: changepassword,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        AxiosUserAction();
        dispatch(setAuth(true))
      }).catch((err) => {  console.log(err); });
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
          value ={changeemail}
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Пароль"
          className="inp2"
          value={changepassword}
          type="password"
        />
        <button type="button" className="inpsub" onClick={clickHandler}>Войти</button>
      </div>
    </div>
  );
};

export default Login;
