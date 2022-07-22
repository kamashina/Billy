import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header: React.FC = () => {
  
const {auth, avatar, email}  = useAppSelector((state) => state.authorization)

  const Logout = () => {
    localStorage.removeItem('token');
  };
  return (
    <div className="header">
      <div className="one">
        <Navbar />
      </div>
      <span className="main">Проект №1</span>
      {auth
        ? (
          <div className="group">
            <img
              src={avatar}
              alt="ava"
              className="ava"
            />
            <NavLink className="log" to="/Profile">{email}</NavLink>
            <button type="button" onClick={Logout} className="logbtn">Выйти</button>
          </div>
        )
        : (
          <div className="group">
            <NavLink className="logout" to="/Reg.js">Регистрация</NavLink>
            <NavLink className="log" to="/Login.js">Вход</NavLink>
          </div>
        )}
    </div>
  );
}; export default Header;
