
import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import './Profile.css';

const Profile: React.FC = () => {
  const { data } = useAppSelector((state) => state.authorization)


  const Logout = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.removeItem('token');
  };
  return (
    <div className="profile">
      <title>Профиль</title>
      <div className="prof">
        <h1>
          Профиль
          {' '}
          {data.email}
        </h1>
        <img
          src={data.avatarUrl}
          alt="ava"
          className="avatarka"
        />
        <div className="data">
          <p>Данные аккаунта:</p>
          <ul>
            Почта:
            {data.email}
          </ul>
          <ul>
            Ник:
            {data.nickname}
          </ul>
          <button type="button" className="but" onClick={Logout}>
            Выход
          </button>
        </div>
      </div>
    </div>
  );
}; export default Profile;
