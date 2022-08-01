import './Reg.css';
import React, { useState } from 'react';
import { API_URL, instance } from '../../../axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/Reduxauth/action';
import { AxiosUserAction } from '../../../store/action-creator/user';


const Reg: React.FC= () => {
  const [ava, setAva] = useState<string>(`${API_URL}/uploads/KSeclybJMGg.jpg`);
  const dispatch = useDispatch()
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [nickname, setNickname] = useState<string>();

  
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    const { data } = await instance.post('/uploads', formData);
    try {
      setAva(`${API_URL}${data.url}`);
    } catch (err) {
      console.log(err);
    }
  };


  const handleOnclick = (e: React.MouseEvent<HTMLElement>) => {
    instance
      .post('/auth/register', {
        email,
        password,
        nickname,
        avatarUrl: ava,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        AxiosUserAction();
        dispatch(setAuth(true))
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="Reg">
      <title>Регистрация</title>
      <h1 className="mess">Регистрация</h1>
      <input
        onChange={(event) => setEmail(event.target.value)}
        className="email"
        type="text"
        placeholder="Почта"
      />

      <input
        onChange={(event) => setNickname(event.target.value)}
        className="nick"
        type="text"
        placeholder="Ник"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        className="pass"
        type="password"
        placeholder="Пароль"
      />
      <input
        onChange={handleFileUpload}
        className="fileup"
        type="file"
      />
      <button onClick={handleOnclick} type="button" className="regisrt">Регистрация</button>
    </div>
  );
};
export default Reg;
