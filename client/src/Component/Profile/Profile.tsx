
import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import './Profile.css';

const Profile: React.FC = () => {
  const { email, avatarUrl, nickname } = useAppSelector((state) => state.authorization)


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
          {email}
        </h1>
        <img
          src={avatarUrl}
          alt="ava"
          className="avatarka"
        />
        <div className="data">
          <p>Данные аккаунта:</p>
          <ul>
            Почта:
            {email}
          </ul>
          <ul>
            Ник:
            {nickname}
          </ul>
          <button type="button" className="but" onClick={Logout}>
            Выход
          </button>
        </div>
      </div>
    </div>
  );
}; export default Profile;
