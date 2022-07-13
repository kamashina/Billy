/* eslint-disable react/jsx-props-no-spreading */
import './Reg.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setAuth, setUser } from '../../../store/Reduxauth/login/action';
import instance, { API_URL } from '../../../axios';

const Reg = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const [ava, setAva] = useState(`${API_URL}/uploads/KSeclybJMGg.jpg`);
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    const { data } = await instance.post('/uploads', formData);
    try {
      setAva(`${API_URL}${data.url}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
  const onSubmit = (user) => {
    instance
      .post('/auth/register', {
        email: user.pochta,
        password: user.pass,
        nickname: user.nick,
        avatarUrl: ava,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch(setUser(response.data));
        localStorage.setItem('authstatus', true);
        dispatch(setAuth(true));
      })
    // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <title>Регистрация</title>
      <div className="Reg">
        <h1 className="mess">Регистрация</h1>
        <input
          {...register('pochta')}
          className="email"
          type="text"
          placeholder="Почта"
        />
        <input
          {...register('nick')}
          className="nick"
          type="text"
          placeholder="Ник"
        />
        <input
          {...register('pass')}
          className="pass"
          type="password"
          placeholder="Пароль"
        />
        <input
          onChange={handleFileUpload}
          className="fileup"
          type="file"
        />
        <input
          type="submit"
          className="regisrt"
        />
      </div>
    </form>
  );
}; export default Reg;
